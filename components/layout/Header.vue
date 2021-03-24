<template>
  <header>
    <NavBar />
  </header>
</template>

<script>
import NavBar from "@/components/elements/NavBar"
import { GET_HEADER_DATA } from "@/store"

export default {
  created() {
    this.$store.dispatch(GET_HEADER_DATA)
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 115px;
  border-bottom: 1px solid $disableColor;
}
</style>
