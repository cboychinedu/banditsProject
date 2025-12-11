# Importing the necessary modules
from google import genai
from google.genai import types

# Define the video file path
VIDEO_FILE_PATH = "vid1.mp4" 

# Loading the video into memory
with open(VIDEO_FILE_PATH, "rb") as video_file:
    content = video_file.read()

# The client gets the API key from the environment variable `GEMINI_API_KEY`.
# NOTE: Replace the API key with your actual, secure key management.
client = genai.Client(api_key="AIzaSyA_xb5jBScKbeBzJU9XcuNijd9Nl2_Sk-o") 

response = client.models.generate_content(
    # CHANGE MODEL: Use a model that supports video input, e.g., 'gemini-2.5-pro' 
    # (Check the latest documentation for video-capable models)
    model="gemini-2.5-pro", 
    contents=[
        types.Part.from_bytes(
            data=content,
            # IMPORTANT: Set the MIME type for the video file
            mime_type="video/mp4" 
        ),
        """Tell me briefly what you see in this video, 
        assuming the persons are bandits, where are they headed and what are they doing, 
        and if they are carrying weapons, what kind of weapons are they carrying?"""
    ]
)

# Displaying the response
print(response.text)