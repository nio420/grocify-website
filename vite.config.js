import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  theme:{
    extend:{
      fontFamily:{
        Inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [react(), tailwindcss()],
});
