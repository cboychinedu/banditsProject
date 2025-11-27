import os
import cv2
import numpy as np

def createAugmentedDataset(inputFolderPath, outputFolderPath, targetImageCount=1000, targetSize=(640, 640)):
    """
    Loads images, performs sequential renaming, applies OpenCV operations,
    and augments the dataset to reach the target image count via duplication.

    Args:
        inputFolderPath (str): Path to the folder with original images.
        outputFolderPath (str): Path where the processed and augmented images will be saved.
        targetImageCount (int): The total number of images desired after augmentation.
        targetSize (tuple): The uniform size (width, height) for all final images.
    """
    
    # 1. Setup
    imageExtensions = ('.jpg', '.jpeg', '.png')
    imagePaths = []
    
    if not os.path.exists(outputFolderPath):
        os.makedirs(outputFolderPath)
        print(f"Created output directory: {outputFolderPath}")
        
    print(f"Loading images from: {inputFolderPath}")

    # Find all image files
    for fileName in os.listdir(inputFolderPath):
        if fileName.lower().endswith(imageExtensions):
            imagePaths.append(os.path.join(inputFolderPath, fileName))
            
    # Sort files to ensure consistent renaming order
    imagePaths.sort()
    originalCount = len(imagePaths)
    
    if originalCount == 0:
        print("❌ Error: No images found in the input folder.")
        return

    print(f"[INFO]: Found {originalCount} original images.")

    # 2. Process and Rename Original Images
    processedImages = [] # List to store the processed NumPy arrays
    
    print("\n--- Processing and Renaming Original Images ---")
    for i, originalPath in enumerate(imagePaths):
        try:
            # Load image using OpenCV (returns BGR format)
            img = cv2.imread(originalPath)
            if img is None:
                print(f"⚠️ Warning: Could not read image at {os.path.basename(originalPath)}")
                continue

            # a. Resize the image (important for ML consistency)
            resizedImg = cv2.resize(img, targetSize, interpolation=cv2.INTER_LINEAR)
            
            # b. Perform simple color normalization (Optional, but often helps detection models)
            # Scaling pixel values to the 0-1 range is often done during data loading/training.
            # Here, we keep the data as standard 8-bit for saving, but the consistent resizing is key.
            
            # c. Create the new file name (e.g., img1.jpg, img2.jpg)
            fileExtension = os.path.splitext(originalPath)[1].lower()
            newFileName = f"img{i + 1}{fileExtension}"
            newPath = os.path.join(outputFolderPath, newFileName)
            
            # d. Save the processed image
            cv2.imwrite(newPath, resizedImg)
            processedImages.append(resizedImg)
            
            # print(f"  [SAVED]: {newFileName}") # Uncomment to see every file saved
            
        except Exception as e:
            print(f"❌ Error processing {os.path.basename(originalPath)}: {e}")

    # Update processed count
    processedCount = len(processedImages)
    print(f"✅ Finished processing {processedCount} original images.")
    
    # 3. Augment Dataset to Reach Target Count (Duplication)
    
    # Calculate how many duplicates are needed
    if processedCount >= targetImageCount:
        print(f"\nTarget count ({targetImageCount}) reached or exceeded. Skipping augmentation.")
        return
        
    imagesToDuplicate = targetImageCount - processedCount
    print(f"\n--- Augmenting Dataset ---")
    print(f"[INFO]: Need {imagesToDuplicate} more images to reach target of {targetImageCount}.")
    
    # Simple duplication loop
    duplicateCounter = processedCount + 1 # Start renaming from the next number
    
    while duplicateCounter <= targetImageCount:
        # Select an image to duplicate (cycle through the processed list)
        imgToCopy = processedImages[(duplicateCounter - 1) % processedCount]
        
        # Determine the file extension (using .jpg for simplicity in duplicates)
        newFileName = f"img{duplicateCounter}.jpg"
        newPath = os.path.join(outputFolderPath, newFileName)
        
        # Save the duplicate image
        cv2.imwrite(newPath, imgToCopy)
        
        duplicateCounter += 1

    print(f"✅ Successfully created {targetImageCount - processedCount} duplicates.")
    print(f"🖼️ Final image count in '{outputFolderPath}': {targetImageCount}")


# --- Execution Example ---
if __name__ == "__main__":
    # !!! CONFIGURE YOUR PATHS AND TARGET COUNT HERE !!!
    
    # 1. Path to your folder containing original images (e.g., 500 images)
    INPUT_DIR = "dataset/people"
    
    # 2. Path where the processed, augmented images will be saved
    OUTPUT_DIR = "images/converted"
    
    # 3. The total number of images you want in the OUTPUT_DIR (e.g., 1000)
    TARGET_COUNT = 1000
    
    # 4. Standard size for YOLOv8
    STANDARD_SIZE = (640, 640) 

    # --- Run the function ---
    createAugmentedDataset(INPUT_DIR, OUTPUT_DIR, TARGET_COUNT, STANDARD_SIZE)