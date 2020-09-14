<template>
  <v-footer app color="black" padless>
    <v-layout justify-center wrap>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-footer-link`"
        color="white"
        text
        rounded
        class="my-2"
        :href="link.url"
      >
        {{ link.label }}
      </v-btn>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    links() {
      return this.$store.getters.getLinks.filter(
        (i) => i.label !== "My Old Non-Vue Website"
      );
    },
  },
};
</script>

<style scoped></style>
