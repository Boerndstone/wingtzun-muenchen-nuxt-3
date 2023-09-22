<template>
  <nuxt-link :to="link" class="topMargin20ax link-container" :title="linkTitleAttribute">
    {{ linkTitle }}
    <img src="~/assets/images/svg/arrow.svg" class="link-image" />
  </nuxt-link>
</template>
<script>
export default {
  props: {
    linkTitle: {
      type: String,
      default: "Mehr über Wing Tzun",
    },
    linkTitleAttribute: {
      type: String,
      default: "Mehr über Wing Tzun erfahren",
    },
    link: {
      type: String,
      default: "wingtzun",
    },
  },
};
</script>
<style scoped>
.link-container {
  display: flex;
  align-items: center;
}
.link-image {
  height: 23px;
  width: 23px;
  display: inline-block;
}
</style>
