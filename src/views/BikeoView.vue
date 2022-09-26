<script setup></script>

<template>
  <section class="about">
    <div class="container">
      <h1><router-link to="/">BIKEO</router-link></h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        ipsa fuga cum similique sequi magni ipsum soluta accusamus sunt
        voluptatem voluptas, pariatur, quae obcaecati ut enim nisi consectetur
        quas mollitia! <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi neque
        eaque iure. Praesentium, adipisci nam. Dolor in repudiandae cupiditate
        aperiam temporibus, nulla suscipit neque soluta maiores saepe laboriosam
        ratione! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Dolores, voluptates. Doloribus totam placeat asperiores incidunt
        officiis accusantium dolor nihil quia commodi dicta? Nihil distinctio
        quis optio quo officia odio necessitatibus! <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        ipsa fuga cum similique sequi magni ipsum soluta accusamus sunt
        voluptatem voluptas, pariatur, quae obcaecati ut enim nisi consectetur
        quas mollitia!
      </p>
    </div>
  </section>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.about {
  background-image: url("../assets/ciudad.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
}
.container {
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(10px);

  font-size: 1.1em;
  padding: 2em;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  max-height: 90vh;
  margin: auto;
  width: 60%;
  background-color: rgba(244, 235, 235, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 40px;
  overflow-y: scroll;
  scrollbar-color: rgb(0, 162, 255) rgba(0, 0, 0, 0);
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

h1 {
  font-size: 1.5em;
  margin-bottom: 1em;
}

p {
  font-size: 1.2em;
  margin-top: 1em;
  line-height: 2;
}
</style>
