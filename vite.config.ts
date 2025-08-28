import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace <repo-name> with your GitHub repo name if you use GitHub Pages
const isGitHubPages = process.env.DEPLOY_ENV === "GH_PAGES";

export default defineConfig(({ mode }) => ({
  base: isGitHubPages ? "/radiantly-crafted-site/" : "/", // 👈 Add this line
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
