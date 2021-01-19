<template>
  <div class="mx-5">
    <h1 class=" mb-3 text-xs text-lightest tracking-widest uppercase">
      Playlists
    </h1>
    <button
      class="flex items-center justify-start mb-2 opacity-75 hover:opacity-100 focus:outline-none"
    >
      <img src="../../assets/AddNew.png" class="h-8 w-8 mr-3" alt="Add New" />
      <p class="text-sm text-white font-semibold">Add New</p>
    </button>
    <button
      class="flex items-center justify-start opacity-75 hover:opacity-100 focus:outline-none"
    >
      <img
        src="../../assets/favorites.png"
        class="h-8 w-8 mr-3"
        alt="Liked Songs"
      />
      <p class="text-sm text-white font-semibold">Liked Songs</p>
    </button>
    <div class="h-px w-full bg-light my-3"></div>
  </div>
</template>

<script>
export default {
  name: "SidebarPlaylistButtons"
};
</script>
