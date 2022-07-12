import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiArrowLeft,
  HiSolidArrowNarrowRight,
  HiCheck,
  IoSearch,
  BiBook,
  HiSolidPlus,
} from "oh-vue-icons/icons";

addIcons(
  BiArrowLeft,
  HiSolidArrowNarrowRight,
  HiSolidPlus,
  HiCheck,
  IoSearch,
  BiBook
);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
