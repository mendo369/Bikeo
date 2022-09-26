<script setup>
import Nav from "../components/Home/NavComponent.vue";
import SideBar from "../components/Home/SideBarComponent.vue";
import Home from "../components/Home/HomeComponent.vue";
</script>

<template>
  <!-- <section class="up"> -->
  <!-- <Logo /> -->
  <Nav></Nav>
  <!-- </section> -->
  <section class="down">
    <SideBar />
    <Home />
  </section>
</template>

<style scoped>
.up {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
}
.down {
  display: grid;
  grid-template-columns: 10vw 1fr;
  align-items: flex-start;
}
</style>
