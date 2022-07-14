<template>
  <div class="proposed-books-info-container">
    <MainHeader></MainHeader>
    <h2 class="proposed-books-info__title">Proposed books</h2>
    <span class="proposed-books-info__description text-m"
      >Find here the list with all proposed books
    </span>
  </div>
  <div class="proposed-books-list">
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
.proposed-books-info-container {
  height: 100%;
  padding: 1.6rem 1.6rem 0 1.6rem;
  position: sticky;
  top: 0;
  z-index: 2;
  background: linear-gradient(159.39deg, #1b0e45 -92.04%, #7258d7 106.82%);
  /* background: inherit; */
}

.proposed-books-info__title {
  color: var(--white);
}
.proposed-books-info__description {
  display: inline-block;
  margin-top: 0.6rem;
  margin-bottom: 2.4rem;
  color: var(--white);
}
.proposed-books-list {
  padding: 0 1.6rem 1.6rem 1.6rem;
}
</style>
