import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const tailwindPlugin = tailwindcss({
  config: './tailwind.config.js',
}) ;

export default defineConfig({
  plugins: [
    react(),
    
  ],
});



