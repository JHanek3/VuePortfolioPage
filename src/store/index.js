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
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getLinks: (state) => state.links,
  },
});
