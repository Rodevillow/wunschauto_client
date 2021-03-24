<template>
  <section class="home d-flex align-items-center justify-content-center">
    <div
      class="home_background"
      v-bind:style="{ 'background-image': 'url(' + this.$store.state.home.homeBGImage + ')' }"
    ></div>
    <div class="home_content text-center">
      <img :src="this.$store.state.home.homeImage" alt="">
      <H1 class="home_content__title">{{ this.$store.state.home.homeTitle }}</H1>
      <Paragraph class="home_content__subtitle">{{ this.$store.state.home.homeSubtitle }}</Paragraph>
      <div class="home_content__btns d-flex justify-content-center">
        <ButtonAccent>{{ this.$store.state.home.homeButton1 }}</ButtonAccent>
        <ButtonInfo>{{ this.$store.state.home.homeButton2 }}</ButtonInfo>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "@/components/ui/icons/Logo"
import ButtonAccent from "@/components/ui/buttons/ButtonAccent"
import ButtonInfo from "@/components/ui/buttons/ButtonInfo"
import H1 from "@/components/ui/text/H1"
import Paragraph from "@/components/ui/text/Paragraph"

import { HOME_NAMESPACE_PREFIX, GET_HOME_SECTION_DATA } from '@/store/home'

export default {
  created() {
    this.$store.dispatch(HOME_NAMESPACE_PREFIX + GET_HOME_SECTION_DATA)
  },
  components: {
    Logo,
    ButtonAccent,
    ButtonInfo,
    H1,
    Paragraph
  }
};
</script>

<style lang="scss" scoped>
.home {
  max-height: 800px;
  min-height: 600px;
  height: 100vh;

  &_background {
    position: absolute;
    z-index: -1;
    max-height: 800px;
    min-height: 600px;
    width: 100vw;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 2000px rgb(17 17 17 / 30%);
  }

  &_content {
    &__title {
      padding-top: 27px;
    }
    &__subtitle {
      color: $textColor;
    }
    &__btns {
      padding-top: 40px;
      button:first-child {
        margin-right: 30px;
      }
    }
  }
}
</style>
