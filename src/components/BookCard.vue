<template>
  <div class="book-card px-5 py-5">
    <div class="book-card__info">
      <p
        data-testid="title"
        class="book-card__info--title line-clamp text-xl font-semibold"
      >
        {{ book.title }}
      </p>
      <p class="book-card__info--author one-line-clamp text-l font-normal">
        {{ book.author }}
      </p>
    </div>
    <div class="book-card__footer">
      <v-icon name="bi-book" scale="3" class="book-icon" />
      <div class="book-card__participants">
        <p v-if="isReader" class="book-card__participants--text text-s">
          {{ book.participants }} Readers
        </p>
        <p v-else class="book-card__participants--text text-s">
          {{ book.participants }} Interested
        </p>
        <button-bc
          class="font-medium vote-btn"
          variant="secondary"
          @click="addVote"
          :class="{ 'user-vote': userVote }"
        >
          {{ textBtn }}
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
  data() {
    return {
      userVote: false,
    };
  },
  props: {
    book: {
      type: Object,
      required: true,
    },
    isReader: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    textBtn() {
      if (this.isReader && !this.userVote) {
        return "Join";
      } else if (!this.isReader && !this.userVote) {
        return "Vote";
      } else if (this.isReader && this.userVote) {
        return "Joined";
      } else {
        return "Voted";
      }
    },
  },
  methods: {
    addVote() {
      if (this.userVote == false) {
        console.log("now i'm true");
        const addParticipant = this.book.participants + 1;
        console.log(addParticipant);
        this.userVote = true;
      } else {
        console.log("now i'm false");
        const currentParticipants = this.book.participants;
        console.log(currentParticipants);
        this.userVote = false;
      }
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
  width: 27rem;
  min-height: 19rem;
  background: var(--white);
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
}

.book-card__info--title {
  margin-bottom: 0.4rem;
}

.book-card__info--author {
  color: var(--quaternary-color);
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

.user-vote {
  border: none;
  background: var(--accent-color);
  color: var(--white);
}

.icon {
  margin-left: 0.8rem;
}

@media (min-width: 768px) {
  .book-card {
    padding: 2.4rem;
  }

  .vote-btn {
    width: 10.8rem;
    padding-inline: 1.9rem;
  }
}
</style>
