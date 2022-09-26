<script setup>
// import { router- } from "vue-router";
</script>

<template>
  <main class="auth">
    <div class="container">
      <div class="signs">
        <router-link to="/auth/signin">Sign In</router-link>
        <i> | </i>
        <router-link to="/auth/signup">Sign Up</router-link>
      </div>
      <router-view />
    </div>
  </main>
</template>

<style scoped>
.auth {
  background-image: url("../assets/ciudad.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  align-items: center;
  justify-content: center;
}
.container {
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  min-height: 80vh;
  width: 30vw;
  margin: auto;
  background-color: rgba(244, 235, 235, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 40px;
}

a {
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
  margin: 0px 10px;
}

.signs {
  margin: 1em;
}
</style>
