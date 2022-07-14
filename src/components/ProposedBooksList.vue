<template>
  <h2 class="title">Proposed books</h2>
  <p class="info text-m font-normal">Vote for the books you want to read</p>
  <div class="carousel my-5">
    <BookCard v-for="book in topBooks" :key="book.id" :book="book"></BookCard>
  </div>
  <div class="btns-container">
    <button-bc class="font-bold" @click="showAllBooks"></button-bc>
    <button-bc class="font-bold propose-btn" variant="tertiary">
      Propose a book<v-icon
        name="hi-solid-arrow-narrow-right"
        class="arrow-right-icon"
      />
    </button-bc>
  </div>
</template>

<script>
import fakeBooks from "../assets/data.json";
import BookCard from "./BookCard.vue";
import ButtonBC from "./ui-components/ButtonComponent.vue";

export default {
  name: "ProposedBooksList",
  components: {
    BookCard,
    "button-bc": ButtonBC,
  },
  data() {
    return {
      books: fakeBooks,
    };
  },
  methods: {
    showAllBooks() {
      // this.$router.push("proposed-books-list");
    },
  },
  computed: {
    topBooks() {
      const booksCopy = [...this.books];
      const sortedBooks = booksCopy.sort((a, b) => {
        return b.participants - a.participants;
      });

      return sortedBooks.slice(0, 5);
    },
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 0.6rem;
  color: var(--white);
}

.info {
  color: var(--white);
}

.carousel {
  display: flex;
  gap: 1.6rem;
  width: 100%;
  height: 19rem;
  overflow-x: scroll;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.propose-btn {
  margin-left: 0.8rem;
}

.arrow-right-icon {
  margin-left: 0.8rem;
}
</style>
