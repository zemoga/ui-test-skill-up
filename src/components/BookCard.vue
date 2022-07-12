<template>
  <div class="book">
    <div class="book__info">
      <h3 class="book__info--title line-clamp">
        {{ book.title }}
      </h3>
      <h4 class="book__info--author line-clamp">{{ book.author }}</h4>
    </div>
    <div class="book__participants">
      <p class="book__participants--text">5 interested</p>
      <button-bc></button-bc>
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
.book {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  width: 24.7rem;
  min-height: 18.3rem;
  padding: 2.1rem 1.6rem 1.4rem 2rem;
  background: #fff;
  border: 2px solid grey;
  border-radius: 0.8rem;
}

.book__info--title {
  font-family: sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  text-transform: uppercase;
  text-overflow: ellipsis;
}

.book__info--author {
  font-family: sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  text-transform: uppercase;
  text-overflow: ellipsis;
}

.book__participants {
  align-self: flex-end;
}

.book__participants--text {
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
  width: 31.3rem;
}
</style>
