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
    <div class="flex flex-col justify-center w-1/3 items-center -mb-3">
      <div class="flex items-center">
        <button class="mx-3 text-lightest hover:text-white focus:outline-none">
          <i class="material-icons md-18">shuffle</i>
        </button>
        <button class="mx-3 text-lightest hover:text-white focus:outline-none">
          <i class="material-icons">skip_previous</i>
        </button>
        <button
          class="rounded-full h-8 w-8 flex items-center justify-center mx-3 -mt-1 border-lightest border text-lightest hover:text-white focus:outline-none"
        >
          <i class="material-icons">play_arrow</i>
        </button>
        <button class="mx-3 text-lightest hover:text-white focus:outline-none">
          <i class="material-icons">skip_next</i>
        </button>
        <button class="mx-3 text-lightest hover:text-white focus:outline-none">
          <i class="material-icons md-18">repeat</i>
        </button>
      </div>
      <div class="z-10 flex items-center justify-between relative my-2 w-full">
        <p class="text-xs text-lightest -ml-8">0:00</p>
        <div
          class="z-0 absolute rounded w-full h-1 bg-lightest opacity-50"
        ></div>
        <div
          class="z-0 absolute rounded h-1"
          :class="scrubbing ? 'bg-green' : 'bg-lightest'"
          :style="{ width: `${songSliderVal}% ` }"
        ></div>
        <input
          class="absolute appearance-none w-full h-1 rounded outline-none bg-lightest bg-opacity-0"
          v-bind:class="scrubbing ? 'play-slider-thumb' : 'slider-thumb-none'"
          v-model="songSliderVal"
          @mouseover="scrubbing = true"
          @mouseout="scrubbing = false"
          type="range"
          min="1"
          max="100"
          step="1"
        />
        <p class="text-xs text-lightest -mr-8">3:28</p>
      </div>
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
        class="appearance-none w-full mx-2 h-1 rounded outline-none"
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
      changingVolume: false,
      scrubbing: false,
      songSliderVal: 0
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
