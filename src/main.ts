import { createApp } from "vue";
import "./assets/index.css";
import App from "./App.vue";
import router from "./router";
import component from "./components/index";
import i18n from '@/locales/index';

const app = createApp(App);
app.use(router);
app.use(component);
app.use(i18n);
app.mount("#app");
