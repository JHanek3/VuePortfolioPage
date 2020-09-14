<template>
  <v-container>
    <v-container>
      <Header />
      <v-row>
        <v-col cols="12" md="4" height="100%">
          <Sidebar align="center" justify="center" />
        </v-col>
        <v-col cols="12" md="8">
          <Content />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Header from "../components/Home/Header";
import Sidebar from "../components/Home/Sidebar";
import Content from "../components/Home/Content";

export default {
  name: "App",

  components: {
    Header,
    Sidebar,
    Content,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped></style>
