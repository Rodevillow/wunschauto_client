<template>
  <section class="benefits">
    <div class="container">
      <div class="benefits__head">
        <H3 class="text-center">{{ this.$store.state.benefits.description }}</H3>
        <H2 class="text-center">{{ this.$store.state.benefits.title }}</H2>
      </div>
      <Benefits />
    </div>
  </section>
</template>

<script>
import H2 from "@/components/ui/text/H2"
import H3 from "@/components/ui/text/H3"
import Benefits from "@/components/elements/Benefits"


export default {
  components: {
    H2, H3, Benefits
  }
};
</script>

<style lang="scss" scoped>
.benefits {
  background-color: $backgroundDark;
  padding-bottom: 80px;
  color: $textColor;

  &__head {
    padding-top: 140px;

    h2 {
      padding-top: 20px;
      padding-bottom: 60px;
    }
  }
}
</style>
