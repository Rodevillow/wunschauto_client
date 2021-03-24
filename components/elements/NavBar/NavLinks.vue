<template>
  <ul class="align-items-center d-flex p-0 m-0">
    <NavLink v-for="link of this.$store.state.navLinks" :key="link.title">{{ link.title }}</NavLink>  
    <ButtonAccent>{{ this.$store.state.navButton }}</ButtonAccent>
  </ul>
</template>

<script>
import NavLink from "@/components/elements/NavBar/NavLink"
import ButtonAccent from "@/components/ui/buttons/ButtonAccent"

export default {
  components: {
    NavLink,
    ButtonAccent
  },
};
</script>
