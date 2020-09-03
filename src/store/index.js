import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Resume",
        url: "/resume",
      },
      {
        label: "Projects",
        url: "/projects",
      },
      {
        label: "GitHub",
        url: "https://github.com/JHanek3",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/jonathon-hanek-731230177/",
      },
    ],
    projects: [
      {
        label: "ToDo App",
        url: "/todo",
        para:
          "First vue app. A todo checklist that has the ability to add and delete tasks. Vuex keeps track of state.",
      },
      {
        label: "Login Page",
        url: "",
        para:
          "Simple user login page, first time using Vuetify. Page has the ability to turn on and off the visibility of the password.",
      },
      {
        label: "Form Validation",
        url: "",
        para:
          "Vuetify made Form Submission page. Button is disabled if the form is not correct, the form also shows error messages for corresponding fields.",
      },
    ],
    todos: [
      {
        id: 1,
        task: "Snapchat Caroline",
        completed: true,
      },
      {
        id: 2,
        task: "Code for at least an hour",
        completed: true,
      },
      {
        id: 3,
        task: "Workout",
        completed: false,
      },
    ],
  },
  mutations: {
    ADD_TODO: (state, payload) => {
      const newTask = {
        id: payload.newId,
        task: payload.task,
        completed: false,
      };
      state.todos.push(newTask);
    },
    TOGGLE_TODO: (state, payload) => {
      const item = state.todos.find((todo) => todo.id === payload);
      item.completed = !item.completed;
    },
    DELETE_TODO: (state, payload) => {
      const index = state.todos.findIndex((todo) => todo.id === payload);
      state.todos.splice(index, 1);
    },
  },
  actions: {
    addTodo: (context, payload) => {
      context.commit("ADD_TODO", payload);
    },
    toggleTodo: (context, payload) => {
      context.commit("TOGGLE_TODO", payload);
    },
    deleteTodo: (context, payload) => {
      context.commit("DELETE_TODO", payload);
    },
  },
  modules: {},
  getters: {
    getLinks: (state) => state.links,
    getProjects: (state) => state.projects,
    getTodos: (state) => state.todos,
    countIncomplete: (state) => {
      return state.todos.filter((task) => task.completed === false).length;
    },
  },
});
