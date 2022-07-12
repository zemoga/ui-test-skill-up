<template>
  <div class="proposed-books-list-container">
    <MainHeader></MainHeader>
    <h2 class="proposed-books-list__title">All proposed books</h2>
    <span class="proposed-books-list__description text-m"
      >Find here the list with all proposed book's
    </span>
    <BookCard
      v-for="(book, id) in booksInfo"
      :key="id"
      :book="book"
      class="extended"
    ></BookCard>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import BookCard from "../components/BookCard.vue";

export default {
  name: "ProposedBooksList",
  components: {
    MainHeader,
    BookCard,
  },
  data() {
    return {
      booksInfo: [
        {
          title: "El principito",
          author: "Antoine Marie Jean-Baptiste",
          votes: 4,
        },
        {
          title: "El principito",
          author: "Antoine Marie Jean-Baptiste",
          votes: 3,
        },
        {
          title: "El principito",
          author: "Antoine Marie Jean-Baptiste",
          votes: 2,
        },
        {
          title: "El principito",
          author: "Antoine Marie Jean-Baptiste",
          votes: 1,
        },
      ],
    };
  },
};
</script>

<style scoped>
.proposed-books-list-container {
  padding: 1.7rem;
  height: 100vh;
}
</style>
