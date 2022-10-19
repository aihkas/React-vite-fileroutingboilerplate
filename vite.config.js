import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

const { plugin: mdPlugin, Mode } = require('vite-plugin-markdown')


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr(), mdPlugin({ mode: [Mode.HTML, Mode.TOC, Mode.REACT] })]
})