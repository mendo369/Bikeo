<script setup>
import NavInfo from "./InfoNavComponent.vue";
</script>

<template>
  <div class="info">
    <section class="info-section">
      <NavInfo />
      <h1>info section</h1>
    </section>
  </div>
</template>

<style scoped>
.info {
  min-width: 50vw;
}
.info-section {
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.7);
  margin: auto;
  min-height: 90vh;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 40px;
}
</style>
