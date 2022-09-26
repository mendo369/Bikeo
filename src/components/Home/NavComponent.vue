<script setup>
import Logo from "../BikeoLogoComponent.vue";
</script>

<template>
  <nav class="nav-home">
    <div class="logo">
      <Logo />
    </div>
    <div class="search">
      <form class="search-form">
        <input
          type="text"
          class="input-search"
          placeholder="Search a bike for you"
        />
        <img src="../icons/search.svg" alt="search" class="search-icon" />
      </form>
    </div>
    <div class="user">
      <div class="user-photo">
        <img src="../../mock/media/tanjiro.jpg" alt="img profile" />
      </div>
      <div class="user-name"><h5>Tanjiro Kamado</h5></div>
    </div>
  </nav>
</template>

<style scoped>
.nav-home {
  width: 100%;
  height: 15vh;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 10vw 75% 1fr;
  align-items: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
}

.search {
  min-width: 20%;
  max-width: 40%;
  margin: auto;
  border: 2px solid rgb(68, 62, 62);
  padding: 0px 10px;
  border-radius: 15px;
}

.search-form {
  display: grid;
  grid-template-columns: 80% 1fr;
  align-items: center;
  gap: 1em;
  justify-content: space-between;
}

.input-search {
  outline: none;
  border: 0;
  padding-bottom: 1px;
}

.search-icon {
}

.user {
  width: 100%;
  margin: auto;
}

.user-photo {
  margin: 0px auto 5px;
  background-color: blue;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.user-photo img {
  width: 100%;
  border-radius: 50%;
}

.user-name {
  margin: auto;
}

.user-name h5 {
  line-height: 15px;
  font-size: 1em;
  text-align: center;
}
</style>
