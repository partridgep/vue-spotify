<template>
  <div
    class="w-full flex items-center justify-between px-3 bg-light z-10 relative"
    style="height: 9.5vh;"
  >
    <div class="flex items-center">
      <div v-if="!bigCoverArt" class="relative">
        <div class="full opacity-0 hover:opacity-100">
          <button
            class="absolute top-0 bg-black flex items-center justify-start rounded-full text-xs ml-8 mt-2 text-lightest hover:text-white focus:outline-none"
            @click="moveCoverArt"
          >
            <i class="material-icons rounded-full">
              keyboard_arrow_up
            </i>
          </button>
        </div>
        <img
          src="../assets/playing.png"
          class="h-16 p-1 mr-3"
          alt="Cover Art"
        />
      </div>
      <div>
        <h1
          class="text-sm text-white tracking-wide hover:underline cursor-pointer"
        >
          POSTERITY
        </h1>
        <h2
          class="text-xs text-lightest tracking-wide hover:underline hover:text-white cursor-pointer"
        >
          Ludwig Goransson
        </h2>
      </div>
      <i class="material-icons text-base text-lightest mx-6 hover:text-white">
        favorite_outline
      </i>
    </div>
    <div class="flex items-center">
      <i class="material-icons text-lightest hover:text-white">playlist_play</i>
      <i class="material-icons text-xl text-lightest mx-3 hover:text-white">
        important_devices
      </i>
      <i
        class="material-icons text-xl text-lightest hover:text-white"
        @mouseover="changingVolume = true"
        @mouseout="changingVolume = false"
      >
        volume_up
      </i>
      <input
        class="appearance-none w-full ml-2 h-1 rounded outline-none"
        v-bind:class="
          changingVolume
            ? 'bg-green slider-thumb'
            : 'bg-lightest slider-thumb-none'
        "
        type="range"
        min="1"
        max="100"
        step="1"
        value="100"
        @mouseover="changingVolume = true"
        @mouseout="changingVolume = false"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "PlayBar",
  data() {
    return {
      changingVolume: false
    };
  },
  computed: {
    ...mapState(["bigCoverArt"])
  },
  methods: {
    highlightVolumeBar() {
      this.changingVolume = true;
    },
    ...mapMutations(["MOVE_COVER_ART"]),
    moveCoverArt: function() {
      this.MOVE_COVER_ART();
    }
  }
};
</script>
