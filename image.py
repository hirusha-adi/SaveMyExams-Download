from PIL import Image
import os

def combine_images(image_prefix):
    images = []
    
    image_files = [f for f in os.listdir(os.getcwd()) if (f.startswith(image_prefix) and f.endswith('.png')) and ('_final' in f)]

    for image_file in image_files:
        images.append(Image.open(image_file))

    total_height = sum([image.height for image in images])
    width = max([image.width for image in images])

    final_image = Image.new("RGB", (width, total_height), color="white")

    height_accumulator = 0

    for image in images:
        final_image.paste(image, (0, height_accumulator))
        height_accumulator += image.height

    final_image_file = f"{image_prefix}_final.png"
    final_image.save(final_image_file)

