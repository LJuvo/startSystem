import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import _ from "lodash";

import axios from "axios";
// 打开 main.js
import Bmob from "hydrogen-js-sdk";
import iView from "iview";
import iEditor from "iview-editor";
import "iview/dist/styles/iview.css";
import "iview-editor/dist/iview-editor.css";

// Bmob.debug(true);
Bmob.initialize("4509c12b05a95f1c", "taisha");

import { HyzFTable, HyzBTable } from "@/components/hyzTable";

Vue.use(HyzFTable);
Vue.use(HyzBTable);

Vue.prototype._ = _;
// 挂载到全局使用
Vue.prototype.Bmob = Bmob;

Vue.use(iView);
Vue.use(iEditor);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#startS");
