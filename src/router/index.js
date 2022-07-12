import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProposeBookForm from "../views/ProposeBookForm.vue";
import ProposedBooksList from "../views/ProposedBooksList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/propose-book-form",
      name: "proposeBookForm",
      component: ProposeBookForm,
    },
    {
      path: "/proposed-books-list",
      name: "ProposedBooksList",
      component: ProposedBooksList,
    },
  ],
});

export default router;
