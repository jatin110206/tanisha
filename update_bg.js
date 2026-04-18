const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

const newImages = [
  "WhatsApp Image 2026-04-18 at 23.35.14.jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.15 (1).jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.15 (2).jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.15.jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.16 (1).jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.16 (2).jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.16.jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.17 (1).jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.17 (2).jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.17.jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.18 (1).jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.18 (2).jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.18.jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.19 (1).jpeg",
  "WhatsApp Image 2026-04-18 at 23.35.19.jpeg"
];

// We find the array allBgPhotos = [ ... ];
const regex = /const allBgPhotos = \[\s*([\s\S]*?)\s*\];/;
const match = content.match(regex);
if (match) {
  let existing = match[1].trim();
  const added = newImages.map(img => `"${img}"`).join(', ');
  if (existing.endsWith(',')) {
    existing += ' ' + added;
  } else {
    existing += ', ' + added;
  }
  const newContent = content.replace(regex, `const allBgPhotos = [\n      ${existing}\n    ];`);
  fs.writeFileSync(file, newContent);
  console.log('Successfully added new images to allBgPhotos');
} else {
  console.log('Could not find allBgPhotos array');
}
