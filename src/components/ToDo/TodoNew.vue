<template>
  <div>
    <form @submit.prevent="addTodo">
      <input
        class="todo-input"
        type="text"
        placeholder="Enter a new task"
        v-model="task"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: "",
      newId: 4,
    };
  },
  methods: {
    addTodo: function() {
      this.$store.dispatch("addTodo", this);
      this.newId++;
      this.task = "";
      this.$store.getters.countIncomplete();
    },
  },
};
</script>

<style scoped>
.todo-input {
  font-family: "Open Sans", sans-serif;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  border-radius: 0.25rem;
  border-style: none;
  border: solid 1px lightgray;
  box-sizing: border-box;
}
</style>
