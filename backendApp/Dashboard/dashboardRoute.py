#!/usr/bin/env python3

# Importing the necessary modules 
import os 
import jwt  
import bcrypt 
from Database.mongo import MongoDB
from flask import request, Blueprint, jsonify

# Getting the secret key 
secretKey = os.getenv("SECRET_KEY")

# Creating an instance of the mongo db class 
db = MongoDB()

# Creating the blueprint object 
dashboard = Blueprint("dashboard", __name__,
                    template_folder="templates",
                    static_folder="static")

# Creating a route for change the password 
@dashboard.route("/changePassword", methods=["POST"]) 
def ChangePassword():
    # Using try and except block to handle the error 
    try:
        # Getting the token from the request header 
        token = request.headers.get("userToken")

        # Decoding the token to get the user email 
        decodedToken = jwt.decode(token, secretKey, algorithms=["HS256"])

        # Getting the email from the decoded token
        email = decodedToken["email"]

        # Getting the new password from the request body 
        requestData = request.get_json()
        newPassword = requestData["newPassword"]

        # Hashing the new password 
        newPassword = bcrypt.hashpw(newPassword.encode('utf-8'), bcrypt.gensalt(14))
        newPassword = newPassword.decode("utf-8")

        # Updating the user password in the database
        isUpdated = db.updateUserPassword("users", email, newPassword)

        # If the password was not updated, return an error response
        if not isUpdated:
            # Sending the error response 
            return jsonify({
                "status": "error",
                "message": "Failed to update password",
                "statusCode": 400
            })
        
        # Else if the password was updated successfully 
        else: 
            # Returning a success response 
            return jsonify({
                "status": "success",
                "message": "Password changed successfully",
                "statusCode": 200
            })
    
    # Except block to catch any error
    except Exception as e:
        # Returning an error response
        return jsonify({
            "status": "error",
            "message": str(e),
            "statusCode": 500
        })

# Creating the dashboard profile page 
@dashboard.route("/profile", methods=["POST"])
def ProfilePage():
    # Using try and except block to handle the error 
    try:
        # Getting the token from the request header 
        token = request.headers.get("userToken")

        # Decoding the token to get the user email 
        decodedToken = jwt.decode(token, secretKey, algorithms=["HS256"])

        # Getting the email from the decoded token
        email = decodedToken["email"]

        # Retrieving the user data from the database 
        userData = db.getUserProfile("users", email) 

        # Returning the user data as a JSON response 
        return jsonify({
            "status": "success",
            "message": "User profile retrieved successfully",
            "data": userData,
            "statusCode": 200
        })
    # Except block to catch any error
    except Exception as e:
        # Returning an error response
        return jsonify({
            "status": "error",
            "message": str(e),
            "statusCode": 500
        })
