import Vue from "vue";
import Vuex from "vuex";


//after installing axiox and vue-axios import into the store
// import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.use(Vuex);
//This after imports, added jokes array to state
// Vue.use(VueAxios, axios)
//Importing did not work, instead we used Vue.axios.get and now it works


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
        label: "Joke API",
        url: "/jokes",
        para:
          "Proper API call developed project, after the blunder of the news app. Also found fix for the BrewList icons.",
      },
      {
        label: "Python Django Blog",
        url: "https://hanekj25.pythonanywhere.com/",
        para:
          "Python Django backend. Coded along to the Python Django Girls tutorial to understand how Django works and further my understanding.",
      },
      {
        label: "Python Django Official Docs",
        url: "https://github.com/JHanek3/Djagno-Docs",
        para:
          "This is just proof for working through the Docs beginner tutorial. Didn't bother to deploy, link is just source code.",
      },
      {
        label: "Django API",
        url: "/heroes",
        para: "Create my own API with a Django backend. All it process is a GET request, link displays the API data."
      },
      {
        label: "Leaflet Map Tutorial",
        url: "/quickmap",
        para:
          "Worked through the quick start guide for leaflet. Not properly written to operate in Vue, will fix by next project.",
      },
      {
        label: "Leaflet Chicago Breweries",
        url: "/breweries",
        para:
          "API call to get list and map of some Chicago Brewries. Hover on list to trigger increase icon size fixed, solution found in jokes.",
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
        value: "25",
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
    jokes: [],
    heroes: [],
    brews: [],
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
    //now need a mutation to set our jokes, state parameter that hits jokes
    //payload parameter just holds our stuff
    SET_JOKES (state, payload) {
      state.jokes = payload
    },
    SET_HEROES (state, payload) {
      state.heroes = payload
    },
    SET_BREWS (state, payload) {
      state.brews = payload
    },

    //toggling the showing of the puncline here
    SHOW_PUNCH (state, payload) {
      const thePunch = state.jokes.filter((joke) => joke.id === payload)
      // console.log(thePunch)
      // console.log(thePunch[0].expand)
      // console.log("Time to toggle")
      thePunch[0].expand = !thePunch[0].expand
      // thePunch.expand = !thePunch.expand;
      // console.log(thePunch[0].expand)

      // i have no idea why its @ thePunch[0], would probably explain
      //the cant expand on 0 error, just debug with logs and vue devtools on chrome
    },
    ENLARGE_ICON (state, payload) {
      const theIcon = state.brews.filter((brew) => brew.id === payload)
      // console.log(theIcon)
      // console.log(theIcon[0].iconSize)
      theIcon[0].iconSize = [60,60]
    },
    DELARGE_ICON (state, payload) {
      const theIcon = state.brews.filter((brew) => brew.id === payload)
      theIcon[0].iconSize = [40, 40]
    }
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
    //after mutation time for action
    loadJokes ({ commit }) {
      Vue.axios
        .get('https://official-joke-api.appspot.com/random_ten')
        //this is where you would put headers
        .then(response => response.data)
        .then(jokes => {
          // this was added for the ability to toggle one punchline at a time
          jokes.map(r => {
            r.expand = false
          })
          console.log(jokes)
        //commit the mutation to the data
        commit('SET_JOKES', jokes)
        })
    },
    //this is our toggle action, to show the punchline on the click of a btn
    togglePunch: (context, payload) => {
      context.commit("SHOW_PUNCH", payload)
    },
    loadHeroes({ commit }) {
      Vue.axios
        .get('https://hanekapi.herokuapp.com/heroes/')
        .then(response => response.data)
        .then(heroes => {
          console.log(heroes)
          commit('SET_HEROES', heroes)
        })
    },
    loadBrews ({ commit }) {
      Vue.axios
        .get("https://api.openbrewerydb.org/breweries?by_city=chicago&per_page=50")
        .then(response => response.data)
        .then(brews => {
          //filter out all of the bad lat and lngs responses
          let clean = brews.filter(r => r.latitude !== null)
          //added on our necessary properties like iconSize and latlng 
          clean.map(r => {
            r.latLng = [r.latitude, r.longitude]
            r.iconSize = [40, 40]
            // r.lIconSize = [60, 60]
          })
          // console.log(clean)
        commit('SET_BREWS', clean)
        })
      },
      enlargeIcon: (context, payload) => {
        context.commit("ENLARGE_ICON", payload)
      },
      delargeIcon: (context, payload) => {
        context.commit("DELARGE_ICON", payload)
      }
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
    //add getter for our jokes array, then make a mutation
    getJokes: (state) => state.jokes,
    getHeroes: (state) => state.heroes,
    getBrews: (state) => state.brews
  },
});
