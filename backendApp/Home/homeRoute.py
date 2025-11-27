#!/usr/bin/env python3 

# Importing the necessary modules 
import os 
from datetime import datetime
from flask import request, Blueprint, redirect, url_for, jsonify

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
def RegisterPage(): 
    pass 

# Creating a route for the login page 
@home.route("/login", methods=["POST"])
def LoginPage(): 
    pass 