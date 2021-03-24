<template>
  <div class="row">
    <Benefit
      v-for="(benefit, index) of this.$store.state.benefits.list"
      :key="index"
      :number="index + 1"
      :imgUrl="benefit.image.url"
      imgAlt="Test"
      :title="benefit.title"
      :description="benefit.description"
    />
  </div>
</template>

<script>
import Benefit from "@/components/elements/Benefits/Benefit"

import {
  BENEFITS_NAMESPACE_PREFIX,
  GET_BENEFITS_SECTION_DATA
} from "@/store/benefits"

export default {
  components: {
    Benefit
  },

  created() {
    this.$store.dispatch(BENEFITS_NAMESPACE_PREFIX + GET_BENEFITS_SECTION_DATA)
  }
};
</script>
