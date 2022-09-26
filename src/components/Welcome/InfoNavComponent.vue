<script setup></script>

<template>
  <nav class="nav-info">
    <ul class="nav-info-list">
      <li><router-link to="/about">Bikeo</router-link></li>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/auth/signin">Registro</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-info {
  padding: 20px 0 30px;
  width: 70%;
  margin: auto;
}

.nav-info-list {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.nav-info-list li {
  cursor: pointer;
}

.nav-info-list li a:hover {
  /* filter: drop-shadow(0 0 2em crimson); */
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.426);
}

a {
  text-decoration: none;
  color: black;
  font-size: 1.3em;
}
</style>
