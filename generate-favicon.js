const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'favicon.svg');
const icoPath = path.join(__dirname, 'public', 'favicon.ico');

(async () => {
  try {
    const svgBuffer = fs.readFileSync(svgPath);
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile('favicon-32x32.png');
    await sharp('favicon-32x32.png')
      .resize(32, 32)
      .toFile(icoPath);
    fs.unlinkSync('favicon-32x32.png');
    console.log('Modern favicon.ico generated successfully!');
  } catch (err) {
    console.error('Error generating favicon:', err);
  }
})(); 