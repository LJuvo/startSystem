import Vue from "vue";
// import App from './App.vue'
import Say from "./Say.vue";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router";

import axios from "axios";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  store,
  router,
  render: (h) => h(Say),
}).$mount("#startS");
