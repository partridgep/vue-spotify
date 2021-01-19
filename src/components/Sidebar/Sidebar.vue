<template>
  <div
    class="w-56 bg-black h-full flex justify-between flex-col flex-none overflow-hidden"
  >
    <div class="flex flex-col flex-grow h-16">
      <div class="p-6">
        <img
          src="../../assets/SpotifyLogo.png"
          class="h-10"
          alt="Spotify Logo"
        />
      </div>
      <SidebarNav />
      <SidebarPlaylistButtons />
      <SidebarPlaylists />
    </div>
    <SidebarCoverArt />
  </div>
</template>

<script>
import SidebarNav from "./SidebarNav.vue";
import SidebarPlaylists from "./SidebarPlaylists.vue";
import SidebarPlaylistButtons from "./SidebarPlaylistButtons.vue";
import SidebarCoverArt from "./SidebarCoverArt.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarNav,
    SidebarPlaylists,
    SidebarPlaylistButtons,
    SidebarCoverArt
  }
};
</script>
