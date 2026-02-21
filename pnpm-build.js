import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

try {
    console.log('Starting pnpm build process...');

    const tscPath = path.join(__dirname, 'node_modules', 'typescript', 'bin', 'tsc');
    const vitePath = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');

    console.log('Running TypeScript compiler...');
    execSync(`node "${tscPath}" -b`, { stdio: 'inherit' });

    console.log('Running Vite build...');
    execSync(`node "${vitePath}" build`, { stdio: 'inherit' });

    console.log('Build successful!');
} catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
}
