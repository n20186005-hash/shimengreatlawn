import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = fileURLToPath(new URL('../public/icons/', import.meta.url));
mkdirSync(OUT, { recursive: true });

const BG = '#536144';
const src = fileURLToPath(new URL('../public/images/og-shimen-great-lawn.jpg', import.meta.url));

const sizes = [192, 512];
for (const size of sizes) {
  await sharp(src)
    .resize(size, size, { fit: 'cover', position: 'centre' })
    .png()
    .toFile(join(OUT, `icon-${size}.png`));
}

/** 蘋果觸控圖示（180×180） */
await sharp(src)
  .resize(180, 180, { fit: 'cover', position: 'centre' })
  .png()
  .toFile(join(OUT, 'apple-touch-icon.png'));

/** Maskable：主體保留在中心 70% 安全區，外圍填底色 */
const maskable = 512;
const inner = Math.round(maskable * 0.7);
const innerBuffer = await sharp(src)
  .resize(inner, inner, { fit: 'cover', position: 'centre' })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: maskable,
    height: maskable,
    channels: 3,
    background: BG,
  },
})
  .composite([{ input: innerBuffer, gravity: 'centre' }])
  .png()
  .toFile(join(OUT, 'icon-512-maskable.png'));

console.log('PWA icons generated in public/icons/');
