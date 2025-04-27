import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    target: "es2015",
  },
});

/* 

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   css: {
//     postcss: './postcss.config.js',
//   },
//   build: {
//     target: 'es2015', 
//   },
// })






export default defineConfig({
  plugins: [react(), tailwindcss()],
  content: ["./index.html", "./src/**/
// *.{js,ts,jsx,tsx}"],
// });

// */
