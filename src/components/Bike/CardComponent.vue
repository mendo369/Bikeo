<script setup>
defineProps({
  component: Object,
});
</script>

<template>
  <div class="card-component">
    <div class="title">
      <h3>{{ component.name }} {{ component.brand }} {{ component.model }}</h3>
    </div>
    <div class="description">
      <p>{{ component.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card-component {
  width: 80%;
  margin: auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

.card-component:hover {
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.7);
}

.title {
  background-image: linear-gradient(30deg, #b721ff, #21a5fd);
  color: white;
}

.description {
  padding: 5px;
}
</style>
