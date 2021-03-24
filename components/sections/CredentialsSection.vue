<template>
  <section class="credentials">
    <div class="container">
      <H2 class="text-center">{{ this.$store.state.credentials.title }}</H2>
      <Paragraph class="credentials__description text-center">
        {{ this.$store.state.credentials.subtitle }}
      </Paragraph>
      <Swiper />
    </div>
  </section>
</template>

<script>
import H2 from "@/components/ui/text/H2"
import Paragraph from "@/components/ui/text/Paragraph"
import Swiper from "@/components/elements/Swiper"

import {
  CREDENTIALS_NAMESPACE_PREFIX,
  GET_CREDENTIALS_SECTION_DATA
} from "@/store/credentials"

export default {
  created() {
    this.$store.dispatch(
      CREDENTIALS_NAMESPACE_PREFIX + GET_CREDENTIALS_SECTION_DATA
    )
  },
  components: {
    H2,
    Paragraph,
    Swiper
  }
};
</script>

<style lang="scss" scoped>
.credentials {
  padding-top: 101px;
  padding-bottom: 101px;

  &__description {
    padding-top: 30px;
    padding-bottom: 30px;
    font-family: Open Sans, sans-serif;
    font-size: 1.0625rem;
    font-weight: 600;
    color: #182540;
  }
}

.swiper {
  padding: 10px 18px;
}
</style>
