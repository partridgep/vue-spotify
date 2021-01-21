<template>
  <div>
    <h1 class="text-white font-semibold text-2xl mb-3">Recently Played</h1>
    <div class="flex flex-wrap justify-between">
      <button
        v-for="(playedItem, index) in getRecentlyPlayed"
        :key="index"
        class="flex-grow flex flex-col items-center text-white text-left font-semibold tracking-wide w-32 h-96 bg-opacity-25 bg-gradient-to-b from-light to-light rounded mr-5 mb-3 hover:from-gray-700 hover:to-gray-800 focus:outline-none"
        v-show="
          index < 2 ||
            (index === 2 && show3) ||
            (index === 3 && show4) ||
            (index === 4 && show5) ||
            (index === 5 && show6)
        "
        @mouseover="(showPlayBtn = true), (hoveredIdx = index)"
        @mouseout="(showPlayBtn = false), (hoveredIdx = -1)"
      >
        <div class="relative">
          <img
            :src="playedItem.icon"
            alt="Cover Art"
            class="h-1/6 rounded p-5 relative"
          />
          <button
            v-show="showPlayBtn && hoveredIdx === index"
            class="absolute bottom-0 right-0 rounded-full mb-6 mr-6 bg-green flex shadow-2xl focus:outline-none"
          >
            <i class="material-icons text-white text-center p-2">play_arrow</i>
          </button>
        </div>
        <p class="w-full px-5 pb-2 truncate">{{ playedItem.name }}</p>
        <p
          v-if="playedItem.artist"
          class="w-full px-5 pb-10 truncate text-xs font-normal text-lightest"
        >
          {{ playedItem.artist }}
        </p>
        <p
          v-if="playedItem.description"
          class="w-full px-5 pb-10 truncate text-xs font-normal text-lightest"
        >
          {{ playedItem.description }}
        </p>
        <p
          v-if="playedItem.creator"
          class="w-full px-5 pb-10 truncate text-xs font-normal text-lightest"
        >
          By {{ playedItem.creator }}
        </p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const tailwindConfig = require("../../../tailwind.config.js");

export default {
  name: "RecentlyPlayed",
  data() {
    return {
      windowWidth: 0,
      smBreakpoint: Number(tailwindConfig.theme.screens.sm.replace("px", "")),
      mdBreakpoint: Number(tailwindConfig.theme.screens.md.replace("px", "")),
      lgBreakpoint: Number(tailwindConfig.theme.screens.lg.replace("px", "")),
      xlBreakpoint: Number(tailwindConfig.theme.screens.xl.replace("px", "")),
      xxlBreakpoint: Number(tailwindConfig.theme.screens.xxl.replace("px", "")),
      showPlayBtn: false,
      hoveredIdx: -1
    };
  },
  computed: {
    ...mapGetters(["getRecentlyPlayed"]),
    show3() {
      return this.windowWidth >= this.mdBreakpoint - 4 ? true : false;
    },
    show4() {
      return this.windowWidth >= this.lgBreakpoint - 4 ? true : false;
    },
    show5() {
      return this.windowWidth >= this.xlBreakpoint - 16 ? true : false;
    },
    show6() {
      return this.windowWidth >= this.xxlBreakpoint - 16 ? true : false;
    }
  },
  methods: {
    updateWindowSize() {
      this.windowWidth = window.innerWidth;
    }
  },
  mounted() {
    this.updateWindowSize();
    window.addEventListener("resize", this.updateWindowSize);
  },
  beforeDestroyed() {
    window.removeEventListener("resize", this.updateWindowSize);
  }
};
</script>
