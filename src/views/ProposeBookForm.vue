<template>
  <MainHeader></MainHeader>
  <div class="propose-book-container">
    <h2 class="propose-book__title">Book's information</h2>
    <span class="propose-book__description text-m"
      >Fill this form to propose your book
    </span>

    <form @submit="submitForm" class="form-container">
      <FormLabel id="title">
        <template v-slot:labelDescription>Title</template>
        <template v-slot:labelInput>
          <input
            type="text"
            id="title"
            placeholder="Type book's title"
            maxlength="150"
            minlength="2"
            required
            class="label__input label__input-caps"
            v-model="title"
          />
        </template>
      </FormLabel>

      <FormLabel id="author">
        <template v-slot:labelDescription>Athor</template>
        <template v-slot:labelInput>
          <input
            type="text"
            id="author"
            placeholder="Type author's full name"
            maxlength="100"
            minlength="2"
            required
            class="label__input label__input-caps"
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
            placeholder="Write a short synopsis about this book... &#10;&#10;500 characters max."
            maxlength="500"
            required
            class="label__input label__input-extended"
            v-model="synopsis"
          ></textarea>
        </template>
      </FormLabel>
      <button type="submit">Let's propose this book!</button>
    </form>
    <div class="propose-book__final-note">
      <p class="text-xs">Remember, you can only propose one book each month</p>
    </div>
  </div>
</template>

<script>
import FormLabel from "../components/FormLabel.vue";
import MainHeader from "../components/MainHeader.vue";

export default {
  name: "ProposeBookForm",
  components: {
    FormLabel,
    MainHeader,
  },
  data() {
    return {
      title: "",
      author: "",
      link: "",
      synopsis: "",
      submitted: "no",
    };
  },
  computed: {
    titleUpperCase() {
      return this.title.toUpperCase();
    },
    authorUpperCase() {
      return this.author.toUpperCase();
    },
  },
  methods: {
    submitForm() {
      this.submitted = "tessssss";
    },
  },
};
</script>

<style scoped>
.propose-book-container {
  margin: 2rem;
  padding: 1.6rem;
  border: solid 2px rgb(162, 160, 160);
  border-radius: 8px;
  background-color: rgb(214, 213, 213);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label__input-extended {
  height: 109px;
  text-transform: none;
  resize: none;
}
.propose-book__final-note {
  padding: 1rem 2.6rem;
  border: solid 2px rgb(162, 160, 160);
  border-radius: 8px;
  height: 54px;
  width: 84%;
  text-align: center;
  text-justify: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  background-color: white;
}
.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin-top: 1.5rem;
}
</style>
