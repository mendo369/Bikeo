<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    components: Array,
  },
  setup() {
    return {
      modules: [EffectCube, Pagination],
    };
  },
};
</script>

<template>
  <swiper
    :effect="'cube'"
    :grabCursor="true"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="component in components" :key="component.name">
      <img :src="component.image" />
      <h3>{{ component.name }} {{ component.brand }} {{ component.model }}</h3>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 300px;
  height: 300px;
  position: relative;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
  margin-bottom: 1em;
}
</style>
