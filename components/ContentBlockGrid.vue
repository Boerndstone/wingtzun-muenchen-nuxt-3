<template>
  <section class="container py-5">
    <div class="row">
      <div class="col-12 col-md-6">
        <h2>{{ headline }}</h2>
        <p>
          {{ content }}
        </p>
        <ContentLinks />
      </div>
      <div 
        class="col-12 col-md-6"
        :class="[
          customClass
        ]"
      >
        <img 
          :src="imageSrc"
          :alt="imageAltTag" 
          :width="imgWidth" 
          :height="imgHeight"
        />
      </div>
    </div>
  </section>
</template>
<script>  
  export default {
    data() {
      return {
        condition: true,
        customClass: 'hidden-sm hidden-xs d-flex justify-content-end'
      };
    },
    props: {
      headline: {
        type: String,
      },
      content: {
        type: String,
      },
      imageSrc: {
        type: String,
      },
      imageAltTag: {
        type: String,
      },
      imgWidth: {
        type: String,
      },
      imgHeight: {
        type: String,
      },
    },
  };
</script>
<style scoped>
</style>
