<template>
  <div id="app">
    <navBar />
    <slot />
    <footerArea />
  </div>
</template>

<script>

import NavBar from "~/components/NavBar.vue";
import FooterArea from "~/components/FooterArea.vue";
export default {
  components: {
    NavBar,
    FooterArea,
  },
  head() {
    return {
      titleTemplate: "%s - Real World Events",
      meta: [
        {
          hid: "description",
          name: "description", // <-- for our meta description tag
          content:
            "Effektive Selbstverteidigung für Frauen, Kinder und Männer. Wing Tzun in München.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Wing Tzun, selbstverteidigung Frauen, WingTsun,Wing Tsun,Wing Chun,Ving Tsun,Kampfkunst,Kampfsport,Kampfsport, Ving Tsun, Wing Chun",
        },
      ],
    };
  },
};
</script>

<style>
.nuxt-link-active {
  color: #fff;
  background-color: #046acc;
}
</style>
