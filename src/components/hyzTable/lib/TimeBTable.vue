<template>
  <div class="timetable" id="timepane">
    <div v-if="verColumns.length<1">
      <div class="timetable-none">暂无数据</div>
    </div>
    <div v-else :class="{ 'timetable-pane': true, 'timetable-dark': theme }">
      <table style="min-width:100%">
        <thead>
          <tr class="timetable-title">
            <th class="timetable-title-item">
              <div class="timetable-title-item-cell" :style="{width:titleWidth+'px'}">{{ title }}</div>
            </th>
            <th
              class="timetable-title-item"
              v-for="(item, key) in columns"
              :key="key"
              :style="{width:cellWidth}"
            >
              <div :style="{width:cellWidth}">{{ item }}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in FArr" :key="index">
            <td class="timetable-title-item" @click="$emit('on-row',item)">
              <div
                class="timetable-title-item-cell"
                :style="{width:titleWidth+'px',cursor:'pointer'}"
              >{{ item[cellTitle] }}</div>
            </td>
            <td
              v-for="(ite, i) in item[verKey]"
              :key="i"
              :class="{
            'timetable-info-item': true,
            'timetable-info-item-hover': horizontalIndex===index||verticalIndex===i,
            'timetable-info-item-active': horizontalIndex===index&&verticalIndex===i
          }"
              @mouseover="onMouseOver(index, i)"
              @mouseleave="onMouseLeave(index, i)"
              @click="onTableClick(item,ite.time)"
            >
              <div class="timetable-info-item-cell" :style="{width:cellWidth}">{{ ite.value }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="timetable-page" v-show="showPage">
      <Page
        :total="pageTotal"
        show-total
        show-sizer
        show-elevator
        :current="pageIndex"
        :page-size="pageSize"
        @on-change="onPageChange"
        @on-page-size-change="onPageSizeChange"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "公司时段"
    },
    //子元素标题
    cellTitle: {
      type: String,
      default: "organizationName"
    },
    titleWidth: {
      type: [Number],
      default: 140
    },
    pageData: {
      type: Object,
      default: () => {}
    },
    //是否呈现分页,不呈现分页时可直接作为无分页组件使用
    showPage: {
      type: Boolean,
      default: true
    },
    verKey: {
      type: String,
      default: "dataList"
    }
  },
  data() {
    return {
      columns: [],
      verColumns: [],
      theme: this.$ls.get("THEME") === "dark",
      FArr: [],
      pageIndex: 1,
      pageSize: 10,
      pageTotal: 0,

      horizontalIndex: "",
      verticalIndex: ""
    };
  },
  computed: {
    cellWidth() {
      let pW = document.getElementById("timepane").offsetWidth;
      let length = _.get(this.verColumns, "[0][" + this.verKey + "]", [])
        .length;
      let cellAW =
        parseInt((pW - this.titleWidth) / (length > 10 ? 10 : length)) + "px";

      return cellAW;
    }
  },
  watch: {
    verColumns(v) {
      this.FArr = v;
    },
    pageData(v) {
      this.pageIndex = v.current;
      this.pageSize = v.pageSize;
      this.pageTotal = v.total;
    }
  },
  mounted() {},
  methods: {
    onFetchTable() {},
    onMouseOver(horizontal, vertical) {
      this.horizontalIndex = horizontal;
      this.verticalIndex = vertical;
    },
    onMouseLeave(horizontal, vertical) {
      this.horizontalIndex = "";
      this.verticalIndex = "";
    },

    initTable(columns, arr) {
      this.columns = columns;
      this.verColumns = arr;
    },
    onTableClick(v, time) {
      this.$emit("on-table-click", v, time);
    },

    onPageChange(v) {
      this.pageIndex = v;
      this.$emit("on-page-index", v);
    },
    onPageSizeChange(v) {
      this.pageSize = v;
      this.$emit("on-page-size", v);
    }
  }
};
</script>
<style lang="less" scoped>
.timetable {
  width: 100%;
  &-pane {
    width: 100%;
    overflow: auto;
  }
  &-none {
    margin: 30px auto;
    text-align: center;
  }
  &-title {
    &-item {
      text-align: center;
      padding: 4px 5px;
      background: #f8f8f9;
      &-cell {
        margin: 0;
        width: 100%;
        text-align: center;
      }
    }
  }
  &-info {
    &-item {
      text-align: center;
      cursor: pointer;
      &-hover {
        background: rgba(12, 186, 189, 0.6);
        color: #ffffff;
      }
      &-active {
        background: #0cbabd;
        color: #ffffff;
      }
      &-cell {
        margin: 0;
        width: 100%;
        text-align: center;
      }
    }
  }
  &-page {
    margin-top: 10px;
    text-align: right;
  }

  table,
  table tr th,
  table tr td {
    border: 1px solid #e9eaec;
  }
  table tr th {
    text-align: center;
  }
  table {
    min-height: 25px;
    text-align: center;
    border-collapse: collapse;
    padding: 2px;
  }

  &-dark {
    table,
    table tr th,
    table tr td {
      border-color: #444;
    }

    .timetable {
      &-title {
        &-item {
          background: #0cbabd;
        }
      }
    }
  }
}
</style>
