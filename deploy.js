#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...\n');

// Step 1: Build the application
console.log('📦 Building application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 2: Check if build directory exists
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
  console.error('❌ Build directory not found. Build may have failed.');
  process.exit(1);
}

console.log('📁 Build directory created successfully!');
console.log('📊 Build size:', getDirectorySize(buildDir), 'bytes\n');

// Step 3: Display deployment options
console.log('🌐 Deployment Options:');
console.log('1. Netlify (Recommended)');
console.log('   - Go to https://netlify.com');
console.log('   - Drag and drop the "build" folder');
console.log('   - Or connect your GitHub repository\n');

console.log('2. Vercel');
console.log('   - Install: npm install -g vercel');
console.log('   - Run: vercel');
console.log('   - Follow the prompts\n');

console.log('3. GitHub Pages');
console.log('   - Install: npm install -g gh-pages');
console.log('   - Run: npm run deploy');
console.log('   - Push to gh-pages branch\n');

console.log('4. Local Testing');
console.log('   - Run: npx serve -s build');
console.log('   - Open: http://localhost:3000\n');

console.log('📋 Next Steps:');
console.log('1. Choose a deployment platform');
console.log('2. Set up environment variables for OpenAI API');
console.log('3. Configure custom domain (optional)');
console.log('4. Test your deployed application\n');

console.log('🎉 Your AI-Assisted Knowledge Quiz is ready for deployment!');

function getDirectorySize(dirPath) {
  let totalSize = 0;
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      totalSize += getDirectorySize(filePath);
    } else {
      totalSize += stats.size;
    }
  });
  
  return totalSize;
}
