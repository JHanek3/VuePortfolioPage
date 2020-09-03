<template>
  <v-system-bar app color="black" window hide-on-scroll>
    <v-toolbar-title class="title">Portfolio Website</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="`${link.label}-header-link`"
      color="white"
      text
      rounded
      class="my-2"
      :href="link.url"
    >
      {{ link.label }}
    </v-btn>
  </v-system-bar>
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

<style scoped>
.title {
  color: white;
}
</style>
