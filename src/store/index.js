import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [
      {
        label: "Home",
        url: "/",
        icon: "mdi-home",
      },
      {
        label: "Projects",
        url: "/projects",
        icon: "mdi-code-tags",
      },
      {
        label: "GitHub",
        url: "https://github.com/JHanek3",
        icon: "mdi-github",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/jonathon-hanek-731230177/",
        icon: "mdi-linkedin",
      },
      {
        label: "My Old Non-Vue Website",
        url: "http://hanekpro.com/",
        icon: "mdi-web",
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
        url: "/login",
        para:
          "Simple user login page, first time using Vuetify. Toggles password visibility, does not save information.",
      },
      {
        label: "Form Validation",
        url: "/signup",
        para:
          "Vuetify Form Submission page, doesn't save info. Form incorrect, button is disabled and displays errors.",
      },
      {
        label: "Dashboard",
        url: "/dashboard",
        para:
          "Vuetify filled dashboard with a variety data of like an interactive table, timeline, and a couple of graphs.",
      },
      {
        label: "Newsapp",
        url: "/newsapp",
        para:
          "Vuetify news app, that makes api calls using axios. Left sidebar menu filters based on news source.",
      },
      {
        label: "Python Django Blog",
        url: "https://hanekj25.pythonanywhere.com/",
        para:
          "Python Django backend. Coded along to the Python Django Girls tutorial to understand how Django works and further my understanding.",
      },
      {
        label: "Leaflet Map Tutorial",
        url: "/quickmap",
        para:
          "Worked through the quick start guide for leaflet. Not properly written to operate in Vue, will fix by next project.",
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
    certs: [
      "Beginner Full Stack Web Development",
      "JavaScript Fundamentals",
      "Advanced and Object Oriented JavaScript and ES6",
      "JS, Bootstrap, & PHP for beginners",
      "Angular Crash Course",
      "Completed SQLZOO",
      "Scrimba React Bootcamp",
      "Vue Mastery Beginner Path",
      "Python For Everybody Full Completion",
    ],
    skills: [
      {
        label: "HTML5",
        value: "90",
      },
      {
        label: "JavaScript",
        value: "80",
      },
      {
        label: "ReactJS",
        value: "75",
      },
      {
        label: "Bootstrap",
        value: "75",
      },
      {
        label: "Vue",
        value: "65",
      },
      {
        label: "Vuex",
        value: "65",
      },
      {
        label: "Vuetify",
        value: "65",
      },
      {
        label: "Python",
        value: "70",
      },
      {
        label: "Django",
        value: "10",
      },
      {
        label: "NodeJS",
        value: "80",
      },
      {
        label: "Express",
        value: "80",
      },
      {
        label: "SQL",
        value: "75",
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
    getCerts: (state) => state.certs,
    getSkills: (state) => state.skills,
    countIncomplete: (state) => {
      return state.todos.filter((task) => task.completed === false).length;
    },
  },
});
