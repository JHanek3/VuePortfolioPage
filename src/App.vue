<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Page/Navbar.vue";
import Footer from "./components/Page/Footer.vue";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
