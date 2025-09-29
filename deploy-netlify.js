#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Deploying to Netlify...\n');

// Step 1: Build the application
console.log('📦 Building application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 2: Check if Netlify CLI is installed
console.log('🔍 Checking for Netlify CLI...');
try {
  execSync('netlify --version', { stdio: 'pipe' });
  console.log('✅ Netlify CLI found!\n');
} catch (error) {
  console.log('❌ Netlify CLI not found. Installing...');
  try {
    execSync('npm install -g netlify-cli', { stdio: 'inherit' });
    console.log('✅ Netlify CLI installed!\n');
  } catch (installError) {
    console.error('❌ Failed to install Netlify CLI. Please install manually:');
    console.error('   npm install -g netlify-cli\n');
    console.log('📋 Manual deployment steps:');
    console.log('1. Go to https://netlify.com');
    console.log('2. Drag and drop the "build" folder');
    console.log('3. Your app will be live in seconds!');
    process.exit(1);
  }
}

// Step 3: Deploy to Netlify
console.log('🌐 Deploying to Netlify...');
try {
  execSync('netlify deploy --prod --dir=build', { stdio: 'inherit' });
  console.log('\n🎉 Deployment successful!');
  console.log('📱 Your AI-Assisted Knowledge Quiz is now live!');
  console.log('🔗 Check your Netlify dashboard for the live URL');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  console.log('\n📋 Manual deployment steps:');
  console.log('1. Go to https://netlify.com');
  console.log('2. Drag and drop the "build" folder');
  console.log('3. Your app will be live in seconds!');
}
