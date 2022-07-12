<template>
  <router-view>
    <main>
      <ProposedBooksList></ProposedBooksList>
    </main>
  </router-view>
</template>

<script>
import ProposedBooksList from "./components/ProposedBooksList.vue";

export default {
  components: {
    ProposedBooksList,
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
