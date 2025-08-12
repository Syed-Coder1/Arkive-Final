  const { execSync } = require('child_process');
  const fs = require('fs-extra');
  const path = require('path');

  console.log('🚀 Building Arkive Tax Management System for Desktop...\n');

  try {
    // Step 0: Paths
    const rootDir = process.cwd();
    const viteDistDir = path.join(rootDir, 'dist');
    const electronDir = path.join(rootDir, 'electron');
    const electronDistDir = path.join(electronDir, 'dist');
    const assetsDir = path.join(electronDir, 'assets');

    // Step 1: Clean old builds
    console.log('🧹 Cleaning old builds...');
    fs.removeSync(viteDistDir);
    fs.removeSync(electronDistDir);
    fs.removeSync(path.join(electronDir, 'dist'));
    fs.removeSync(path.join(electronDir, 'win-unpacked'));
    console.log('✅ Old builds removed.\n');

    // Step 2: Build the web app
    console.log('📦 Step 1: Building web application...');
    execSync('npm run build', { stdio: 'inherit', cwd: rootDir });
    console.log('✅ Web application built successfully!\n');
    const fsExtra = require('fs-extra');
  console.log('📂 Copying web build to Electron app...');
  const distSource = path.join(process.cwd(), 'dist');
  const distTarget = path.join(electronDir, 'dist');
  fsExtra.removeSync(distTarget);
  fsExtra.copySync(distSource, distTarget);
  console.log('✅ Copied dist files to Electron app!\n');


    // Step 3: Copy web build into electron/dist
    console.log('📂 Step 2: Copying web build to Electron folder...');
    fs.copySync(viteDistDir, electronDistDir, { overwrite: true });
    console.log('✅ Web build copied to Electron.\n');

    // Step 4: Prepare Electron environment
    console.log('📁 Step 3: Preparing Electron environment...');
    if (!fs.existsSync(electronDir)) throw new Error('Electron directory not found!');
    execSync('npm install', { stdio: 'inherit', cwd: electronDir });
    console.log('✅ Electron dependencies installed!\n');

    // Step 5: Ensure assets folder exists
    if (!fs.existsSync(assetsDir)) {
      fs.mkdirSync(assetsDir, { recursive: true });
      console.log('📁 Created assets directory');
    }

    // Step 6: Ensure icons exist
    const iconFiles = ['icon.png', 'icon.ico', 'icon.icns'];
    iconFiles.forEach(file => {
      const iconPath = path.join(assetsDir, file);
      if (!fs.existsSync(iconPath)) {
        console.log(`⚠️  ${file} not found, creating placeholder...`);
        fs.writeFileSync(iconPath, 'Arkive Icon Placeholder');
      }
    });

    // Step 7: Build desktop app
    console.log('🔨 Step 4: Building desktop application...');
    execSync('npm run build', { stdio: 'inherit', cwd: electronDir });
    console.log('\n🎉 SUCCESS! Desktop application built successfully!');

    console.log('\n📍 Location: electron/dist/');
    console.log('📁 Check the electron/dist folder for the executable files.\n');

  } catch (error) {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
  }
