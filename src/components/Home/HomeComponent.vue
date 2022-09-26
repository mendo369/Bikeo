<script setup>
import ListOfBikes from "./ListOfBikesComponent.vue";
import { storeToRefs } from "pinia";
import { useBikesStore } from "../../stores/bikes";

const { bikes } = storeToRefs(useBikesStore());
const { fetchBikes } = useBikesStore();

fetchBikes();
</script>

<template>
  <section class="home">
    <ListOfBikes :bikes="bikes" />
  </section>
</template>

<style scoped>
.home {
  padding-top: 10px;
  max-height: 85vh;
  overflow-y: scroll;
  scrollbar-color: rgb(0, 162, 255) rgba(0, 0, 0, 0);
  scrollbar-width: thin;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
  background: rgb(0, 162, 255);
}
</style>
