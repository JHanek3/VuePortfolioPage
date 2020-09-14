<template>
  <v-container>
    <v-container class="headers">
      <h1>Projects</h1>
      <h2>
        These are just my Vue projects, my React projects can be found
        <a href="http://hanekpro.com/projects.html">here</a>
      </h2>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          v-for="project in projects"
          :key="`${project.label}`"
          cols="12"
          lg="4"
          md="6"
          xs="12"
        >
          <v-card :project="project" class="mx-auto" height="185">
            <v-card-title height="10%">
              {{ project.label }}
            </v-card-title>
            <v-card-text height="90%">
              {{ project.para }}
            </v-card-text>
            <v-btn absolute left bottom color="primary" :href="project.url"
              >Link</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Projects",
  computed: {
    projects() {
      return this.$store.getters.getProjects;
    },
  },
};
</script>

<style scoped>
.headers {
  text-align: center;
  margin: auto;
}
</style>
