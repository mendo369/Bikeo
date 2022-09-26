<script setup></script>

<template>
  <div class="logo">
    <router-link to="/">
      <h1>BIKEO</h1>
    </router-link>
  </div>
</template>

<style scoped>
.logo {
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  margin: auto;
  height: fit-content;
  width: fit-content;
}
a {
  cursor: pointer;
  text-decoration: none;
}
</style>
