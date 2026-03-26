from PIL import Image
import sys

for name in ['sandeep', 'carine']:
    try:
        img = Image.open(f'public/founder-{name}.jpg').convert('RGB')
        w, h = img.size
        # sample top left corner
        tl = img.getpixel((0,0))
        tr = img.getpixel((w-1,0))
        bl = img.getpixel((0,h-1))
        br = img.getpixel((w-1,h-1))
        print(f'{name} corners:', tl, tr, bl, br)
    except Exception as e:
        print(e)

