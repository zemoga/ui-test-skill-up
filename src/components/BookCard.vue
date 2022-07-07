<template>
  <div class="book">
    <h3 class="book__title line-clamp">
      {{ book.title }}
    </h3>
    <h4 class="book__author line-clamp">{{ book.author }}</h4>
    <p class="book__members">5 interested</p>
    <!--This is where the ButtonComponent will go-->
    <button class="btncomponent">Vote +</button>
  </div>
</template>

<script>
export default {
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
  display: grid;
  grid-template-columns: repeat(4, minmax(1rem, 1fr));
  grid-template-rows: repeat(4, minmax(1rem, 1fr));
  grid-template-areas:
    "title title title title"
    "author author author author"
    ". . members members"
    ". . btn btn";
  flex-shrink: 0;
  width: 24.7rem;
  min-height: 18.3rem;
  padding: 2.1rem 1.6rem 1.4rem 2rem;
  background: #fff;
  border: 2px solid grey;
  border-radius: 0.8rem;
}

.book__title {
  grid-area: title;
  align-self: end;
  font-family: sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  text-transform: uppercase;
  text-overflow: ellipsis;
}

.book__author {
  grid-area: author;
  font-family: sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  text-transform: uppercase;
}

.book__members {
  grid-area: members;
  justify-self: center;
  align-self: end;
  margin-bottom: 0.2rem;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.btncomponent {
  grid-area: btn;
}
</style>
