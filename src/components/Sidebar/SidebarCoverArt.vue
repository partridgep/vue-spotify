<template>
  <div class="flex flex-col w-full z-10">
    <button
      class="bg-black flex items-center justify-start text-sm mx-5 pt-2 text-lightest hover:text-white"
    >
      <i class="material-icons mr-3 rounded-full border border-lightest">
        arrow_downward
      </i>
      <p class="text-sm font-semibold">Install App</p>
    </button>
    <div class="relative">
      <div
        class="w-full h-full flex justify-end items-start absolute pt-6 px-2 cursor-pointer opacity-0 hover:opacity-100"
      >
        <div class="bg-black rounded-full h-6 w-6">
          <i class="material-icons text-white">keyboard_arrow_down</i>
        </div>
      </div>
      <img src="../../assets/playing.png" class="pt-4" alt="Playing Now" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarCoverArt"
};
</script>
