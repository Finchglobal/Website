from PIL import Image
import sys

def analyze_image(path):
    try:
        img = Image.open(path).convert("RGBA")
        print(f"Analyzing {path}...")
        
        # Check transparency
        alpha = img.split()[3]
        bbox = alpha.getbbox()
        if not bbox:
            print("  Image is completely transparent.")
            return

        # Check for non-transparent pixels
        pixels = list(img.getdata())
        non_transparent_pixels = [p for p in pixels if p[3] > 0]
        
        if not non_transparent_pixels:
            print("  Image is effectively transparent.")
            return
            
        # Check for background rect (corner pixels)
        corners = [pixels[0], pixels[img.width-1], pixels[-img.width], pixels[-1]]
        corner_alphas = [p[3] for p in corners]
        print(f"  Corner alphas: {corner_alphas}")
        if all(a == 255 for a in corner_alphas):
            print("  WARNING: Corners are fully opaque. Might have a background.")
        
        # specific check for dark background in corners
        corner_brightness = [sum(p[:3])/3 for p in corners]
        print(f"  Corner brightness: {corner_brightness}")

        # Average brightness of visible content
        r_total = sum(p[0] for p in non_transparent_pixels)
        g_total = sum(p[1] for p in non_transparent_pixels)
        b_total = sum(p[2] for p in non_transparent_pixels)
        count = len(non_transparent_pixels)
        
        avg_brightness = (r_total + g_total + b_total) / (3 * count)
        print(f"  Average brightness of content: {avg_brightness:.2f}")
        
    except Exception as e:
        print(f"  Error: {e}")

if __name__ == "__main__":
    analyze_image("public/logo-dark.png")
    analyze_image("public/logo-light.png")
