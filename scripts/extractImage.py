import cv2 
import os 

def extractUniqueFrames(videoPath, outputDir, videoName, threshold=1000):
    """
    Loads a video and saves a frame to disk ONLY when a significant change 
    is detected between the current and the previous frame.

    Args:
        videoPath (str): The file path to the input video.
        outputDir (str): The directory where the extracted frames will be saved.
        videoName (str): The prefix for the saved image filenames.
        threshold (int): The minimum pixel difference count to consider a change significant.
    """
    # Create the output directory 
    os.makedirs(outputDir, exist_ok=True) 
    print(f"[INFO]: Frames will be saved in: {os.path.abspath(outputDir)}")

    # Load the video into memory 
    videoCapture = cv2.VideoCapture(videoPath) 

    # Check if the video is opened successfully 
    if not videoCapture.isOpened(): 
        print(f"Error: Could not open video file at: {videoPath}")
        return 
    
    frameIndex = 0 
    savedFrameCount = 0
    previousGrayFrame = None # Initialize a variable to hold the previous frame

    # Loop through the video frames 
    while videoCapture.isOpened(): 
        # Read the frame 
        success, currentFrame = videoCapture.read() 

        # If success is false, we've reached the end
        if not success: 
            break 
        
        # 1. Convert the current frame to grayscale
        # Grayscale significantly speeds up comparison
        currentGrayFrame = cv2.cvtColor(currentFrame, cv2.COLOR_BGR2GRAY)
        
        # 2. Check if this is the very first frame
        if previousGrayFrame is None:
            # Save the first frame unconditionally
            filename = os.path.join(outputDir, f"{videoName}_{str(frameIndex).zfill(4)}.jpg")
            cv2.imwrite(filename, currentFrame)
            print(f"[INFO]: Saved initial frame: {filename}")
            savedFrameCount += 1
        else:
            # 3. Calculate the absolute difference between the current and previous frame
            frameDifference = cv2.absdiff(previousGrayFrame, currentGrayFrame)
            
            # 4. Apply a binary threshold to isolate pixels that changed significantly
            # Here, pixels with a difference greater than 25 (out of 255) are made white
            # 
            _, differenceThresh = cv2.threshold(frameDifference, 25, 255, cv2.THRESH_BINARY)
            
            # 5. Count the number of non-zero (changed) pixels
            nonZeroCount = cv2.countNonZero(differenceThresh)
            
            # 6. Check if the change is significant enough to save the frame
            if nonZeroCount > threshold:
                # Set the filename 
                filename = os.path.join(outputDir, f"{videoName}_{str(frameIndex).zfill(4)}.jpg")
                
                # Save the frame to disk 
                cv2.imwrite(filename, currentFrame)
                print(f"[INFO]: Change detected! Saving frame: {filename}")
                savedFrameCount += 1
            # If the change is NOT significant (nonZeroCount <= threshold), the frame is skipped.
            
        # 7. Update the previous frame for the next iteration
        previousGrayFrame = currentGrayFrame.copy()

        # Increment the total frame index
        frameIndex += 1 

    # Release the video capture object and clean up 
    videoCapture.release() 
    print(f"\n[INFO]: Finished extracting frames.")
    print(f"[INFO]: Total frames processed: {frameIndex}")
    print(f"[INFO]: Total unique frames saved: {savedFrameCount}")

# --- Execution ---
if __name__ == "__main__":
    # IMPORTANT: Update this with the correct video file path and name
    videoFile = "videos/vid7.mp4"
    outputDirectory = "images"
    videoFileName = "vid7"

    # You may need to adjust the 'threshold' value based on your video content.
    # A smaller number saves more frames (more sensitive), a larger number saves fewer (less sensitive).
    # Default is 1000 pixels difference.
    extractUniqueFrames(videoFile, outputDirectory, videoFileName, threshold=1000)