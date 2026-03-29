import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 9777,
    allowedHosts: ["ai.innovex-om.com", "xxbrownsnwhites.com", "xwww.brownsnwhites.com"],
  },
//  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  plugins: [
    react(),
    // REMOVED the mode === "development" line here
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
