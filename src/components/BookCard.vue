<template>
  <div class="book-card px-5 py-5">
    <div class="book-card__info">
      <p
        class="book-card__info--title line-clamp text-m font-semibold uppercase"
      >
        {{ book.title }}
      </p>
      <h4 class="book-card__info--author line-clamp font-normal uppercase">
        {{ book.author }}
      </h4>
    </div>
    <div class="book-card__footer">
      <v-icon name="bi-book" scale="3" class="book-icon" />
      <div class="book-card__participants">
        <p class="book-card__participants--text text-s uppercase">
          {{ book.participants }} interested
        </p>
        <button-bc class="font-medium vote-btn" variant="secondary">
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
  background: var(--white);
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
}

.book-card__info--title {
  margin-bottom: 0.4rem;
}

.book-card__info--author {
  font-size: 1.5rem;
  line-height: 1.8rem;
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
  margin-bottom: 0.5rem;
  text-align: center;
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
    padding: 1.8rem;
  }

  .vote-btn {
    width: 10.8rem;
    padding-inline: 2rem;
  }
}
</style>
