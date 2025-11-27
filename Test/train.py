# Importing ultralytics 
import torch 
from ultralytics import YOLO

# 1. Load a pretrained model (YOLOv8 small)
model = YOLO('yolov8s.pt') 

# 2. Train the model
results = model.train(
    data='data.yaml',   # Path to your YAML file
    epochs=50,          # Number of training epochs
    imgsz=640,          # Image size
    batch=16,           # Number of images per batch (adjust based on GPU memory)
    name='banditsModel'
)