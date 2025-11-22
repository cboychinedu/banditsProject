import xml.etree.ElementTree as ET
import os

# --- Configuration ---
XML_DIR = 'annotations/'       # Directory containing all your PASCAL VOC XML files
OUTPUT_DIR = 'labels/'         # Directory where YOLO .txt files will be saved
CLASSES = ['bandits']          # List of all unique object class names in your dataset

# Create the output directory if it doesn't exist
os.makedirs(OUTPUT_DIR, exist_ok=True)

def xml_to_yolo_bbox(bbox, w, h):
    """
    Converts absolute pixel coordinates (xmin, ymax, xmax, ymin) to 
    normalized YOLO format (x_center, y_center, width, height).
    """
    xmin = float(bbox.find('xmin').text)
    ymin = float(bbox.find('ymin').text)
    xmax = float(bbox.find('xmax').text)
    ymax = float(bbox.find('ymax').text)

    x_center = (xmin + xmax) / 2 / w
    y_center = (ymin + ymax) / 2 / h
    width = (xmax - xmin) / w
    height = (ymax - ymin) / h
    
    return [x_center, y_center, width, height]

# --- Main Conversion Loop ---
for xml_file in os.listdir(XML_DIR):
    if not xml_file.endswith('.xml'):
        continue

    xml_path = os.path.join(XML_DIR, xml_file)
    tree = ET.parse(xml_path)
    root = tree.getroot()

    # Get image dimensions
    size = root.find('size')
    w = int(size.find('width').text)
    h = int(size.find('height').text)

    # Prepare output file
    output_path = os.path.join(OUTPUT_DIR, xml_file.replace('.xml', '.txt'))
    
    with open(output_path, 'w') as out_file:
        for obj in root.findall('object'):
            name = obj.find('name').text
            
            # Get the class ID (must match the order in the CLASSES list)
            try:
                class_id = CLASSES.index(name)
            except ValueError:
                print(f"Warning: Class '{name}' not found in CLASSES list. Skipping.")
                continue

            # Convert and write bounding box data
            bndbox = obj.find('bndbox')
            yolo_coords = xml_to_yolo_bbox(bndbox, w, h)
            
            out_file.write(f"{class_id} {yolo_coords[0]:.6f} {yolo_coords[1]:.6f} {yolo_coords[2]:.6f} {yolo_coords[3]:.6f}\n")

print(f"Conversion complete. YOLO labels saved to: {OUTPUT_DIR}")