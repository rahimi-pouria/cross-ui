import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import '@/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import * as BootstrapVueNext from 'bootstrap-vue-next'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

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
app.use(BootstrapVueNext)
app.mount("#app");
