const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create icons directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');

// Function to create icon
async function createIcon(size) {
  const logoPath = path.join(imagesDir, 'logo.jpg');
  const outputPath = path.join(imagesDir, `logo-${size}.png`);
  
  try {
    await sharp(logoPath)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    console.log(`✓ Created logo-${size}.png`);
  } catch (error) {
    console.error(`✗ Failed to create logo-${size}.png:`, error.message);
  }
}

// Function to create favicon
async function createFavicon() {
  const logoPath = path.join(imagesDir, 'logo.jpg');
  const outputPath = path.join(publicDir, 'favicon.ico');
  
  try {
    await sharp(logoPath)
      .resize(32, 32)
      .toFile(outputPath);
    console.log(`✓ Created favicon.ico`);
  } catch (error) {
    console.error(`✗ Failed to create favicon.ico:`, error.message);
  }
}

// Create all icons
async function createAllIcons() {
  console.log('Creating app icons...\n');
  
  // Standard sizes for PWA
  const sizes = [16, 32, 48, 72, 96, 128, 144, 152, 192, 384, 512];
  
  for (const size of sizes) {
    await createIcon(size);
  }
  
  await createFavicon();
  
  console.log('\n✓ Icon creation completed!');
}

// Check if sharp is installed
try {
  require.resolve('sharp');
  createAllIcons();
} catch (e) {
  console.log('Sharp not installed. Installing now...');
  const { execSync } = require('child_process');
  execSync('npm install sharp', { stdio: 'inherit' });
  createAllIcons();
}