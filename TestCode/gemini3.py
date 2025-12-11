# Importing the necessary modules 
from google import genai
from google.genai import types 
import os # <-- Added to manage environment variables

# --- 1. Client Initialization Correction ---
# It's best practice to pass the API key via the client's configuration
# or an environment variable, and not hardcode it.
# The `genai.Client()` constructor handles this.
# Note: 'AIzaSyA_xb5jBScKbeBzJU9XcuNijd9Nl2_Sk-o' is a placeholder. 
# You should use a valid API key.

# Set the API key using an environment variable (recommended)
# os.environ['GEMINI_API_KEY'] = 'AIzaSyA_xb5jBScKbeBzJU9XcuNijd9Nl2_Sk-o'

# Initialize the client. The key will be read from the environment
# variable GEMINI_API_KEY or by using Application Default Credentials (for Vertex AI).
client = genai.Client(api_key="")

# loading the image into memory 
try:
    with open("image.jpg", "rb") as image_file:
        content = image_file.read()
except FileNotFoundError:
    print("Error: The file 'image.jpg' was not found.")
    exit()

# --- 2. Request Structure: Model and Content ---
# The contents list is correct: types.Part for the image and a string for the text.

response = client.models.generate_content(
    # The model name 'gemini-3-pro-preview' is correct.
    model="gemini-3-pro-preview", 
    contents=[
        # Creating a Part from bytes is the correct approach for sending an image.
        types.Part.from_bytes(
            data=content,
            mime_type="image/jpeg"
        ),
        # The text prompt is included as a string.
        """Tell me briefly what you see in this image, 
        assuming the persons are bandits, where are they headed and what are they doing, 
        and if they are carrying weapons, what kind of weapons are they carrying?"""
    ]
)

# Displaying the response 
print(response.text)