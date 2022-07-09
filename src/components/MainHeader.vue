<template>
  <div class="header-container">
    <router-link :to="{ name: 'home' }"><button>←</button></router-link>
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
}
</style>
