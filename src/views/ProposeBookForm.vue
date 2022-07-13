<template>
  <MainHeader class="main-header"></MainHeader>

  <main>
    <div class="propose-book-container">
      <div class="propose-book-info-container">
        <h2 class="propose-book__title">Book's information</h2>
        <span class="propose-book__description text-m my-1"
          >Fill this form to propose your book
        </span>
      </div>

      <form @submit="submitForm" class="form-container">
        <FormLabel id="title">
          <template v-slot:labelDescription>Title</template>
          <template v-slot:labelInput>
            <input
              type="text"
              id="title"
              placeholder="Type book's title"
              maxlength="150"
              required
              class="label__input label__input--caps"
              v-model="title"
            />
          </template>
        </FormLabel>

        <FormLabel id="author">
          <template v-slot:labelDescription>Author</template>
          <template v-slot:labelInput>
            <input
              type="text"
              id="author"
              placeholder="Type author's full name"
              maxlength="100"
              required
              class="label__input label__input--caps"
              v-model="author"
            />
          </template>
        </FormLabel>

        <FormLabel id="link">
          <template v-slot:labelDescription>Link</template>
          <template v-slot:labelInput>
            <input
              type="url"
              id="link"
              placeholder="Where can we buy this book?"
              maxlength="300"
              required
              class="label__input"
              v-model="link"
            />
          </template>
        </FormLabel>

        <FormLabel id="synopsis">
          <template v-slot:labelDescription>Synopsis</template>
          <template v-slot:labelInput>
            <textarea
              type="text"
              id="synopsis"
              placeholder="Write a short synopsis about this book... &#10;What does make it interesting? &#10;&#10;&#10;500 characters max."
              maxlength="500"
              required
              class="label__input label__input--extended"
              v-model="synopsis"
            ></textarea>
          </template>
        </FormLabel>

        <ButtonBC
          type="submit"
          :disabled="buttonDisable"
          variant="primary"
          class="submit-button"
        >
          Let's propose this book!
          <v-icon name="hi-solid-arrow-narrow-right" class="icon-arrow-right" />
        </ButtonBC>

        <div class="propose-book__final--note">
          <p class="text-xs">
            Remember! you can only propose one book each month
          </p>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import FormLabel from "../components/FormLabel.vue";
import MainHeader from "../components/MainHeader.vue";
import ButtonBC from "../components/ui-components/ButtonComponent.vue";

export default {
  name: "ProposeBookForm",
  components: {
    FormLabel,
    MainHeader,
    ButtonBC,
  },

  data() {
    return {
      title: "",
      author: "",
      link: "",
      synopsis: "",
    };
  },
  computed: {
    titleUpperCase() {
      return this.title.toUpperCase();
    },
    authorUpperCase() {
      return this.author.toUpperCase();
    },
    buttonDisable() {
      return !(this.title && this.author && this.link && this.synopsis);
    },
  },
  methods: {
    submitForm() {
      console.log("Submitted!");
    },
  },
};
</script>

<style scoped>
.main-header {
  padding: 1.7rem 1.7rem 0 1.7rem;
}
main {
  padding: 0 1.7rem 1.7rem 1.7rem;
}
.propose-book-container {
  min-height: 75vh;
  padding: 1.4rem;
  border-radius: 8px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.propose-book-info-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.propose-book__final--note {
  width: 70%;
  text-align: center;
  margin-top: 1.6rem;
}
.submit-button {
  margin-top: 4rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
.icon-arrow-right {
  margin-left: 1rem;
}
</style>

box-shadow:
