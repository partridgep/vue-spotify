<template>
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
    <div class="relative w-24 mx-2 flex items-center">
      <div class="z-0 absolute rounded w-full h-1 bg-lightest opacity-50"></div>
      <div
        class="z-0 absolute rounded h-1"
        :class="changingVolume ? 'bg-green' : 'bg-lightest'"
        :style="{ width: `${soundSliderVal}% ` }"
      ></div>
      <input
        class="absolute appearance-none w-full h-1 rounded bg-lightest bg-opacity-0 outline-none"
        v-bind:class="changingVolume ? 'slider-thumb' : 'slider-thumb-none'"
        type="range"
        min="0"
        max="100"
        step="1"
        v-model="soundSliderVal"
        @mouseover="changingVolume = true"
        @mouseout="changingVolume = false"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SoundControls",
  data() {
    return {
      changingVolume: false,
      soundSliderVal: 100
    };
  },
  methods: {
    highlightVolumeBar() {
      this.changingVolume = true;
    }
  }
};
</script>
