<template>
  <v-container class="container mt-4">
    <v-row>
      <v-col>
        <h1>To-Do List</h1>
        <h2 v-if="countIncomplete() > 1">
          Right now you have {{ countIncomplete() }} tasks left
        </h2>
        <h2 v-if="countIncomplete() === 1">
          Right now you have {{ countIncomplete() }} task left
        </h2>
        <h2 v-if="countIncomplete() === 0">
          You're all done!
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <TodoList />
        <TodoNew />
      </v-col>
    </v-row>
  </v-container>
  <!-- <div class="container">
    <h1>To-Do List</h1>
    <h2 v-if="countIncomplete() > 1">
      Right now you have {{ countIncomplete() }} tasks left
    </h2>
    <h2 v-if="countIncomplete() === 1">
      Right now you have {{ countIncomplete() }} task left
    </h2>
    <h2 v-else>
      You're all done!
    </h2>
    <div id="app">
      <TodoList />
      <TodoNew />
    </div>
  </div> -->
  <!-- <img src="~@/assets/logo.png" class="vue-logo" alt="Vue.js Logo" /> -->
</template>

<script>
import TodoList from "../components/ToDo/TodoList";
import TodoNew from "../components/ToDo/TodoNew";

import { mapGetters } from "vuex";

export default {
  name: "Todo",
  components: {
    TodoList,
    TodoNew,
  },
  methods: {
    ...mapGetters(["countIncomplete"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: linear-gradient(45deg, #5189c1 25%, #41b883);
}

@import url("https://fonts.googleapis.com/css?family=Open+Sans");

html {
  font-family: "Open Sans", sans-serif;
}

.container {
  font-family: "Open Sans", sans-serif;
  width: 24rem;
  margin: auto;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  text-align: center;
  margin: auto;
}

.headers {
  text-align: center;
  margin-top: 0;
}

.vue-logo {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
