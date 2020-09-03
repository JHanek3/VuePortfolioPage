<template>
  <v-container>
    <v-container class="headers">
      <h1>Welcome to my Portfolio Website</h1>
      <h2>
        Learning since 1995, Coding since 2017, Publishing since 2019!
      </h2>
    </v-container>

    <v-row>
      <v-col cols="3">
        <v-img class="img" src="../assets/headshot.jpg" alt="Pic of me"></v-img>
      </v-col>
      <v-col cols="9">
        <v-card-text class="about"
          >Hello, thank you for taking the time to browse my Portfolio website.
          I've included various tabs about myself where you can find my resume
          and past projects. There is a github link in the footer. I am mainly a
          React framework kind of guy, but a potential job opportunity arose so
          I decided to create this page along with some projects to get my feet
          wet with the language. Happy Coding!
        </v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card-text class="name">Jonathon Hanek</v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.headers {
  text-align: center;
  margin: auto;
}
.img {
  height: 595px;
}
.about {
  font-size: 2.2em;
  text-align: center;
  line-height: 150%;
  margin-top: 4em;
}
.name {
  font-size: 2.2em;
  text-align: center;
}
</style>
