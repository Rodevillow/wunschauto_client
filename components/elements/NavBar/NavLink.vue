<template>
  <li class="nav-item d-flex align-items-center">
    <a class="nav-link" aria-current="page" href="#">
      <slot />
    </a>
  </li>
</template>

<style lang="scss" scoped>
.nav {
  &-item {
    font-family: Open Sans, sans-serif;
    font-size: 1.0625rem;
    font-weight: 400;
    text-transform: uppercase;

    padding-left: 25px;
    padding-right: 25px;
  }
  &-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;

    color: $navLinkColor;

    &:hover {
      color: $textColor;
    }
  }
}
</style>
