import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: '.', 
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        copyPublicDir: true
    },
    server: {
        open: true 
    },
    css: {
        devSourcemap: true, 
        minify: true       
    },
})