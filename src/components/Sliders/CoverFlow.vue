<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: Array,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>

<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="image in images" :key="image">
      <img :src="image" alt="Iamgen" />
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  padding: 1em;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 22em;
  height: 22em;
  margin-bottom: 1em;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
