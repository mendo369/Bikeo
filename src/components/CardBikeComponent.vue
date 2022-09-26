<script setup>
defineProps({
  bike: {
    _id: String,
    brand: String,
    name: String,
    model: Number,
    price: Number,
    images: Array,
  },
});
</script>

<template>
  <router-link :to="{ name: 'bike', params: { id: bike._id } }">
    <div class="bike">
      <div class="brand">
        <h3>{{ bike.brand }}</h3>
      </div>
      <div class="visual"><img :src="bike.images[0]" :alt="bike.name" /></div>
      <div class="info">
        <div class="name">
          <h3>
            {{ bike.name }} <span class="model">{{ bike.model }}</span>
          </h3>
        </div>
        <div class="price">
          <h4><span>USD</span> {{ bike.price }}</h4>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.bike {
  cursor: pointer;
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.4);
  row-gap: 0.5em;
}

.bike:hover {
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.6);
}

.visual img {
  width: 100%;
}

.brand {
  text-align: center;
}

.info {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
}
</style>
