import { createApp } from "vue";
<<<<<<< HEAD
=======
import { createPinia } from "pinia";

>>>>>>> 3515ee8 (Add Vitest for unit testing and Pinia for state management)
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

<<<<<<< HEAD
=======
app.use(createPinia());
>>>>>>> 3515ee8 (Add Vitest for unit testing and Pinia for state management)
app.use(router);

app.mount("#app");
