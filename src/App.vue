<!-- <script setup>
import BookCard from "@/components/BookCard.vue";
import fakeBooks from "./assets/data.json";
</script>

<template>
  <main>
    <BookCard v-for="book in books" :key="book.id" :book="book"></BookCard>
  </main>
</template>

<script>
export default {
  components: {
    BookCard,
  },
  data() {
    return {
      books: fakeBooks,
    };
  },
};
</script>

<style>
@import "./assets/base.css";

main {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}
</style> -->
