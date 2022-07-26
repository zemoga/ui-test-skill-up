<template>
  <h2 class="title"><slot name="title"></slot></h2>
  <p class="info text-m font-normal"><slot name="description"></slot></p>
  <div class="carousel my-5">
    <BookCard
      v-for="book in topBooks"
      :key="book.id"
      :book="book"
      :isReader="reader"
    ></BookCard>
  </div>
  <div class="btns-container">
    <button-bc class="font-bold" @click="showAllBooks"></button-bc>
    <button-bc
      class="font-bold propose-btn"
      variant="tertiary"
      @click="proposeBook"
      v-if="displayProposeBtn"
    >
      Propose a book<v-icon
        name="hi-solid-arrow-narrow-right"
        class="arrow-right-icon"
      />
    </button-bc>
  </div>
</template>

<script>
import BookCard from "./BookCard.vue";
import ButtonBC from "./ui-components/ButtonComponent.vue";

export default {
  name: "ProposedBooksList",
  components: {
    BookCard,
    "button-bc": ButtonBC,
  },

  props: {
    displayProposeBtn: {
      type: Boolean,
      default: true,
    },
    reader: {
      type: Boolean,
      required: true,
    },
    books: {
      type: Array,
      required: true,
    },
  },
  methods: {
    showAllBooks() {
      if (this.reader) {
        //Pending to change router when the active clubs list view is done
        this.$router.push("propose-book-form");
      } else {
        this.$router.push("proposed-books-list");
      };
    },
    proposeBook() {
      this.$router.push("propose-book-form");
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

@media (min-width: 1024px) {
  .title {
    font-size: 3.6rem;
    margin-bottom: 1.5rem;
  }

  .info {
    font-size: 1.8rem;
    line-height: 2.2rem;
  }

  .carousel {
    gap: 2.4rem;
    height: 19rem;
    margin-block: 2.4rem;
  }
}

@media (min-width: 1440px) {
  .btns-container {
    position: absolute;
    top: 4rem;
    right: 3.3rem;
  }

  .propose-btn {
    margin-left: 2.4rem;
  }
}
</style>
