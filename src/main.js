import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router";
import _ from "lodash";

import axios from "axios";
Vue.prototype.$axios = axios;
Vue.prototype._ = _;

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#startS");
