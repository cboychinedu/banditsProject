from bing_image_downloader import downloader

# Define your search parameters
search_query = 'nigerian people'
number_of_images = 1000
output_directory = 'images' # Folder to save images in

print(f"Starting download for query: '{search_query}'")

try:
    downloader.download(
        query=search_query,
        limit=number_of_images,
        output_dir=output_directory,
        adult_filter_off=True, # Set to False to enable safe search
        force_replace=False, # Set to True to delete and replace folder if it exists
        verbose=True # Print progress
    )
    print("Download complete!")
except Exception as e:
    print(f"An error occurred during download: {e}")

# The images will be saved in a folder structure like:
# downloaded_images/cute puppies/image_01.jpg
# downloaded_images/cute puppies/image_02.jpg
# ...