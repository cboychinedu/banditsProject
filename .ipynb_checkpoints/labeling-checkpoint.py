import os
from ultralytics import YOLO

def detectAndSaveLabels(imagePath, modelName='yolov8n.pt', outputDir='runs/predict_labels'):
    """
    Performs object detection using a YOLO model and saves the 
    bounding box coordinates to a YOLO-format label .txt file.

    Args:
        imagePath (str): Path to the image file to run inference on.
        modelName (str): Name of the pretrained YOLO model (e.g., 'yolov8n.pt').
        outputDir (str): Directory where the results (including the labels folder) will be saved.
    """
    
    # 1. Load the pre-trained YOLO model
    # The 'n' stands for nano, the smallest and fastest model.
    try:
        model = YOLO(modelName) 
    except Exception as e:
        print(f"❌ Error loading model: {e}")
        print("Please ensure you have run 'pip install ultralytics' and have an internet connection.")
        return

    print(f"[INFO]: Model '{modelName}' loaded successfully.")
    
    # 2. Perform Prediction with save_txt flag
    # The crucial part is 'save_txt=True'. This automatically creates a 'labels' 
    # subfolder inside the run directory and writes the YOLO-format predictions.
    
    # We also specify the project and name arguments to control the output directory.
    results = model.predict(
        source=imagePath, 
        project=outputDir,
        name='detection_run',
        save=False,         # Set to False to prevent saving the annotated image 
        save_txt=True,      # Set to True to save the coordinates as .txt files
        conf=0.25,          # Minimum confidence score for a detection to be saved
        iou=0.7             # NMS IOU threshold
    )

    # 3. Determine Output Path and Print Confirmation
    # The results are saved in the project/name/labels folder.
    imageFileName = os.path.basename(imagePath)
    baseName = os.path.splitext(imageFileName)[0]
    labelFilePath = os.path.join(outputDir, 'detection_run', 'labels', f'{baseName}.txt')
    
    print("\n--- Detection Complete ---")
    print(f"✅ Prediction labels saved successfully to:")
    print(f"   {labelFilePath}")
    
    # 4. (Optional) Print the content of the label file
    if os.path.exists(labelFilePath):
        print("\n--- Content of the Label File ---")
        with open(labelFilePath, 'r') as f:
            print(f.read())
            
        print("\nNote: Format is [class_id] [x_center_norm] [y_center_norm] [width_norm] [height_norm]")
    else:
        print("⚠️ Warning: Label file not found. Check if any objects were detected.")
        

# --- Execution ---
if __name__ == "__main__":
    # !!! IMPORTANT: Set the path to your image file here !!!
    testImagePath = "dataset/bandits/img1.jpg" 
    


    detectAndSaveLabels(testImagePath)