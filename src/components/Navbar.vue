<template>
  <v-main>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Portfolio Website</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-main>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    links() {
      return this.$store.getters.getLinks;
    },
  },
};
</script>

<style scoped></style>
