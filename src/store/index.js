import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nowPlaying: null,
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
      {
        name: "OST",
        recentlyPlayed: true,
        icon: require("../assets/OST.png"),
        creator: "Paul Partridge"
      },
      {
        name: "Wine & Dine",
        recentlyPlayed: false,
        icon: require("../assets/WineAndDine.png"),
        description:
          "As you prepare and settle into your romantic dinner, let us provide the soundtrack with these RnB/Soul love songs."
      },
      {
        name: "Discover Weekly",
        recentlyPlayed: true,
        icon: require("../assets/DiscoverWeekly.png"),
        description:
          "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday."
      },
      {
        name: "Guardians of the Galaxy",
        recentlyPlayed: false,
        icon: require("../assets/Guardians.png"),
        creator: "Hollywood Records"
      },
      {
        name: "Afternoon Acoustic",
        recentlyPlayed: false,
        icon: require("../assets/AfternoonAcoustic.png"),
        description:
          "Unwind and let the afternoon unfold in all its acoustic glory."
      },
      {
        name: "Coffeehouse Jazz",
        recentlyPlayed: false,
        icon: require("../assets/CoffeehouseJazz.png"),
        description:
          "Late night chill Jazz sounds perfect for a dinner party or cooking playlist!"
      }
    ],
    dailyMixes: [
      {
        name: "Daily Mix 1",
        recentlyPlayed: false,
        icon: require("../assets/DailyMix1.png"),
        artist: "Queen, Led Zeppelin, Billy Squier and more"
      },
      {
        name: "Daily Mix 2",
        recentlyPlayed: false,
        icon: require("../assets/DailyMix2.png"),
        artist: "Royal Blood, Welshly Arms, Des Rocs and more"
      },
      {
        name: "Daily Mix 3",
        recentlyPlayed: true,
        icon: require("../assets/DailyMix3.png"),
        artist: "Hans Zimmer, Ludwig Goransson, John Williams and more"
      }
    ],
    recentlyPlayed: [
      {
        name: "Tenet (Original Motion Picture Soundtrack)",
        icon: require("../assets/TenetOST.png"),
        artist: "Ludwig Goransson"
      },
      {
        name: "Classic Rock Workout",
        icon: require("../assets/ClassicRockWorkout.png"),
        description:
          "Nothing but anthems - for an extra rep, an extra set, an extra mile..."
      },
      {
        name: "The Polar Express",
        icon: require("../assets/PolarExpress.png"),
        creator: "bumblingbee13"
      }
    ],
    bigCoverArt: true
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
    SET_CURRENT_TRACK: (state, object) => {
      state.nowPlaying = object;
    },
    SET_PAGE_ID: (state, id) => {
      state.currentPageID = id;
    },
    MOVE_COVER_ART: state => {
      state.bigCoverArt = !state.bigCoverArt;
    }
  },
  actions: {},
  modules: {}
});
