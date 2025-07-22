import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: 'src', // Указываем, что исходники лежат в src/
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        copyPublicDir: true
    },
    server: {
        open: true // Автоматически открывать браузер
    },
    css: {
        devSourcemap: true, // Для отладки
        minify: true       // Минификация при сборке
    },
})