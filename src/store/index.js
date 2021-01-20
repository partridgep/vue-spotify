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
      { name: "OST", recentlyPlayed: true, icon: require("../assets/OST.png") },
      {
        name: "Wine & Dine",
        recentlyPlayed: false,
        icon: require("../assets/WineAndDine.png")
      },
      {
        name: "Discover Weekly",
        recentlyPlayed: true,
        icon: require("../assets/DiscoverWeekly.png")
      },
      {
        name: "Guardians of the Galaxy",
        recentlyPlayed: false,
        icon: require("../assets/Guardians.png")
      },
      {
        name: "Afternoon Acoustic",
        recentlyPlayed: false,
        icon: require("../assets/AfternoonAcoustic.png")
      },
      {
        name: "Coffeehouse Jazz",
        recentlyPlayed: false,
        icon: require("../assets/CoffeehouseJazz.png")
      }
    ],
    dailyMixes: [
      {
        name: "Daily Mix 1",
        recentlyPlayed: false,
        icon: require("../assets/DailyMix1.png")
      },
      {
        name: "Daily Mix 2",
        recentlyPlayed: false,
        icon: require("../assets/DailyMix2.png")
      },
      {
        name: "Daily Mix 3",
        recentlyPlayed: true,
        icon: require("../assets/DailyMix3.png")
      }
    ],
    recentlyPlayed: [
      {
        name: "Tenet (Original Motion Picture Soundtrack)",
        icon: require("../assets/TenetOST.png")
      },
      {
        name: "Classic Rock Workout",
        icon: require("../assets/ClassicRockWorkout.png")
      },
      {
        name: "The Polar Express",
        icon: require("../assets/PolarExpress.png")
      }
    ]
  },
  getters: {
    getShortcuts: ({ playlists, dailyMixes, recentlyPlayed }) => {
      // get a random assortment of 8 playlists, daily mixes, and recently played
      let combinedAll = [...playlists, ...dailyMixes, ...recentlyPlayed];
      let shortcuts = [];
      while (shortcuts.length < 8) {
        let randIndex = Math.floor(Math.random() * combinedAll.length);
        let randomPick = combinedAll[randIndex];
        if (!shortcuts.includes(randomPick)) shortcuts.push(randomPick);
      }
      return shortcuts;
    },
    getRecentlyPlayed: ({ playlists, dailyMixes, recentlyPlayed }) => {
      let recentlyPlayedPlaylists = playlists.filter(
        playlist => playlist.recentlyPlayed === true
      );
      let recentlyPlayedDailyMixes = dailyMixes.filter(
        dailyMix => dailyMix.recentlyPlayed === true
      );
      let allRecentlyPlayed = [
        ...recentlyPlayed,
        ...recentlyPlayedPlaylists,
        ...recentlyPlayedDailyMixes
      ];
      return allRecentlyPlayed;
    }
  },
  mutations: {
    SET_PAGE_ID: (state, id) => {
      state.currentPageID = id;
    }
  },
  actions: {},
  modules: {}
});
