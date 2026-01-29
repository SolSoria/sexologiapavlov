const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../client/public/images/herramientas');
const imageMap = {
  'WhatsApp Image 2026-01-19 at 13.13.14 (2).jpeg': 'juego-masaje-parejas.jpg',
  'WhatsApp Image 2026-01-19 at 13.13.14 (3).jpeg': 'guia-autoconocimiento.jpg',
  'WhatsApp Image 2026-01-19 at 13.13.14.jpeg': 'aceite-masaje.jpg',
  'WhatsApp Image 2026-01-19 at 13.13.15 (1).jpeg': 'educacion-sexual.jpg',
  'WhatsApp Image 2026-01-19 at 13.13.15 (2).jpeg': 'juego-pareja.jpg',
  'WhatsApp Image 2026-01-19 at 13.13.15 (3).jpeg': 'meditacion-tactil.jpg',
  'WhatsApp Image 2026-01-19 at 13.13.15 (4).jpeg': 'masaje-parejas-2.jpg',
  'WhatsApp Image 2026-01-19 at 13.13.15.jpeg': 'juego-pareja-2.jpg',
  'WhatsApp Image 2026-01-19 at 13.13.16 (1).jpeg': 'guia-autoconocimiento-2.jpg',
  'WhatsApp Image 2026-01-19 at 13.13.16 (2).jpeg': 'educacion-sexual-2.jpg',
  'WhatsApp Image 2026-01-19 at 13.13.16.jpeg': 'meditacion-tactil-2.jpg'
};

// Rename files
Object.entries(imageMap).forEach(([oldName, newName]) => {
  const oldPath = path.join(imageDir, oldName);
  const newPath = path.join(imageDir, newName);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${oldName} → ${newName}`);
  }
});

console.log('All images have been renamed successfully!');
