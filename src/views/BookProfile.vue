<template>
  <MainHeader class="mx-6 main-header" :class="stickyHeight"></MainHeader>
  <main>
    <article class="book-profile mx-6">
      <v-icon name="bi-book" scale="3" class="book-icon" />
      <h2 class="book-profile__title">{{ book.title }}</h2>
      <p class="book-profile__author text-l font-medium">{{ book.author }}</p>
      <button-bc class="buy-btn" variant="secondary">
        <a
          :href="bookUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold buy-btn__url"
        >
          Where to buy?
        </a>
      </button-bc>
      <div class="book-synopsis">
        <p class="book-synopsis__title text-xl font-semibold">Synopsis</p>
        <p class="book-synopsis__info text-m">{{ book.synopsis }}</p>
      </div>
      <p class="book-profile__participants text-s">
        {{ book.participants }} Interested
      </p>
      <button-bc
        class="vote-btn font-medium"
        variant="secondary"
        @click="addVote"
        :class="{ 'user-vote': userVote }"
      >
        <span v-if="!userVote">
          Vote<v-icon name="hi-solid-plus" scale="0.8" class="icon" />
        </span>
        <span v-else>
          Voted<v-icon name="hi-solid-check" scale="0.8" class="icon" />
        </span>
      </button-bc>
      <p class="book-profile__info text-s font-normal">
        tap the "vote" button to be part of our club once it has five or more
        interested readers
      </p>
    </article>
  </main>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import ButtonBC from "../components/ui-components/ButtonComponent.vue";

export default {
  name: "BookProfile",
  components: {
    MainHeader,
    "button-bc": ButtonBC,
  },
  data() {
    return {
      userVote: false,
      bookUrl: this.book.url,
    };
  },
  props: ["book"],
  created() {
    console.log(this.book);
  },
  methods: {
    addVote() {
      // if (this.userVote == false) {
      //   console.log("now i'm true");
      //   const addParticipant = this.book.participants + 1;
      //   console.log(addParticipant);
      //   this.userVote = true;
      // } else {
      //   console.log("now i'm false");
      //   const currentParticipants = this.book.participants;
      //   console.log(currentParticipants);
      //   this.userVote = false;
      // }
    },
  },
};
</script>

<style scoped>
.main-header {
  position: sticky;
  top: 0;
  z-index: 1;
  background: linear-gradient(
    to right bottom,
    #45328c,
    #483591,
    #4b3797,
    #4f3a9c,
    #523da2
  );
}
main {
  margin: 0 auto;
}
.book-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60rem;
  min-height: 64.5rem;
  max-height: 80rem;
  margin-top: 0.4rem;
  margin-bottom: 2rem;
  padding: 3rem;
  background: var(--white);
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
}

.book-icon {
  margin-bottom: 1.2rem;
}

.book-profile__author {
  margin-bottom: 0.8rem;
  color: var(--medium-gray);
}

.buy-btn {
  margin-bottom: 2.4rem;
  padding-inline: 0.8rem;
  height: 3.2rem;
}

.buy-btn__url {
  font-size: 1.4rem;
  text-decoration: none;
  color: var(--accent-color);
}
.book-synopsis {
  max-width: 40rem;
  min-height: 18.2rem;
  margin-bottom: 1.4rem;
  padding: 1.6rem;
  border: 0.2rem solid var(--primary-color);
  border-radius: 0.8rem;
}

.book-synopsis__title {
  margin-bottom: 1.6rem;
  color: var(--primary-color);
}

.book-profile__participants {
  margin-bottom: 0.8rem;
}

.vote-btn {
  margin-bottom: 1.6rem;
}

.book-profile__info {
  font-family: var(--secondary-font);
  text-align: center;
}
</style>
