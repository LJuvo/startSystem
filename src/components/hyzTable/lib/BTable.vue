<template>
  <div>
    <Table
      :height="tableHeight"
      :width="width"
      border
      :loading="loading"
      :data="data"
      :columns="columns"
      :row-class-name="useHand ? rowClassName : empty"
      @on-row-click="onRowClick"
      :highlight-row="highlightRow"
      :size="size"
      @on-selection-change="onSelectionChange"
      :stripe="stripe"
      @on-row-dblclick="onRowDbClick"
      @on-sort-change="onSortChange"
      ref="table"
    />
    <div class="hyz-page" v-if="!(simplePage && data.length > 10)">
      <PagePlus
        ref="page"
        :simple="simplePage"
        :total="pageData.total"
        :size="pageSize"
        :current="pageData.current"
        :page-size="pageData.pageSize"
        show-sizer
        show-elevator
        show-total
        placement="top"
        :custom-paging="customPaging"
        @on-change="currentChange"
        @on-page-size-change="pageSizeChange"/>
    </div>
  </div>
</template>

<script>
import PagePlus from "./PagePlus";
export default {
  name: "HyzBTable",
  components: {
    PagePlus,
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    simplePage: {
      type: Boolean,
      dafault: false
    },
    columns: {
      type: Array,
      default: () => []
    },
    stripe: {
      type: Boolean,
      dafault: false
    },
    pageData: Object,
    highlightRow: {
      type: Boolean,
      dafault: false
    },
    useHand: {
      type: Boolean,
      dafault: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: String,
    pageSize: Number,
    height: [Number, String],
    width: {
      type: [Number, String]
    },
    customPaging:{
      type: Boolean,
      default: false,
    }
  },
  computed: {
    tableHeight() {
      if (this.height) return this.height;

      if (this.data.length >= 10) {
        return window.innerHeight < 750 ? 450 : 521;
      } else {
        return "";
      }
    }
  },
  methods: {
    currentChange(v) {
      this.pageData.current = v;
      this.$emit("page-data-change");
    },
    pageSizeChange(v) {
      this.pageData.pageSize = v;
      this.$emit("page-data-change");
    },
    onSortChange(column, key, order) {
      this.$emit("on-sort-change", column, key, order);
    },
    onRowDbClick(v) {
      this.$emit("on-row-dblclick", v);
    },
    onRowClick(v) {
      this.$emit("on-row-click", v);
    },
    onSelectionChange(v) {
      this.$emit("on-selection-change", v);
    },
    rowClassName() {
      return "use-hand";
    },
    empty() {
      return "";
    },
    exportCsv(...args) {
      this.$refs.table.exportCsv(...args);
    }
  }
};
</script>
<style lang="less">
.hyz-page {
  margin: 10px 0 0;
  display: flex;
  justify-content: flex-end;
  user-select: none;
}
.hyz-page .ivu-select {
  position: relative;
}
.ivu-table .use-hand td {
  cursor: pointer;
}
</style>
