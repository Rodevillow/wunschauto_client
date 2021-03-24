<template>
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="#">
        <Logo />
      </a>
      <NavLinks />
    </div>
  </nav>
</template>

<script>
import Logo from "@/components/ui/icons/Logo"
import NavLinks from "@/components/elements/NavBar/NavLinks"

export default {
  components: {
    Logo,
    NavLinks
  },
};
</script>

<style lang="scss" scoped>
  .navbar {
    height: 100%;
    padding: 0 7% 3px;
  }
</style>