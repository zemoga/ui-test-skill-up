<template>
  <main>
    <HomeView></HomeView>
  </main>
</template>

<script>
import HomeView from "./views/HomeView.vue";

export default {
  components: {
    HomeView,
  },
};
</script>

<style>
@import "./assets/base.css";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
