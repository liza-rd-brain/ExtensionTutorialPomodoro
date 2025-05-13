import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
    plugins: [preact()],
    root: 'src', // Set the root directory to 'src'
    build: {
        outDir: '../dist', // Output directory for the build,
        manifest: true, // Generate a manifest file
        rollupOptions: {
            input: 'src/index.html', // Entry point for the build
            output: {
                entryFileNames: `webview-build/[name].js`,
                chunkFileNames: `webview-build/[name].js`,
                assetFileNames: `webview-build/[name].[ext]`,
            },
        },
    },
    base: '', // Ensure relative paths
});