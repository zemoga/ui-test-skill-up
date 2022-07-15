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
  padding: 1rem 1.5rem;
}
</style>
