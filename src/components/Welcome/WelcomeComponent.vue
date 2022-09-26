<script setup></script>

<template>
  <section class="hero-section">
    <div class="bikeo-section">
      <h1 class="logo">Bikeo</h1>
      <small class="slogan">Descubre la magia de las bicis</small>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50vw;
}

.bikeo-section {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  padding: 15px;
  border-radius: 10px;
}

.logo {
  font-size: 3em;
  color: rgb(254, 0, 119);
  text-align: center;
}

.slogan {
  color: white;
}
</style>
