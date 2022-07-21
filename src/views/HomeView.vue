<template>
  <MainHeader :displayBtn="displayBtn"></MainHeader>
  <main>
    <section class="container proposed-books">
      <BooksList></BooksList>
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
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.proposed-books {
  padding: 1rem 1.5rem;
}

@media (min-width: 768px) {
  .container {
    align-content: center;
  }
  .proposed-books {
    padding: 1.8rem 3.3rem;
  }
}

@media (min-width: 1500px) {
  main {
    margin: 0 auto;
  }
  .container {
    max-width: 151.5rem;
  }
}
</style>
