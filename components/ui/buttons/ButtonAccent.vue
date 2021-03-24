<template>
  <button class="btn"><slot /></button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 60px;
  background: linear-gradient(90deg, #e50612, #730309);
  padding: 18px 60px;
  font-size: 1.125rem;
  color: $textColor;
  letter-spacing: 0.6px;
  transition: 1s;

  &:hover {
    transition: 1s;
    color: $textColor;
    background: linear-gradient(269deg, #e50612, #730309);
  }
}
</style>
