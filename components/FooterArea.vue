<template>
  <footer class="text-center">
    <div class="container">
      <div>
        <div class="col-md-12">
          <ul class="list-inline">
            <li><a href="https://wingtzun.de/">Verband</a></li>
            <li><a href="https://wingtzun.de/sifuniko/">Dai Sifu Niko</a></li>
            <li><nuxt-link to="/linktipps">Linktipps</nuxt-link></li>
            <li><nuxt-link to="/kontakt">Kontakt</nuxt-link></li>
            <li><nuxt-link to="/datenschutz">Datenschutz</nuxt-link></li>
            <li><nuxt-link to="/impressum">Impressum</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sup-footer">
      <div class="container">
        <p>
          © <span>{{ currentDate }}</span> by Wing Tzun Kampfkunstschule in München
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getFullYear(),
    };
  },
};
</script>
