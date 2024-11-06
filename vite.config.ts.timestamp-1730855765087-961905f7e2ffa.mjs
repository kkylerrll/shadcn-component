// vite.config.ts
import { defineConfig } from "file:///C:/KAI/first-sideProject/node_modules/.pnpm/vite@5.4.10_@types+node@22.9.0_sass@1.80.6/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/KAI/first-sideProject/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.10_@types+node@22.9.0_sass@1.80.6__vue@3.5.12_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { fileURLToPath, URL } from "node:url";
import { createSvgIconsPlugin } from "file:///C:/KAI/first-sideProject/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.10_@types+node@22.9.0_sass@1.80.6_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
import autoprefixer from "file:///C:/KAI/first-sideProject/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.47/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwind from "file:///C:/KAI/first-sideProject/node_modules/.pnpm/tailwindcss@3.4.14/node_modules/tailwindcss/lib/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/KAI/first-sideProject/vite.config.ts";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // eslint-disable-next-line no-undef
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "[name]"
    })
  ],
  base: "./",
  server: {
    port: 5174,
    // 你可以設置你想要的端口
    // 允許從任何主機進行訪問
    host: "localhost"
  },
  resolve: {
    extensions: [".js", ".ts", ".json"],
    // 導入時想要省略的擴展名列表
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxLQUlcXFxcZmlyc3Qtc2lkZVByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXEtBSVxcXFxmaXJzdC1zaWRlUHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovS0FJL2ZpcnN0LXNpZGVQcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdmctaWNvbnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcbmltcG9ydCB0YWlsd2luZCBmcm9tIFwidGFpbHdpbmRjc3NcIjtcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmQoKSwgYXV0b3ByZWZpeGVyKCldLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwic3JjL2Fzc2V0cy9pY29uc1wiKV0sXG4gICAgICBzeW1ib2xJZDogXCJbbmFtZV1cIixcbiAgICB9KSxcbiAgXSxcbiAgYmFzZTogXCIuL1wiLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA1MTc0LCAvLyBcdTRGNjBcdTUzRUZcdTRFRTVcdThBMkRcdTdGNkVcdTRGNjBcdTYwRjNcdTg5ODFcdTc2ODRcdTdBRUZcdTUzRTNcbiAgICAvLyBcdTUxNDFcdThBMzFcdTVGOUVcdTRFRkJcdTRGNTVcdTRFM0JcdTZBNUZcdTkwMzJcdTg4NENcdThBMkFcdTU1NEZcbiAgICBob3N0OiBcImxvY2FsaG9zdFwiLFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgZXh0ZW5zaW9uczogW1wiLmpzXCIsIFwiLnRzXCIsIFwiLmpzb25cIl0sIC8vIFx1NUMwRVx1NTE2NVx1NjY0Mlx1NjBGM1x1ODk4MVx1NzcwMVx1NzU2NVx1NzY4NFx1NjRGNFx1NUM1NVx1NTQwRFx1NTIxN1x1ODg2OFxuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUSxTQUFTLG9CQUFvQjtBQUM3UixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlLFdBQVc7QUFDbkMsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sY0FBYztBQU53SSxJQUFNLDJDQUEyQztBQVM5TSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0oscUJBQXFCO0FBQUE7QUFBQSxNQUVuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBQUEsTUFDMUQsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBO0FBQUEsSUFFTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsWUFBWSxDQUFDLE9BQU8sT0FBTyxPQUFPO0FBQUE7QUFBQSxJQUNsQyxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
