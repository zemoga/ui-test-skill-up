<script setup>
import ProposedBooksList from "@/components/ProposedBooksList.vue";
</script>

<template>
  <router-view>
    <section class="container proposed-books">
      <ProposedBooksList></ProposedBooksList>
    </section>
  </router-view>
</template>

<script>
export default {
  name: "ProposedBooksList",
  components: {
    ProposedBooksList,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}

.proposed-books {
  padding: 1rem 0 1rem 1.6rem;
}
</style>
