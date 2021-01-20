<template>
  <div class="mb-5">
    <h1 class="text-white font-semibold text-3xl mb-3">Shortcuts</h1>
    <div class="flex flex-wrap justify-between">
      <button
        v-for="(shortcut, index) in getShortcuts"
        :key="index"
        class="flex-grow flex flex-row items-center text-white text-left font-semibold tracking-wide w-1/3 h-20 bg-gradient-to-b from-light to-light rounded mr-5 mb-3 md:w-56 xl:w-1/5 hover:from-gray-600 hover:to-gray-700 focus:outline-none"
        v-show="
          index < 4 ||
            (index >= 4 && index < 6 && show6) ||
            (index >= 6 && show8)
        "
        @mouseover="(showPlayBtn = true), (hoveredIdx = index)"
        @mouseout="(showPlayBtn = false), (hoveredIdx = -1)"
      >
        <img :src="shortcut.icon" alt="Cover Art" class="h-full rounded-l" />
        <p class="px-3 line-clamp-2">{{ shortcut.name }}</p>
        <button
          v-show="showPlayBtn && hoveredIdx === index"
          class="rounded-full ml-auto mr-3 bg-green flex shadow-2xl focus:outline-none"
        >
          <i class="material-icons text-white text-center p-2">play_arrow</i>
        </button>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
const tailwindConfig = require("../../../tailwind.config.js");

export default {
  name: "Shortcuts",
  data() {
    return {
      windowWidth: 0,
      xlBreakpoint: Number(tailwindConfig.theme.screens.xl.replace("px", "")),
      lgBreakpoint: Number(tailwindConfig.theme.screens.lg.replace("px", "")),
      showPlayBtn: false,
      hoveredIdx: -1
    };
  },
  computed: {
    ...mapState(["playlists"]),
    ...mapGetters(["getShortcuts"]),
    // booleans to display 4, 6, or 8 shortcuts depending on screen width
    // solutions below admittedly feel pretty hacky
    show6() {
      return this.windowWidth >= this.lgBreakpoint - 4 ? true : false;
    },
    show8() {
      return this.windowWidth >= this.xlBreakpoint - 16 ? true : false;
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
