<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    absolute
    temporary
    clipped
    class="drawer-style"
    id="style-1"
  >
    <v-list-item-group
      dense
      class="pt-3 white--text"
      v-for="source in sources"
      :key="source.id"
    >
      <v-list-item @click="selectSource(source.id)">
        <v-list-item-avatar size="32px">
          <img
            class="img-circle elevation-7 mb-1"
            :src="getImgUrl(source.id)"
          />
        </v-list-item-avatar>
        <v-list-item-title class="title">
          {{ source.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-navigation-drawer>
</template>

<script>
import axios from "axios";

export default {
  props: {
    api_key: String,
    drawer: Boolean,
  },
  data: () => ({
    sources: [],
    errors: [],
  }),
  created() {
    axios
      .get("https://newsapi.org/v2/sources?language=en&apiKey=" + this.api_key)
      .then((response) => {
        // this.articles = response.data.articles
        this.sources = response.data.sources;
        // console.log("data:");
        // console.log(response.data.sources); // This will give you access to the full object
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    getImgUrl(pic) {
      return require("../../assets/news/" + pic + ".png");
    },
    selectSource(source) {
      this.$emit("sidebar-hide-event");
      this.$emit("selectsource", source);
    },
  },
};
</script>
<style scoped>
.drawer-style {
  background-color: black !important;
}
.title {
  color: white;
}
</style>
