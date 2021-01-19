<template>
  <div class="mx-2 mb-5">
    <button
      v-for="(page, index) in pages"
      :key="index"
      @click="setPageID(page.id)"
      :class="
        `w-full text-sm font-semibold rounded px-3 py-2 flex items-center justify-start focus:outline-none ${
          currentPageID == page.id
            ? 'bg-light text-white'
            : 'text-lightest hover:text-white'
        }`
      "
    >
      <i class="material-icons mr-3"> {{ page.icon }} </i>
      <p>{{ page.name }}</p>
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "SidebarNav",
  computed: {
    ...mapState(["pages", "currentPageID"])
  },
  methods: {
    ...mapMutations(["SET_PAGE_ID"]),
    setPageID: function(id) {
      this.SET_PAGE_ID(id);
    }
  }
};
</script>
