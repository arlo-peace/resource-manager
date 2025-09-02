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
import App from './App.vue'
import router from "./router/index";

const app =createApp(App).use(router);
app.use(createBootstrap());
app.mount('#app');