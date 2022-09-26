<script setup></script>

<template>
  <section class="side-bar">
    <ul class="list-side-bar">
      <li class="item-side-bar" id="specialized">
        <router-link to="">
          <img src="../../mock/media/Specialized-logo.png" alt="Specialized" />
        </router-link>
      </li>
      <li class="item-side-bar">
        <router-link to="">
          <img src="../../mock/media/trek-logo.png" alt="Trek"
        /></router-link>
      </li>
      <li class="item-side-bar">
        <router-link to="">
          <img src="../../mock/media/Cannondale-logo.png" alt="Canonndale"
        /></router-link>
      </li>
      <li class="item-side-bar">
        <router-link to="">
          <img src="../../mock/media/orbea-logo.png" alt="Orbea"
        /></router-link>
      </li>
      <li class="item-side-bar">
        <router-link to="">
          <img src="../../mock/media/Pinarello-logo.png" alt="Pinarello"
        /></router-link>
      </li>
      <li class="item-side-bar">
        <router-link to="">
          <img
            src="../../mock/media/santa-cruz-bikes-logo.png"
            alt="Santa Cruz"
        /></router-link>
      </li>
      <li class="item-side-bar">
        <router-link to="">
          <img src="../../mock/media/Yeti-logo.png" alt="Yeti"
        /></router-link>
      </li>
      <li class="item-side-bar">
        <router-link to="">
          <img src="../../mock/media/gw-logo.png" alt="Gw"
        /></router-link>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.side-bar {
  max-height: 85vh;
  overflow: scroll;
  scrollbar-color: rgba(0, 162, 255, 0.6) rgba(0, 0, 0, 0);
  scrollbar-width: thin;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
  background: rgb(0, 162, 255);
}

.list-side-bar {
  list-style-type: none;
}
.item-side-bar {
  margin: 35px auto;
  width: 90%;
}

.item-side-bar img {
  width: 100%;
}

#specialized{
  width: 70%;
}
</style>
