#!/usr/bin/env python3
"""Convert SVG icons in media/icons to PNG.
Usage:
  python convert_icons.py

Requirements:
  pip install cairosvg pillow
"""

from pathlib import Path

def main():
    try:
        import cairosvg
    except ImportError:
        raise SystemExit("Missing dependency: cairosvg. Install with: pip install cairosvg pillow")

    icons_dir = Path("media") / "icons"
    if not icons_dir.exists():
        raise SystemExit(f"Folder not found: {icons_dir.resolve()}")

    svgs = sorted(icons_dir.glob("*.svg"))
    if not svgs:
        raise SystemExit("No .svg files found in media/icons")

    # Output size (px). Increase if you want sharper icons.
    size = 128

    for svg_path in svgs:
        png_path = svg_path.with_suffix(".png")
        cairosvg.svg2png(
            url=str(svg_path),
            write_to=str(png_path),
            output_width=size,
            output_height=size,
        )
        print(f"OK: {svg_path.name} -> {png_path.name} ({size}x{size})")

    print("\nDone. Now replace your index.html with index_png.html (or copy the changes).")

if __name__ == "__main__":
    main()
