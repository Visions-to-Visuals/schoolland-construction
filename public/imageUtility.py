import os
import json

# Define the base path where the images are stored
base_path = './public'

# List of directories to organize by
directories = [
    "Kitchens", "Bathrooms", "Outdoor",
    "Fireplaces", "Closets", "New Homes", "Other"
]

# Initialize the list that will hold the category data
categories = []

# Iterate over each directory
for directory in directories:
    # Full path to the directory
    dir_path = os.path.join(base_path, directory)
    
    # Initialize the dictionary for this category
    category = {
        "text": directory,
        "images": []
    }
    
    # List all files in the directory
    for file in os.listdir(dir_path):
        # Check if it's a file and not a directory
        if os.path.isfile(os.path.join(dir_path, file)):
            # Append the file to the images list
            category['images'].append(f'/{directory}/{file}')
    
    # Append the category to the categories list
    categories.append(category)

# Define the path for the output JSON file
output_file = 'categories.json'

# Write the data to a JSON file
with open(output_file, 'w') as f:
    json.dump(categories, f, indent=4)

print(f"JSON file created at {output_file}")
