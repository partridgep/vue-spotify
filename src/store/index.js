import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "Paul Partridge",
      photo: require("../assets/ProfilePicture.png")
    },
    blankUserPic: require("../assets/NoProfilePic.png"),
    pages: [
      { id: "home", name: "Home", icon: "home" },
      { id: "search", name: "Search", icon: "search" },
      { id: "library", name: "Your Library", icon: "bar_chart" }
    ],
    currentPageID: "home",
    playlists: [
      { name: "OST" },
      { name: "Wine & Dine" },
      { name: "Discover Weekly" },
      { name: "Guardians of the Galaxy" },
      { name: "Afternoon Acoustic" },
      { name: "Coffeehouse Jazz" },
      { name: "The New Alt" }
    ]
  },
  mutations: {
    SET_PAGE_ID: (state, id) => {
      state.currentPageID = id;
    }
  },
  actions: {},
  modules: {}
});
