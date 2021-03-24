<template>
  <div class="swiper w-100 p-0 position-relative overflow-hidden">
    <div class="swiper-wrapper">
      <Slide
        v-for="(cars, index) of this.separateToSubArrays()"
        :cars="cars"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import Slide from "@/components/elements/Swiper/Slide"
import Swiper from "swiper"
import "swiper/swiper-bundle.css"

import arraySeparator from "@/utils/arraySeparator"

export default {
  components: {
    Slide
  },
  methods: {
    separateToSubArrays() {
      const subArraySize = 3;
      return arraySeparator(this.$store.state.credentials.cards, subArraySize);
    }
  },
  mounted() {
    new Swiper(".swiper", {
      loop: true
    });
  }
};
</script>
