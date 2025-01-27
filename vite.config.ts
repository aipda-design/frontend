import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";


// https://vite.dev/config/
export default defineConfig({
   
    plugins: [
        react(),
        dts(),
        svgr(),
    ],
    assetsInclude: ["**/*.png", "**/*.svg", "**/*.jpg", "**/*.jpeg", "**/*.gif"],
    css: {
        postcss: "./postcss.config.js",
    },
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
