<script setup>
import Welcome from "../components/Welcome/WelcomeComponent.vue";
import Info from "../components/Welcome/InfoComponent.vue";
</script>

<template>
  <main class="home">
    <div class="container">
      <Welcome />
      <Info />
    </div>
  </main>
</template>

<style scoped>
.home {
  background-image: url("../assets/ciudad.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
.container {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
}
</style>
