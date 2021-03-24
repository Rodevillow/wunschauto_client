<template>
  <button class="btn"><slot /></button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 60px;
  background-color: $btnInfoColor;
  padding: 18px 60px;
  font-size: 1.125rem;
  color: $textColor;
  letter-spacing: 0.6px;

  &:hover {
    transition: $transition;
    color: $textColor;
    background-color: $btnInfoHoverColor;
  }
}
</style>
