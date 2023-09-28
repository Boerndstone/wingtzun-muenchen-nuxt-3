<template>
  <div class="container py-3 d-none d-lg-block">
    <div class="col-md-4 col-sm-6 col-xs-9">
      <a class="brand" href="/home">
        <img src="~/assets/images/wingtzun.svg" alt="Wing Tsun Kampfkunstschule" />
      </a>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <NuxtLink class="brand d-lg-none" to="/">
        <img src="~/assets/images/wingtzun.svg" alt="Wing Tsun Kampfkunstschule">
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="link in links"
            :key="link.id"
            class="nav-item"
          >
            <NuxtLink
              :to="link.href"
              :exact="true"
              class="nav-link"
            >{{ link.name }}</NuxtLink>
          </li>
        </ul>
        <NuxtLink class="probe" to="/kontakt">Kostenloses Probetraining</NuxtLink>    
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
      links: [
        {
          id: 1,
          href: "/",
          name: "Home",
        },
        {
          id: 2,
          href: "wingtzun",
          name: "Wing Tzun",
        },
        {
          id: 3,
          href: "training",
          name: "Angebot",
        },
        {
          id: 4,
          href: "preise",
          name: "Preise",
        },
        {
          id: 5,
          href: "schule",
          name: "Das Team",
        },
        {
          id: 6,
          href: "termine",
          name: "News",
        },
        {
          id: 7,
          href: "kontakt",
          name: "Kontakt",
        },
      ],
    };
  },
  watch: {
    '$route'() {
      this.isNavbarOpen = false;
    }
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    closeNavbar(route) {
      this.isNavbarOpen = false;
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
  .navbar-inverse .navbar-nav>li>a:hover, .navbar-inverse .navbar-nav>li>a:focus {
    background-color: red;
  }
</style>