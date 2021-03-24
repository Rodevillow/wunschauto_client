<template>
  <div class="swiper-slide w-100">
    <div class="row">
      <div class="col-sm-4" v-for="(car, index) of cars" :key="index">
        <CarCard :car="car" />
      </div>
    </div>
  </div>
</template>

<script>
import CarCard from "@/components/elements/CarCard"

export default {
  props: {
    cars: {
      type: Array,
      require: true
    }
  },
  components: {
    CarCard
  }
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  padding: 30px;
}
</style>
