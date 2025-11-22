# 📦 YOLOv8 Bandits Object Detection Dataset Preparation

<img src="./images/result_bandits.jpg">

<p> This repository contains the necessary scripts and documentation for preparing a custom object detection dataset using the PASCAL VOC XML annotation format and converting it into the required YOLOv8 format for training with the Ultralytics framework.

The project focuses on developing a detection model for assets or persons labeled as "bandits" in visual data.

</p>

# 🇳🇬 Context: Banditry in Nigeria

<p>
The term "bandits" in this project's context refers to the armed criminal groups operating primarily across Nigeria’s Northwest and North Central states.

Unlike insurgent groups, these bandits are largely motivated by economic gains, engaging in mass kidnapping for ransom, cattle rustling, and violence against local communities. They often operate from remote forests, using sophisticated organizational structures and powerful weaponry.

This socio-political and security challenge has resulted in significant humanitarian crises, displacement, and disruption of agricultural activities, making visual identification and monitoring of their activities a key area for security-related computer vision applications.

</p>

### 🚀 Project Overview & Workflow

The core functionality of this project is the data pipeline used to transform human-labeled annotation files into a machine-readable format compatible with modern deep learning models.

Input Data: PASCAL VOC XML files (containing absolute pixel coordinates: xmin, ymin, xmax, ymax).

Conversion Script: A Python script reads the XML, normalizes the coordinates relative to the image size, and calculates the box center and dimensions.

Output Data: YOLO format .txt files (normalized coordinates: class_id x_center y_center width height).

Training: The resulting YOLO data is used alongside the dataset.yaml file to train a detection model like YOLOv8.

🛠️ Setup and Installation

This project requires Python and the following dependencies:

```bash 
pip install opencv-python numpy ultralytics
```


⚙️ Usage: Data Conversion

1. Structure Your Data

Ensure your project directory is organized as follows:

```bash
project_root/
├── annotations/   # All input PASCAL VOC XML files are here
├── images/        # All corresponding images (.jpg, .png) are here
└── conversion_script.py
```

