# Importing the necessary modules 
from google import genai
from google.genai import types 

# loading the image into memory 
with open("image.jpg", "rb") as image_file:
    content = image_file.read()

# The client gets the API key from the environment variable `GEMINI_API_KEY`.
client = genai.Client(api_key="")

response = client.models.generate_content(
    model="gemini-2.5-flash", 
    # model="gemini-3-pro-preview", 
    contents=[
        types.Part.from_bytes(
            data=content,
            mime_type="image/jpeg"
        ),
        """Tell me briefly what you see in this image and count the persons in this image, 
        assuming the persons are bandits, where are they headed and what are they doing, 
        and if they are carrying weapons, what kind of weapons are they carrying?"""
        # "Tell me in details what you see in this image, assuming the persons are bandits, where are they headed and what are they doing. "
    ]
)

# Displaying the response 
print(response.text)