<template>
  <div class="mx-5 flex-shrink overflow-y-scroll">
    <div class="w-full flex flex-shrink flex-col overflow-y-scroll min-h-0">
      <p
        v-for="(playlist, index) in playlists"
        :key="index"
        class="text-lightest hover:text-white text-sm py-1"
      >
        {{ playlist.name }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SidebarPlaylists",
  computed: {
    ...mapState(["playlists"])
  }
};
</script>
