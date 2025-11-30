#!/usr/bin/env python3

# Importing the necessary modules
import json 
import datetime 
from flask import jsonify
from bson.objectid import ObjectId 
from pymongo import MongoClient
from bson import json_util 

# Creating a class for handling the database operations 
class MongoDB: 
    def __init__(self): 
        # Connecting to the database 
        self.client = MongoClient('mongodb://localhost:27017/')
        self.db = self.client["droneServer"]

    def updateUserPassword(self, collectionName, email, newPassword):
        # Getting the collection object 
        collection = self.db[collectionName]

        # Setting the query 
        query = { "email": email }

        # Setting the new values 
        newValues = { "$set": { "password": newPassword } }

        # Updating the user password in the database 
        result = collection.update_one(query, newValues)

        # Returning the result 
        return result.modified_count > 0  # Returns True if password was updated

    # Creating a method for saving the user details 
    def saveUserInformation(self, collectionName, userInformation):
        # Getting the collection object 
        collection = self.db[collectionName]

        # Saving the collection data 
        result = collection.insert_one(userInformation)

        # Returning the result 
        return result 

    # Get user's information 
    def getUserInformation(self, collectionName, email): 
        # Setting the query 
        query = { 'email': email}
        collection = self.db[collectionName]

        # Find one data by the specified email address 
        data = collection.find_one(query, {
            "_id": 1, 
            "fullname": 1, 
            "email": 1, 
            "password": 1, 
        })

        # if the the data is none 
        if data == None:
            # Return the None type 
            return None 
        
        # Else if the data was found 
        else: 
            # Convert the doucment into a json object 
            jsonData = json.dumps(data, default=json_util.default)
            # jsonData = jsonify(jsonData)

            # Return the json object 
            return jsonData; 

    # Get users profile information 
    def getUserProfile(self, collectionName, email): 
        # Setting the query 
        query = { 'email': email}
        collection = self.db[collectionName]

        # Find one data by the specified email address 
        data = collection.find_one(query, {
            "_id": 1, 
            "fullname": 1, 
            "email": 1, 
            "createdAt": 1,
        })

        # if the the data is none 
        if data == None:
            # Return the None type 
            return None 
        
        # Else if the data was found 
        else: 
            # Convert the doucment into a json object 
            jsonData = json.dumps(data, default=json_util.default)
            # jsonData = jsonify(jsonData)

            # Return the json object 
            return jsonData