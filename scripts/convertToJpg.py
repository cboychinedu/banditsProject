import os
from PIL import Image

def convertImagesToJpg(folderPath):
    """
    Converts all supported image files in a folder to JPG format, 
    saves them with the same base name, and then deletes the originals.

    Args:
        folderPath (str): The path to the folder containing the images.
    """
    
    # 1. Setup and Validation
    if not os.path.isdir(folderPath):
        print(f"❌ Error: Directory not found at '{folderPath}'.")
        return

    # Supported formats to convert from (Pillow handles many)
    imageExtensions = ('.png', '.gif', '.bmp', '.tiff', '.webp', '.jpeg') 
    
    filesToConvert = []
    
    # 2. Identify Image Files
    for fileName in os.listdir(folderPath):
        # We only want files that are NOT already .jpg to avoid reprocessing
        if fileName.lower().endswith(imageExtensions):
            filesToConvert.append(fileName)

    if not filesToConvert:
        print("✅ No non-JPG images found to convert.")
        return

    print(f"[INFO]: Found {len(filesToConvert)} images to convert.")
    
    tempFiles = [] # List to track newly created JPG files
    
    # 3. Convert and Save New JPG Files (with temporary names)
    print("\n--- Step 1: Converting and Saving New JPGs ---")
    for originalFileName in filesToConvert:
        originalPath = os.path.join(folderPath, originalFileName)
        
        # Create a temporary new file name to avoid conflict with the original file
        baseName = os.path.splitext(originalFileName)[0]
        tempJpgFileName = f"{baseName}_TEMP.jpg"
        tempJpgPath = os.path.join(folderPath, tempJpgFileName)
        
        try:
            # Open the image
            img = Image.open(originalPath)
            
            # Convert to RGB if necessary (JPG does not support transparency/alpha channel)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
                
            # Save the image as JPG to the temporary path
            img.save(tempJpgPath, 'jpeg')
            tempFiles.append({'original': originalPath, 'temp': tempJpgPath, 'baseName': baseName})
            
            # print(f"  [CONVERTED]: {originalFileName} -> {tempJpgFileName}") # Uncomment to see details
            
        except Exception as e:
            print(f"❌ Error converting '{originalFileName}': {e}")

    # 4. Delete Original Files
    print("\n--- Step 2: Deleting Original Files ---")
    deletedCount = 0
    for fileInfo in tempFiles:
        try:
            os.remove(fileInfo['original'])
            deletedCount += 1
            # print(f"  [DELETED]: {os.path.basename(fileInfo['original'])}") # Uncomment to see details
        except OSError as e:
            print(f"❌ Error deleting original file {os.path.basename(fileInfo['original'])}: {e}")

    # 5. Rename Temporary Files to Final Names
    print("\n--- Step 3: Renaming Temporary Files ---")
    renamedCount = 0
    for fileInfo in tempFiles:
        finalJpgFileName = f"{fileInfo['baseName']}.jpg"
        finalJpgPath = os.path.join(folderPath, finalJpgFileName)
        
        try:
            os.rename(fileInfo['temp'], finalJpgPath)
            renamedCount += 1
        except OSError as e:
            print(f"❌ Error renaming {os.path.basename(fileInfo['temp'])}: {e}")


    print(f"\n--- Process Complete ---")
    print(f"🗑️ Total original files deleted: {deletedCount}")
    print(f"🖼️ Total files successfully converted and saved: {renamedCount}")


# --- Execution ---
if __name__ == "__main__":
    # !!! IMPORTANT: CHANGE THIS TO THE PATH OF YOUR IMAGE FOLDER !!!
    targetDirectory = "dataset/people" 
    
    convertImagesToJpg(targetDirectory)