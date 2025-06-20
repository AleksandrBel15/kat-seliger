import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: 'src', // Указываем, что исходники лежат в src/
    build: {
        outDir: '../dist', // Папка для сборки
        emptyOutDir: true
    },
    server: {
        open: true // Автоматически открывать браузер
    }
})