<template>
  <div class="book-card">
    <div class="book-card__info">
      <h3 class="book-card__info--title line-clamp">
        {{ book.title }}
      </h3>
      <h4 class="book-card__info--author line-clamp">{{ book.author }}</h4>
    </div>
    <div class="book-card__footer">
      <v-icon name="bi-book" scale="3" class="book-icon" />
      <div class="book-card__participants">
        <p class="book-card__participants--text">
          {{ book.participants }} interested
        </p>
        <button-bc class="font-medium vote-btn">
          Vote<v-icon
            name="hi-solid-plus"
            scale="0.8"
            animation="wrench"
            hover
            class="plus-icon"
          />
        </button-bc>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBC from "./ui-components/ButtonComponent.vue";

export default {
  name: "BookCard",
  components: {
    "button-bc": ButtonBC,
  },
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.book-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  width: 25.3rem;
  min-height: 18.3rem;
  padding: 2.1rem 1.6rem 1.4rem 2rem;
  background: #fff;
  border: 2px solid grey;
  border-radius: 0.8rem;
}

.book-card__info--title {
  font-family: sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  text-transform: uppercase;
  text-overflow: ellipsis;
}

.book-card__info--author {
  font-family: sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  text-transform: uppercase;
  text-overflow: ellipsis;
}

.book-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}

.book-icon {
  align-self: flex-end;
}

.book-card__participants--text {
  margin-bottom: 0.2rem;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Class with the extended width of each book card */
.extended {

  width: 100%;
  margin: 0 0 1.6rem 0;
}

.vote-btn {
  box-shadow: none;
}

.plus-icon {
  margin-left: 0.8rem;
}

@media (min-width: 768px) {
  .book-card {
    width: 34.3rem;
  }

  .vote-btn {
    width: 10.8rem;
  }
}
</style>
