import HyzFTable from "./lib/FTable.vue";
import HyzBTable from "./lib/BTable.vue";

HyzFTable.install = function(Vue) {
  Vue.component(HyzFTable.name, HyzFTable);
};

HyzBTable.install = function(Vue) {
  Vue.component(HyzBTable.name, HyzBTable);
};

export { HyzFTable, HyzBTable };
