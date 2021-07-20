import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import axios from "axios";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import BaseButton from "@/components/button";
import Bmob from "hydrogen-js-sdk";

import _ from "lodash";

// 初始化 SDK版本 2.0.0 以下保留之前的初始化方法
Bmob.initialize("4509c12b05a95f1c", "taisha");

// 挂载到全局使用
Vue.prototype.Bmob = Bmob;
Vue.prototype._ = _;
Vue.use(Antd);

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
