<template>
  <MainHeader :displayBtn="displayBtn"></MainHeader>
  <main>
    <section class="container proposed-books">
      <BooksList :reader="false" :books="proposedBooks">
        <template v-slot:title>Proposed books</template>
        <template v-slot:description
          >Vote for the books you want to read
        </template>
      </BooksList>
    </section>

    <section class="container active-clubs">
      <BooksList :displayProposeBtn="false" :reader="true" :books="activeBooks">
        <template v-slot:title>Active clubs</template>
        <template v-slot:description
          >Find active book clubs and their members
        </template>
      </BooksList>
    </section>
  </main>
</template>

<script>
import BooksList from "@/components/BooksList.vue";
import MainHeader from "../components/MainHeader.vue";
import fakeBooks from "../assets/data.json";
import activeClubs from "../assets/activeData.json";

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
      proposedBooks: fakeBooks,
      activeBooks: activeClubs,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
}
.active-clubs {
  margin-top: 0.4rem;
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
