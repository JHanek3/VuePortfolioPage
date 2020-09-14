<template>
  <v-app-bar app color="black">
    <v-app-bar-nav-icon
      color="white"
      @click="drawer = true"
    ></v-app-bar-nav-icon>
    <v-toolbar-title class="title">Portfolio Website</v-toolbar-title>
    <v-navigation-drawer v-model="drawer" absolute temporary height="400">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="link in links"
            :key="`${link.label}-header-link`"
            :href="link.url"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.label }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
  }),
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
