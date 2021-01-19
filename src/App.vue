<template>
  <div class="bg-dark h-screen">
    <div class="flex relative z-0" style="height: 88vh;">
      <!-- side nav -->
      <div
        class="w-56 bg-black h-full flex justify-between flex-col flex-none overflow-hidden"
      >
        <div class="flex flex-col flex-grow h-16">
          <div class="p-6">
            <img
              src="./assets/SpotifyLogo.png"
              class="h-10"
              alt="Spotify Logo"
            />
          </div>
          <div class="mx-2 mb-5">
            <button
              v-for="(page, index) in pages"
              :key="index"
              @click="setID = page.id"
              :class="
                `w-full text-sm font-semibold rounded px-3 py-2 flex items-center justify-start focus:outline-none ${
                  setID == page.id ? 'bg-light text-white' : 'text-lightest'
                }`
              "
            >
              <i class="material-icons mr-3"> {{ page.icon }} </i>
              <p>{{ page.name }}</p>
            </button>
          </div>
          <div class="mx-5">
            <h1 class=" mb-3 text-xs text-lightest tracking-widest uppercase">
              Playlists
            </h1>
            <button
              class="flex items-center justify-start mb-2 opacity-75 hover:opacity-100 focus:outline-none"
            >
              <img
                src="./assets/AddNew.png"
                class="h-8 w-8 mr-3"
                alt="Add New"
              />
              <p class="text-sm text-white font-semibold">Add New</p>
            </button>
            <button
              class="flex items-center justify-start opacity-75 hover:opacity-100 focus:outline-none"
            >
              <img
                src="./assets/favorites.png"
                class="h-8 w-8 mr-3"
                alt="Liked Songs"
              />
              <p class="text-sm text-white font-semibold">Liked Songs</p>
            </button>
            <div class="h-px w-full bg-light my-3"></div>
          </div>
          <div class="mx-5 flex-shrink overflow-y-scroll">
            <div
              class="w-full flex flex-shrink flex-col overflow-y-scroll min-h-0"
            >
              <p
                v-for="(playlist, index) in playlists"
                :key="index"
                class="text-lightest hover:text-white text-sm py-1"
              >
                {{ playlist.name }}
              </p>
            </div>
          </div>
        </div>
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
            <img src="./assets/playing.png" class="pt-4" alt="Playing Now" />
          </div>
        </div>
      </div>
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
export default {
  name: "App",
  data: function() {
    return {
      pages: [
        { id: "home", name: "Home", icon: "home" },
        { id: "search", name: "Search", icon: "search" },
        { id: "library", name: "Your Library", icon: "bar_chart" }
      ],
      setID: "home",
      playlists: [
        { name: "OST" },
        { name: "Wine & Dine" },
        { name: "Discover Weekly" },
        { name: "Guardians of the Galaxy" },
        { name: "Afternoon Love" },
        { name: "Coffeehouse Jazz" },
        { name: "The New Alt" }
      ]
    };
  }
};
</script>
