<script setup>
import Card from "../CardBikeComponent.vue";
defineProps({
  bikes: Array,
});
</script>

<template>
  <section class="list-of-bikes">
    <Card v-for="bike in bikes" :key="bike._id" :bike="bike" />
  </section>
</template>

<style scoped>
.list-of-bikes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1em;
  padding: 1em;
}
</style>
