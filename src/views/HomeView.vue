<template>
  <MainHeader :displayBtn="displayBtn"></MainHeader>
  <main>
    <section class="container proposed-books">
      <ProposedBooksList></ProposedBooksList>
    </section>
  </main>
</template>

<script>
import ProposedBooksList from "@/components/ProposedBooksList.vue";
import MainHeader from "../components/MainHeader.vue";

export default {
  name: "HomeView",
  components: {
    ProposedBooksList,
    MainHeader,
  },
  data() {
    return {
      displayBtn: false,
    };
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}

.proposed-books {
  padding: 1rem 0 1rem 1.5rem;
}
</style>
