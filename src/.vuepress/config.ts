import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "David's Blog Demo",
      description: "A blog demo besed on vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "我的博客演示",
      description: "基于 vuepress-theme-hope 的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
