# Aurvi — 3D jewellery product-viewer concept

Single self-contained `index.html`. No build step, no external 3D assets.
Geometry, materials and environment lighting are generated procedurally in Three.js.

## Live preview
https://raw.githack.com/amanjaiman1/Product_3D/aurvi-jewellery-demo/index.html

## Notes
- Brilliant-cut gem built from merged cone + cylinder with flat shading
- `RoomEnvironment` + PMREM for reflections, so no HDRI download
- Metal switcher (yellow / rose / white gold, platinum) — the conversion feature
- Device pixel ratio clamped, render loop paused when offscreen or tab hidden
- Honours `prefers-reduced-motion`, graceful non-WebGL fallback

"Aurvi" is a fictional brand created for this demo.
