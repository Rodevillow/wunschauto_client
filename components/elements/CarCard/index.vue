<template>
  <div class="car-card w-100 p-sm-4 p-3 text-center text-sm-left">
    <div class="car-card__image img-fluid">
      <img :src="car.image.url" alt="Car" />
    </div>
    <div class="car-card__price">{{ car.price }}</div>
    <div class="car-card__title">{{ car.title }}</div>
    <div class="car-card__description">{{ car.description }}</div>
    <div class="car-card__sub-title">{{ car.subtitle }}</div>
  </div>
</template>

<script>
export default {
  props: {
    car: {
      type: Object,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped>
.car-card {
  box-shadow: 0 10px 40px 0 rgb(24 37 64 / 10%);
  border-radius: 5px;

  &__image {
    img {
      border-radius: 50%;
      width: 140px;
      height: 140px;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }

  &__price {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: Lora, serif;
    font-size: 1.625rem;
    font-weight: 500;
    padding-top: 20px;
    color: $textDarkColor;
  }

  &__title {
    color: $textDisabledColor;
    font-family: Open Sans, sans-serif;
    font-size: 1.0625rem;
  }

  &__description {
    padding-bottom: 30px;
    padding-top: 30px;
    font-family: Open Sans, sans-serif;
    font-size: 1.0625rem;
    color: $textDarkColor;
    line-height: 2;
  }

  &__sub-title {
    font-family: Open Sans, sans-serif;
    font-size: 1.0625rem;
    color: #e50612;
    font-weight: 600;
  }
}
</style>
