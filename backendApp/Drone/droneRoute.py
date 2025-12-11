# Importing the necessary modules 
import os 
import sys
from flask import Blueprint, jsonify, request
from Database.mongo import MongoDB

# Creating an instance of the mongo db class 
db = MongoDB() 

# Getting the secret key 
droneSecretKey = os.getenv("DRONE_SECRET_KEY")

# Creating the blueprint object 
drone = Blueprint("drone", __name__, 
                    template_folder="templates", 
                    static_folder="static")

# Creating a route for the drone status check 
@drone.route("/statusCheck", methods=["GET"])
def StatusCheck(): 
    # Rendering the status check page 
    return jsonify({
        "status": "success", 
        "message": "Drone server is up and running", 
        "statusCode": 200
    })

# Creating a route for taking the drone images 
@drone.route("/image", methods=["POST"])
def TakeDroneImage():
    # Using try and except block to handle the error 
    try:
        # Getting the drone secret key from the request header 
        droneKey = request.headers.get("droneKey")

        # Verifying the drone secret key 
        if droneKey != droneSecretKey:
            # Sending the error response 
            return jsonify({
                "status": "error", 
                "message": "Unauthorized access", 
                "statusCode": 401
            })

        # Getting the image data from the request body 
        imageData = request.get_json()

        # Here you can add the logic to process and save the image data
        # For demonstration, we will just return a success response

        # Sending the success response 
        return jsonify({
            "status": "success", 
            "message": "Image received successfully", 
            "statusCode": 200
        })

    except Exception as e:
        # Sending the error response in case of exception 
        return jsonify({
            "status": "error", 
            "message": str(e), 
            "statusCode": 500
        })