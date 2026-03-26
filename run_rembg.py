from rembg import remove
from PIL import Image

for name in ['sandeep', 'carine']:
    input_img = Image.open(f'public/founder-{name}.jpg')
    output_img = remove(input_img)
    output_img.save(f'public/founder-{name}-rm.png')

