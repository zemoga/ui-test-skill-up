<template>
  <section class="container proposed-books">
    <ProposedBooksList></ProposedBooksList>
  </section>
</template>

<script>
import ProposedBooksList from "@/components/ProposedBooksList.vue";

export default {
  name: "HomeView",
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
