import os

def manageImageCount(folderPath, maxImagesToKeep=500):
    """
    Identifies image files in a directory and deletes all files 
    exceeding a specified maximum count.

    Args:
        folderPath (str): The path to the folder containing the images.
        maxImagesToKeep (int): The maximum number of images to keep.
    """
    
    # Define common image extensions (case-insensitive)
    imageExtensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp')
    
    if not os.path.isdir(folderPath):
        print(f"❌ Error: Directory not found at '{folderPath}'.")
        return

    # 1. Get all file names in the directory
    fileNames = os.listdir(folderPath)
    
    # 2. Filter for image files and store their full paths
    imagePaths = []
    for fileName in fileNames:
        # Check if the file is a regular file (not a subdirectory)
        fullPath = os.path.join(folderPath, fileName)
        if os.path.isfile(fullPath):
            _, ext = os.path.splitext(fileName)
            if ext.lower() in imageExtensions:
                imagePaths.append(fullPath)
                
    # 3. Sort the list to determine which images are "first"
    # The list is sorted alphabetically by full path (which usually includes the filename).
    imagePaths.sort()
    
    totalImages = len(imagePaths)
    print(f"[INFO]: Found {totalImages} image files in the directory.")

    if totalImages <= maxImagesToKeep:
        print(f"✅ Success: Total images ({totalImages}) is less than or equal to the limit ({maxImagesToKeep}). No deletions needed.")
        return
    
    # 4. Identify files to delete
    # Files from the index 'maxImagesToKeep' onwards are deleted.
    filesToDelete = imagePaths[maxImagesToKeep:]
    
    print(f"[INFO]: Identifying {len(filesToDelete)} files for deletion...")
    
    deletedCount = 0
    # 5. Loop through the excess files and delete them
    for filePath in filesToDelete:
        try:
            os.remove(filePath)
            deletedCount += 1
            # print(f"  [DELETED]: {os.path.basename(filePath)}") # Uncomment to see every deleted file
        except OSError as e:
            print(f"❌ Error deleting file {os.path.basename(filePath)}: {e}")

    print(f"\n--- Process Complete ---")
    print(f"🗑️ Total files deleted: {deletedCount}")
    print(f"🖼️ Total images remaining: {totalImages - deletedCount}")


# --- Execution ---
if __name__ == "__main__":
    # !!! IMPORTANT: SET YOUR IMAGE FOLDER PATH HERE !!!
    imageDirectory = "dataset/people" 
    
    # Set the desired number of images to keep
    targetCount = 1000 

    manageImageCount(imageDirectory, targetCount)