#!/usr/bin/env python3

# Importing the necesary modules
import os  
import sys
import cv2 
import numpy as np
import ultralytics
from google import genai
from google.genai import types
from flask import Flask, request

# Creating a class called the machine learning model analysis 
class MachineLearningModelAnalysis:
    # Initializing the class
    def __init__(self, modelPath):
        # Getting the model path 
        self.modelPath = modelPath

    # Creating a method for loading the model
    def loadModel(self):
        pass

    # Creating a method for calcuating the speed of the objects 
    def calculateObjectSpeed(self, previousPosition, currentPosition, timeElapsed):
        pass

    # Creating a method for performing object detection
    def performObjectDetection(self):
        """
        Docstring for PerformObjectDetection
        
        Here, we use ultralytics yolov8 model to perform object detection on the 
        given image data, and return the detected objects with their bounding boxes.
        :param imageData: Description
        """
        pass 

    # Creating a method for getting the intent of the object in the image 
    def getObjectIntent(self, imagePath):
        """
        Docstring for GetObjectIntent
        
        Here, we use google gemini api for image understanding to find out what the 
        bandits are doing in the image, and give a proper description of the image.
        :param imageData: Description
        """
        # loading the image into memory 
        with open(imagePath, "rb") as imageFile: 
            image = imageFile.read()
        
        # Loading the google gemini client
        client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

        # Generating the response from the gemini model
        response = client.models.generate_content(
            model="gemini-2.5-flash", 
            contents=[
                types.Part.from_bytes(
                    data=image,
                    mime_type="image/jpeg"
                ),
                """Tell me briefly what you see in this image and count the persons in this image, 
                assuming the persons with guns are bandits, where are they headed and what are they doing, 
                and if they are carrying weapons, what kind of weapons are they carrying?"""
            ]
        )

        # Removing unwanted asterisks from the response text
        responseData = response.text.replace("*", "")

        # Returning the response text 
        return responseData

    # Creating a method for calculating the (Estimated time of arrival) eta 
    def calculateETA(self, currentLocation, destinationLocation, speed):
        pass
