import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/conference-ticket-generator-main/",
  plugins: [tailwindcss()],
});
