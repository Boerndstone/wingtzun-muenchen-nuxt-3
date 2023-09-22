// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //css: ["bootstrap/dist/css/bootstrap.min.css", "assets/css/style.css", "assets/css/main.css"],
  css: ["bootstrap/dist/css/bootstrap.min.css", "assets/css/main.css"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  plugins: [
    { src: '~/plugins/cookieconsent.client.ts' },
  ],
})
