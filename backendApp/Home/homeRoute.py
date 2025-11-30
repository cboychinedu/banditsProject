#!/usr/bin/env python3 

# Importing the necessary modules 
import os 
import jwt 
import json
import bcrypt
import datetime
from Database.mongo import MongoDB
from flask import request, Blueprint, jsonify

# Getting the secret key 
secretKey = os.getenv("SECRET_KEY")

# Creating an instance of the mongo db class 
db = MongoDB() 

# Creating the blueprint object 
home = Blueprint("home", __name__, 
                template_folder="templates", 
                static_folder="static")

# Creating the home page 
@home.route("/", methods=["GET"])
def HomePage(): 
    # Rendering the home page 
    return jsonify({
        "status": "success", 
        "message": "Welcome to the drone server homepage", 
        "statusCode": 200

    })

# Creating a route for the register page 
@home.route("/register", methods=["POST"])
def Register():
    # Using try and except block to handle the error 
    try:
        # Getting the user data from the request body 
        data = request.get_json()

        # Getting the user's details 
        email = data["email"]
        fullname = data["fullname"]
        password = data["password"]

        # Retriving the user data to verify if he/she is 
        # already registered on the database 
        usersData = db.getUserInformation("users", email)
        
        # if the database value return a None type value, 
        # Execute the block of code below 
        if usersData == None: 
            # Hashing the password 
            hashPassword = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(14))
            hashPassword = hashPassword.decode("utf-8")

            # Building the register user's data 
            registerData = {
                "fullname": fullname, 
                "email": email,
                "password": hashPassword,
                "createdAt": datetime.datetime.now(datetime.timezone.utc).isoformat()
            }

            # Saving the new user on the database 
            result = db.saveUserInformation("users", registerData)

            # Checking it the results were saved on the database 
            if (result): 
                # Return a success message 
                return jsonify({
                    "status": "success", 
                    "message": "User registered on the database!", 
                    "statusCode": 200
                })
            
            # Else if the program was unable to save the data on the 
            # Database 
            else: 
                # Return an error message 
                return jsonify({
                    "status": "error", 
                    "message": "Unable to save the user on the database", 
                    "statusCode": 404
                })
        # if the user is already registered on the database 
        else: 
            # Execute the block of code below 
            return jsonify({
                "status": "error", 
                "message": "User already registered!",
                "statusCode": 404
            })

    # On exception 
    except Exception as e:
        # Print the error message 
        print(e)

        # Return back the error message 
        return jsonify({
            "status": "error",
            "message": str(e),
            "statusCode": 500
        })

# Creating a route for the login page 
@home.route("/login", methods=["POST"])
def Login(): 
    # Getting the email and password 
    # Using try catch block to get the user login details 
    try: 
        # Getting the user details 
        loginData = request.get_json() 
        email = loginData["email"]
        password = loginData["password"]

        # Checking to see if the user is already registered on the 
        # database 
        usersData = db.getUserInformation("users", email)

        # if the database value return a None type value, 
        # Execute the block of code below 
        if usersData == None: 
            # Return an error message 
            errorMessage = {
                "status": "error",
                "message": "Invalid email or password!", 
                "statusCode": 404, 
            }

            # Sending the error message 
            return jsonify(errorMessage)
        
        # Else if the user exists on the database, execute the block 
        # of code below 
        else: 
            # Getting the user's data 
            usersData = json.loads(usersData)

            # Validate the user's password to see if it correct 
            isMatch = bcrypt.checkpw(password.encode('utf-8'), usersData["password"].encode('utf-8'))

            # if the passwords match, execute the block of 
            # code below 
            if (isMatch): 
                # Generate a user token 
                payload = {
                    "email": usersData["email"],
                    "fullname": usersData["fullname"],
                    "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(days=10)
                }

                # Encode the payload as a jwt token 
                encodedJwt = jwt.encode(
                    payload, 
                    secretKey, 
                    algorithm="HS256"
                )

                # Building the response data with the token value 
                responseData = {
                    "message": "User logged in!", 
                    "status": "success", 
                    "token": encodedJwt, 
                    "statusCode": 200, 
                }

                # Sending the json data 
                return jsonify(responseData) 

            # Else if the user password was incorrect, execute the block 
            # of code below 
            else: 
                # Create a response data 
                responseData = {
                    "message": "Invalid email or password",
                    "status": "error", 
                    "statusCode": 404, 
                }

                # Send the response data as a json object 
                return jsonify(responseData) 

    # On error generated, log the error to the console 
    except Exception as e:
        # Display the error message 
        print(f"Error: {e}") 

        # Return an error message 
        return jsonify({
            "message": "Unable to connect to the server!", 
            "status": "error", 
            "statusCode": 500, 
        })  