# Importing the necessary modules 
import os 

# Creating a function to rename the image 
def renameImage(folderPath, baseName="img"): 
    # Define common image extensions 
    imageExtensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp')

    # Get all the files in the directory 
    fileNames = os.listdir(folderPath)

    # Filter for images files 
    imageFiles = []

    # looping 
    for fileName in fileNames: 
        # split the name 
        name, ext = os.path.splitext(fileName)

        # Check if the extension is in out list 
        if ext.lower() in imageExtensions: 
            # Append the image files to the image list 
            imageFiles.append(fileName)

    # Sort the list to ensure consisten renaming order 
    imageFiles.sort() 

    # Displaying the info 
    print(f"[INFO]: Found {len(imageFiles)} images rename in {folderPath}")

    # Start the counter for the new names 
    imageCounter = 1 

    # Loop through the filtered image files 
    for oldFileName in imageFiles: 
        # Determin the file extension 
        _, ext = os.path.splitext(oldFileName)

        # Create the new file name 
        newFileName = f"{baseName}{imageCounter}{ext.lower()}"

        # Construct the full paths 
        oldPath = os.path.join(folderPath, oldFileName) 
        newPath = os.path.join(folderPath, newFileName) 

        # Check if the new name already exists and handle the rename 
        if oldFileName != newFileName: 
            try: 
                # Renaming the images 
                os.rename(oldPath, newPath)
                print(f"[SUCCESS]: Renamed {oldFileName} to {newFileName}")

                # Incrementing the image counter 
                imageCounter += 1 
            except Exception as e: 
                print(f"[ERROR]: Could not rename {oldFileName}: {e}")

        else: 
            # Skipping the images 
            print(f"[SKIP]: File {oldFileName} is already correctly named.")
            imageCounter += 1

# Running the code 
if __name__ == "__main__": 
    # Setting the image directory 
    imageDirectory = "dataset/people"

    # Setting the file base name 
    fileBaseName = "people"

    # Running the main function
    renameImage(imageDirectory, fileBaseName)