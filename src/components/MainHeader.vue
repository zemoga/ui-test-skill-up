<template>
  <header class="header-container my-7">
    <ButtonBC class="mx-5" variant="arrow" @click="goBack" v-if="displayBtn">
      <v-icon name="oi-arrow-left" scale="2" fill="white" />
    </ButtonBC>
    <img
      class="header__logo"
      src="./icons/media-monks-logo-desktop.svg"
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
  props: {
    displayBtn: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
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
  justify-self: left;
  width: 18.1rem;
}

@media (min-width: 768px) {
  .header__logo {
    width: 24.8rem;
  }
}
</style>
