<template>
  <div class="header-container">
    <ButtonComponent variant="rounded" @click="this.$router.go(-1)"
      ><img src="./icons/arrow-left.svg" alt="←"
    /></ButtonComponent>
    <img
      class="header__logo"
      src="../images/mediamonks.png"
      alt="Media Monks logo"
    />
  </div>
</template>

<script>
import ButtonComponent from "../components/ui-components/ButtonComponent.vue";

export default {
  name: "MainHeader",
  components: {
    ButtonComponent,
  },
};
</script>
<style scoped>
.header-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  margin-bottom: 2.4rem;
}

.header__logo {
  width: 145px;
  height: 40px;
}
</style>
