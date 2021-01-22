<template>
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
        @click.prevent="playSong"
      >
        <i v-if="!isPlaying" class="material-icons">play_arrow</i>
        <i v-if="isPlaying" class="material-icons">pause</i>
      </button>
      <button class="mx-3 text-lightest hover:text-white focus:outline-none">
        <i class="material-icons">skip_next</i>
      </button>
      <button class="mx-3 text-lightest hover:text-white focus:outline-none">
        <i class="material-icons md-18">repeat</i>
      </button>
    </div>
    <div class="z-10 flex items-center justify-between relative my-2 w-full">
      <p class="text-xs text-lightest -ml-10"> {{ scrubbingHold ? formatTime(Math.ceil(this.songSliderVal * 30 / 100)) : formatTime(elapsedTime) }} </p>
      <div class="z-0 absolute rounded w-full h-1 bg-lightest opacity-50"></div>
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
        @change="setTrackTime"
        @mousedown="scrubbingHold = true"
        @mouseup="scrubbingHold = false"
        type="range"
        min="0"
        max="100"
        step="1"
      />
      <p class="text-xs text-lightest -mr-10"> {{ scrubbingHold ? formatTime(Math.ceil(30 - this.songSliderVal * 30 / 100)) : formatTime(30 - elapsedTime) }} </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NowPlayingControls.vue",
  data() {
    return {
      scrubbing: false,
      scrubbingHold: false,
      songSliderVal: 0,
      isPlaying: false,
      audio: null,
      elapsedTime: 0,
      timerID: null
    };
  },
  computed: {
    ...mapState(["nowPlaying"])
  },
  methods: {
    playSong() {
      if (this.audio === null) {
        this.audio = new Audio(this.nowPlaying.data.preview);
      }
      if (this.nowPlaying) {
        if (this.isPlaying === false) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }
      this.isPlaying = !this.isPlaying;
    },
    setTrackTime() {
      let newTime = Math.ceil(this.songSliderVal * 30 / 100);
      this.audio.currentTime = newTime;
      this.elapsedTime = newTime;
    },
    handleUpdateTimer() {
      this.elapsedTime = ++this.elapsedTime;
    },
    handleTick() {
      if (this.isPlaying) {
        if (this.elapsedTime >= 30) {
          this.isPlaying = false;
          this.elapsedTime = 0;
        } else {
          this.handleUpdateTimer();
        }
      }
      if (!this.scrubbingHold) this.songSliderVal = (this.elapsedTime / 30) * 100;
    },
    formatTime(seconds) {
      let mins = Math.floor(seconds / 60).toString().padStart(2, '0');
      let secs = (seconds % 60).toString().padStart(2, '0');
      return `${mins}:${secs}`
    }
  },
  mounted() {
    this.timerID = setInterval(this.handleTick, 1000);
  },
  beforeDestroyed() {
    clearInterval(this.timerId);
  }
};
</script>
