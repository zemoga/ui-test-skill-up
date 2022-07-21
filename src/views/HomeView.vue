<template>
  <MainHeader :displayBtn="displayBtn"></MainHeader>
  <main>
    <section class="container proposed-books">
      <BooksList></BooksList>
    </section>
    <section class="container proposed-books">
      <BooksList :displayProposeBtn="displayProposeBtn"></BooksList>
    </section>
  </main>
</template>

<script>
import BooksList from "@/components/BooksList.vue";
import MainHeader from "../components/MainHeader.vue";

export default {
  name: "HomeView",
  components: {
    BooksList,
    MainHeader,
  },
  data() {
    return {
      displayBtn: false,
      displayProposeBtn: false,
    };
  },
  provide: {
    proposed: true,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
}

@media (min-width: 768px) {
  .container {
    padding: 1.8rem 3.3rem;
  }
}
</style>
