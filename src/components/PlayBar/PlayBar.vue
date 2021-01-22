<template>
  <div
    class="w-full flex items-center justify-between px-3 bg-light z-10 relative"
    style="height: 9.5vh;"
  >
    <NowPlayingDetails />
    <NowPlayingControls />
    <SoundControls />
  </div>
</template>

<script>
import NowPlayingDetails from "./NowPlayingDetails.vue";
import NowPlayingControls from "./NowPlayingControls.vue";
import SoundControls from "./SoundControls.vue";

export default {
  name: "PlayBar",
  components: { NowPlayingDetails, NowPlayingControls, SoundControls }
};
</script>
