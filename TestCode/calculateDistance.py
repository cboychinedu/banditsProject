# Importing the necessary modules 
from geopy.distance import great_circle

# Define the coordinates as tuples (latitude, longitude)
point_nyc = (40.7128, -74.0060)
point_la = (34.0522, -118.2437)

# Calculate the distance
distance = great_circle(point_nyc, point_la)

print("Distance using geopy:")
print(f"-> {distance.miles:.2f} miles")
print(f"-> {distance.km:.2f} kilometers")