<script setup>
import fakeBooks from "../assets/data.json";
import ButtonComponent from "./ui-components/ButtonComponent.vue";
import BookCard from "./BookCard.vue";
</script>

<template>
  <h2 class="title">Proposed books</h2>
  <p class="info">Proposed books for this month</p>
  <div class="carousel">
    <BookCard v-for="book in books" :key="book.id" :book="book"></BookCard>
  </div>
  <div class="btns-container">
    <ButtonComponent></ButtonComponent>
    <ButtonComponent></ButtonComponent>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: fakeBooks,
    };
  },
};
</script>

<style>
.carousel {
  display: flex;
  gap: 1.3rem;
  width: 100%;
  height: 18.3rem;
  margin: 1.7rem 0 2rem;
  overflow-x: scroll;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.test {
  flex-shrink: 0;
  width: 24.7rem;
  height: 18.3rem;
  background-color: aquamarine;
}
</style>
