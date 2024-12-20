import { createApp } from "vue";
import "./assets/index.css";
import App from "./App.vue";
import router from "./router";
import component from "./components/index";
import i18n from "@/locales/index";
import "virtual:svg-icons-register";
import { createPinia } from "pinia";
// import VueDatePicker from "@vuepic/vue-datepicker";
// import "@vuepic/vue-datepicker/dist/main.css";

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(component);
// app.use(VueDatePicker);
app.use(i18n);
app.use(pinia);
app.mount("#app");
