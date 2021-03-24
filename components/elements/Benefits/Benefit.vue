<template>
  <div class="benefit__item col-sm">
    <div class="benefit__item__head d-flex">
      <span class="benefit__item__head_number">{{ number }}</span>
      <img class="benefit__item__head_image" :src="imgUrl" :alt="imgAlt" />
    </div>
    <div class="benefit__item__body">
      <div class="benefit__item__body_title">{{ title }}</div>
      <div class="benefit__item__body_description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.benefit {
  &__item {
    &__head {
      &_number {
        color: $textOpacityColor;
        font-family: Open Sans, sans-serif;
        font-size: 5rem;
        font-weight: 700;
      }
      &_image {
        margin-left: 8px;
      }
    }
    &__body {
      &_title {
        font-family: Lora, serif;
        font-size: 1.625rem;
        font-weight: 500;
        color: $textColor;
        padding-top: 20px;
        line-height: 1.5;
      }
      &_description {
        font-family: Open Sans, sans-serif;
        font-size: 1.0625rem;
        color: $textColor;
        line-height: 2;
        padding-top: 26px;
      }
    }
  }
}
</style>
