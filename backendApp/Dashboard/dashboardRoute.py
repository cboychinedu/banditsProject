#!/usr/bin/env python3

# Importing the necessary modules 
import os 
import jwt 
import json 
import datetime 
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
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e),
            "statusCode": 500
        })
