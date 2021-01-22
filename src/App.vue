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

export default {
  components: { Sidebar, MainContent, PlayBar },
  name: "App"
};
</script>
