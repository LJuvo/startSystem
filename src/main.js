import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import axios from "axios";

import BaseButton from "@/components/button";

const AmyUI = {
  "amy-btn": BaseButton,
};

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Object.keys(AmyUI).forEach((key) => {
  Vue.component(key, AmyUI[key]);
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#startS");
