<template>
  <div class="root">
    <Table
      ref="ftable"
      :height="tableHeight"
      border
      :data="data"
      :columns="columns"
      :size="size"
      :showHeader="showHeader"
      @on-row-click="onRowClick"
      @on-sort-change="onSortChange"
      @on-select="onSelect"
      @on-selection-change="onSelectionChange"
      @on-select-cancel="onSelectCancel"
      @on-row-dblclick="onRowDbClick"
      :highlight-row="highlightRow"
    />
    <div class="hyz-page">
      <Page
        :total="total"
        :current="page"
        :page-size="pageSize"
        show-sizer
        show-elevator
        show-total
        placement="top"
        :size="size"
        @on-change="changePage"
        :simple="simplePage"
        @on-page-size-change="pageSizeChange"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "HyzFTable",
  props: [
    "dataSource",
    "columns",
    "size",
    "highlightRow",
    "height",
    "simplePage",
    "showHeader",

  ],
  data() {
    return {
      page: 1,
      pageSize: 10
    };
  },
  computed: {
    data() {
      let { pageSize, dataSource } = this;
      if ((this.page - 1) * pageSize >= dataSource.length)
        this.page = Math.max(1, this.page - 1);

      const start = (this.page - 1) * pageSize;
      const end = Math.min(
        this.page * pageSize,
        dataSource ? dataSource.length : 0
      );
      let result = [];
      for (let i = start; i < end; i++) {
        result.push(dataSource[i]);
      }
      return result;
    },
    total() {
      return this.dataSource ? this.dataSource.length : 0;
    },
    tableHeight() {
      if (this.height) return this.height;

      if (this.data.length >= 10) {
        return window.innerHeight < 750 ? 450 : 521;
      } else {
        return "";
      }
    }
  },
  watch: {
    dataSource() {
      this.page = 1;
    }
  },
  methods: {
    changePage(v) {
      this.page = v;
      this.$emit("on-page-change", v);
    },
    onlyChangePage(v) {
      this.$nextTick(() => {
        this.page = v;
        this.$forceUpdate();
      });
    },
    pageSizeChange(v) {
      this.pageSize = v;
      this.$emit("on-page-size", v);
    },
    onRowClick(v) {
      this.$emit("on-row-click", v);
    },
    onSortChange(column, key, order) {
      this.$emit("on-sort-change", column, key, order);
    },
    onSelectionChange(...args) {
      this.$emit("on-selection-change", ...args);
    },    
    onSelectCancel(...args) {
      this.$emit("on-select-cancel", ...args);
    },    
    onSelect(...args) {
      this.$emit("on-select", ...args);
    },
    onRowDbClick(v) {
      this.$emit("on-row-dblclick", v);
    },
    onExportCsv(fileName, data, columns) {
      this.$refs.ftable.exportCsv({
        filename: fileName,
        original: false,
        columns: columns,
        data: data
      });
    },
    exportCsv(...args) {
      this.$refs.ftable.exportCsv(...args);
    },
    getPagingData(){
      let {page, pageSize}  = this;
      return {page, pageSize};
    }
  }
};
</script>
<style scoped>
.hyz-page {
  margin: 10px 0 0;
  display: flex;
  justify-content: flex-end;
}
</style>
