<template>
  <div class="w-full h-full relative">
    <Header />
    <div class="px-8 py-2">
      <Shortcuts />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Shortcuts from "./Shortcuts.vue";

export default {
  name: "MainContent",
  components: { Header, Shortcuts }
};
</script>
