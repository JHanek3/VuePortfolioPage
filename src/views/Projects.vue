<template>
  <v-container>
    <v-container class="headers">
      <h1>Projects</h1>
      <h2>
        These are just my vue projects my React projects can be found here(dead
        link)
      </h2>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          v-for="project in projects"
          :key="`${project.label}`"
          cols="12"
          md="4"
          xs="12"
        >
          <v-card :project="project" class="mx-auto mt-5">
            <v-card-title>
              {{ project.label }}
            </v-card-title>
            <v-card-text>
              {{ project.para }}
            </v-card-text>
            <v-btn class="ml-1 mb-1" color="primary" :href="project.url"
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
