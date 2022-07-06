<script setup>
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <main>
    <HomeView></HomeView>
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
