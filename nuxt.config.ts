
// konfigurasi pada nuxt

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Blog App",
      titleTemplate: "%s - Blog App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width-device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Blog App" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // kalau mau dimatiin auto imports nya
  // components: {
  //   global: false
  // }

});
