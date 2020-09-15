<template>
  <v-container class="news">
    <v-btn class="icon" @click.stop="drawer = !drawer">Filter</v-btn>
    <SideMenu
      :drawer="drawer"
      :api_key="api_key"
      @drawer-control-event="drawer = false"
      @sidebar-hide-event="drawer = true"
      @selectsource="setResource"
    ></SideMenu>
    <v-main>
      <v-container fluid>
        <MainContent :articles="articles"></MainContent>
      </v-container>
    </v-main>
  </v-container>
</template>

<script>
import axios from "axios";
import MainContent from "../components/Newsapp/MainContent.vue";
import SideMenu from "../components/Newsapp/SideMenu.vue";

export default {
  name: "App",
  components: {
    MainContent,
    SideMenu,
  },

  data() {
    return {
      drawer: null,
      api_key: process.env.VUE_APP_SECRET_API,
      articles: [],
      errors: [],
    };
  },
  created() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" +
          this.api_key
      )
      .then((response) => {
        // this.articles = response.data.articles
        this.articles = response.data.articles;
        // console.log("data:");
        // console.log(response.data.articles); // This will give you access to the full object
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    setResource(source) {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?sources=" +
            source +
            "&apiKey=" +
            this.api_key
        )
        .then((response) => {
          this.articles = response.data.articles;
          // console.log(response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
      this.drawer = false;
    },
    sideBarToggle() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style>
.news {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.icon {
  margin-right: 100%;
}
</style>
