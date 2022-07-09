<template>
  <div class="header-container">
    <button @click="this.$router.go(-1)">←</button>
    <img src="../images/mediamonks.png" alt="Media Monks logo" />
  </div>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>
<style scoped>
.header-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
}
</style>
