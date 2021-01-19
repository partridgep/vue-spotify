<template>
  <div class="bg-dark h-screen">
    <div class="flex relative z-0" style="height: 88vh;">
      <Sidebar />
      <MainContent />
    </div>
    <!-- play bar -->
    <div class="w-full bg-light z-10 relative" style="height: 12vh;"></div>
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";
import MainContent from "./components/MainContent/MainContent.vue";

export default {
  components: { Sidebar, MainContent },
  name: "App"
};
</script>
