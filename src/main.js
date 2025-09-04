// import './assets/main.css'
import "bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "./assets/css/remixicon.css";
import "./assets/css/sidebar-menu.css";
import "./assets/css/simplebar.css";
import "./assets/scss/style.css";

import { createBootstrap } from "bootstrap-vue-next";
import { createApp } from 'vue'
import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'
import router from "./router/index";
import i18n from "./i18n/i18n"

const app =createApp(App).use(router);
app.use(i18n);
app.use(VueApexCharts);
app.use(createBootstrap());
app.mount('#app');