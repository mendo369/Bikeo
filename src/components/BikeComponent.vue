<script setup>
import Slider from "./Sliders/CoverFlow.vue";
import Cube from "./Sliders/CubeSlider.vue";
import CardComponent from "./Bike/CardComponent.vue";
import Contacto from "./Bike/ContactoComponent.vue";
defineProps({
  bike: {
    brand: String,
    images: Array,
    name: String,
    model: Number,
    description: String,
    sizes: Array,
    price: Number,
    components: Array,
    contacts: Array,
  },
});
</script>

<template>
  <section class="bike">
    <div class="slider">
      <Slider :images="bike.images" />
    </div>
    <div class="name">
      <h2>
        {{ bike.brand }} {{ bike.name }} <span>{{ bike.model }}</span>
      </h2>
    </div>
    <div class="description">
      <p>{{ bike.description }}</p>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi
        culpa, ratione magni temporibus molestiae sed. Quos vitae qui, magni
        tenetur ea quidem non perferendis facilis. Aspernatur amet ullam
        incidunt.
      </p>
    </div>
    <section class="sizes">
      <h2>Tallas disponibles:</h2>
      <ul class="sizes-list">
        <li class="size" v-for="size in bike.sizes" :key="size">{{ size }}</li>
      </ul>
    </section>
    <section class="components">
      <h2>Componentes</h2>
      <div class="components-display">
        <div class="list-components">
          <CardComponent
            v-for="component in bike.components"
            :key="component.name"
            :component="component"
          />
        </div>
        <div class="cube">
          <Cube :components="bike.components" />
        </div>
      </div>
    </section>
    <section class="contacts">
      {{ bike.contacts }}
      <Contacto
        v-for="contact in bike.contacts"
        :key="contact.name"
        :contact="contact"
      />
    </section>
  </section>
</template>

<style scoped>
.bike {
  display: grid;
  grid-auto-flow: row;
  gap: 1em;
  padding: 1em 10vw;
  margin: auto;
  max-height: 85vh;
  overflow-y: scroll;
  scrollbar-color: rgb(0, 162, 255) rgba(0, 0, 0, 0);
  scrollbar-width: thin;
}

.slider {
  width: 100%;
  overflow: hidden;
  min-height: 400px;
}

.name {
  text-align: center;
}

.sizes {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
}

.sizes-list {
  border: 1px solid black;
  width: 6em;
  list-style-type: none;
  display: grid;
  grid-auto-flow: column;
  /* gap: 10px;
  padding: 0 10px; */
  align-items: center;
  justify-content: space-evenly;
}

.size {
  width: fit-content;
  cursor: pointer;
}

.components {
  text-align: center;
  display: grid;
  gap: 1em;
  margin-bottom: 2em;
}

.components-display {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: 1fr 1fr;
}
.list-components {
  display: grid;
  grid-auto-flow: row;
  gap: 1em;
}
</style>
