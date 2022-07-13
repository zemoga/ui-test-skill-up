<template>
  <header class="header-container my-7">
    <ButtonBC class="mx-5" variant="rounded" @click="this.$router.go(-1)">
      <v-icon name="oi-arrow-left" scale="2" fill="white" />
    </ButtonBC>
    <img
      class="header__logo"
      src="./icons/media-monk-logo-mobile.svg"
      alt="Media Monks logo"
    />
  </header>
</template>

<script>
import ButtonBC from "../components/ui-components/ButtonComponent.vue";

export default {
  name: "MainHeader",
  components: {
    ButtonBC,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.header-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  height: 6rem;
}

.header__logo {
  grid-column: 2 / 3;
  justify-self: center;
}
</style>
