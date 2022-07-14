<template>
  <div class="proposed-books-list-container">
    <MainHeader></MainHeader>
    <h2 class="proposed-books-list__title">Proposed books</h2>
    <span class="proposed-books-list__description text-m"
      >Find here the list with all proposed books
    </span>
    <BookCard
      v-for="(book, id) in booksInfoSorted"
      :key="id"
      :book="book"
      class="extended"
    ></BookCard>
  </div>
</template>

<script>
import fakeBooks from "../assets/data.json";
import MainHeader from "../components/MainHeader.vue";
import BookCard from "../components/BookCard.vue";

export default {
  name: "ProposedBooksListExtended",
  components: {
    MainHeader,
    BookCard,
  },
  data() {
    return {
      booksInfo: fakeBooks,
    };
  },
  computed: {
    booksInfoSorted() {
      const booksCopy = [...this.booksInfo];
      return booksCopy.sort(function (a, b) {
        return b.participants - a.participants;
      });
    },
  },
};
</script>

<style scoped>
.proposed-books-list-container {
  padding: 1.6rem;
  height: 100vh;
}

.proposed-books-list__title {
  color: var(--white);
}
.proposed-books-list__description {
  display: inline-block;
  margin-top: 0.6rem;
  margin-bottom: 2.4rem;
  color: var(--white);
}
</style>
