<template>
  <div class="bg-dark h-screen">
    <div class="flex relative z-0" style="height: 88vh;">
      <Sidebar />
      <!-- main content -->
      <div class="w-full h-full relative">
        <!-- header -->
        <div class="w-full sticky top-0 p-2"></div>
      </div>
    </div>
    <!-- play bar -->
    <div class="w-full bg-light z-10 relative" style="height: 12vh;"></div>
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";

export default {
  components: { Sidebar },
  name: "App"
};
</script>
