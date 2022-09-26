<script setup>
import Nav from "../components/Home/NavComponent.vue";
import Bike from "../components/BikeComponent.vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useBikesStore } from "../stores/bikes";

const route = useRoute();
const ID = route.params.id;

const { bike } = storeToRefs(useBikesStore());
const { fetchBike } = useBikesStore();

fetchBike(ID);
</script>

<template>
  <Nav />
  <Bike :bike="bike" />
</template>

<style scoped></style>
