import sys
from PIL import Image
from collections import deque

if len(sys.argv) < 3:
    print("Usage: python3 make_transparent.py <src_path> <dst_path>")
    sys.exit(1)

src_path = sys.argv[1]
dst_path = sys.argv[2]

img = Image.open(src_path).convert("RGBA")
width, height = img.size
pixels = img.load()

# Outer flood fill from all 4 corners and outer edges
visited = set()
queue = deque()

# Add all perimeter pixels as seed candidates
for x in range(width):
    queue.append((x, 0))
    queue.append((x, height - 1))
    visited.add((x, 0))
    visited.add((x, height - 1))

for y in range(height):
    queue.append((0, y))
    queue.append((width - 1, y))
    visited.add((0, y))
    visited.add((width - 1, y))

def is_bg_pixel(r, g, b):
    # Match gray/white checkerboard background or white pixels
    if r > 150 and g > 150 and b > 150 and abs(r - g) < 16 and abs(g - b) < 16 and abs(r - b) < 16:
        return True
    return False

while queue:
    x, y = queue.popleft()
    r, g, b, a = pixels[x, y]

    if is_bg_pixel(r, g, b):
        pixels[x, y] = (0, 0, 0, 0)

        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                visited.add((nx, ny))
                queue.append((nx, ny))

img.save(dst_path, "PNG")
print(f"Saved transparent cutout to {dst_path}")
