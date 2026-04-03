const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

const srcPath = path.join(__dirname, 'src');
const themeBuildPath = path.join(__dirname, '..', 'theme', 'crossgate-legal-react', 'build');

console.log(`Watching ${srcPath} for changes...`);

chokidar.watch(srcPath, { ignoreInitial: true }).on('all', (event, file) => {
  console.log(`File changed: ${file}. Rebuilding...`);
  exec('npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error(`Build error: ${error}`);
      return;
    }
    console.log('Build complete. Copying to theme folder...');
    // Use copy command (Windows)
    exec(`xcopy /E /Y "${path.join(__dirname, 'build')}\\*" "${themeBuildPath}\\"`, (err) => {
      if (err) console.error(`Copy error: ${err}`);
      else console.log('Theme updated. Refresh your WordPress site.');
    });
  });
});