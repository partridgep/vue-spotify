<template>
  <div class="bg-dark h-screen">
    <div class="flex relative z-0" style="height: 90.5vh;">
      <Sidebar />
      <MainContent />
    </div>
    <PlayBar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";
import MainContent from "./components/MainContent/MainContent.vue";
import PlayBar from "./components/PlayBar/PlayBar.vue";

import { mapMutations, mapActions } from "vuex";

export default {
  components: { Sidebar, MainContent, PlayBar },
  name: "App",
  methods: {
    ...mapMutations(["SET_CURRENT_TRACK"]),
    setCurrentTrack: function(object) {
      this.SET_CURRENT_TRACK(object);
    },
    ...mapActions(["getTrack"]),
    getTrackAction(id) {
      this.getTrack(id);
    }
  },
  mounted() {
    this.getTrackAction("1130197962");
  }
};
</script>
