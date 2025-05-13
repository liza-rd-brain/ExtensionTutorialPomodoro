import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
    plugins: [preact()],
    root: 'src',
    build: {
        outDir: '../dist',
        manifest: true,
        rollupOptions: {
            input: 'src/index.html',
            output: {
                entryFileNames: `webview-build/[name].js`,
                chunkFileNames: `webview-build/[name].js`,
                assetFileNames: `webview-build/[name].[ext]`,
            },
        },
    },
    base: '',
});
