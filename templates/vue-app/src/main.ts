import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style.css'


import en from "./locales/en.json";
import fa from "./locales/fa.json";

const messages = { en, fa };
const pinia = createPinia();

const i18n = createI18n({
    legacy: false,
    locale: "fa",
    fallbackLocale: "en",
    messages,
});

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(i18n);
app.use(ElementPlus)
app.mount("#app");
