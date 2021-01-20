<template>
  <div class="w-full h-full relative overflow-y-scroll">
    <Header />
    <div class="px-8 py-2 overflow-y-scroll">
      <Shortcuts />
      <RecentlyPlayed />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Shortcuts from "./Shortcuts.vue";
import RecentlyPlayed from "./RecentlyPlayed.vue";

export default {
  name: "MainContent",
  components: { Header, Shortcuts, RecentlyPlayed }
};
</script>
