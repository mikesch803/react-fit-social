// import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
  },
//   plugins: [
//     reactRefresh(),
    
//     svgrPlugin({
//       svgrOptions: {
//         icon: true,
//         // ...svgr options (https://react-svgr.com/docs/options/)
//       },
//     }),
    
//   ],


  plugins: [
    react({
      babel: {
        plugins: [
          '@babel/plugin-transform-react-jsx', // Ensures JSX transformation in .js files
        ],
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Allows importing both .js and .jsx files
  },

//   esbuild: {
//     loader: 'jsx', // Ensures JSX parsing
//     include: /src\/.*\.js$/, // Apply loader to .js files in src folder
//     jsx: 'automatic', // Enable React's automatic JSX transform
//   }

  
});
