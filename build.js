import { spawn } from 'child_process';

console.log('Starting build process...');

const isWin = process.platform === 'win32';
const pnpmCmd = isWin ? 'pnpm.cmd' : 'pnpm';

// Use basic spawning, which avoids cmd.exe's aggressive parsing of &
const child = spawn(pnpmCmd, ['run', 'build'], {
    stdio: 'inherit',
    shell: isWin ? true : false,
});

child.on('exit', (code) => {
    if (code === 0) {
        console.log('Build successful!');
    } else {
        console.error(`Build failed with exit code ${code}`);
        process.exit(code);
    }
});
