<template>
  <div class="a-flex-row-start">
    <div
      v-for="(item, index) in headerArr"
      :key="index"
      :class="{
        'base-tab-cell': true,
        'base-tab-cell-active': activeIndex === index,
      }"
      @click="checkHeadCell(index)"
    >
      {{ item.title }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    baseArr: {
      type: Array,
      default: () => {
        return [
          { title: "全部作品", url: "" },
          { title: "医疗行业", url: "" },
          { title: "通信行业", url: "" },
          { title: "交通行业", url: "" },
          { title: "航空行业", url: "" },
          { title: "金融行业", url: "" },
          { title: "市政行业", url: "" },
          { title: "警务行业", url: "" },
          { title: "电力行业", url: "" },
          { title: "其他行业", url: "" },
        ];
      },
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      headerArr: [],
    };
  },
  mounted() {
    this.initHeaderArr();
  },
  methods: {
    initHeaderArr() {
      this.headerArr = this.baseArr;
    },
    checkHeadCell(index) {
      this.$emit("on-check", index);
    },
  },
};
</script>
<style lang="less" scoped>
.base-tab-cell {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-size: 400;
  margin: 0 20px;
  cursor: pointer;
  color: #666;
  cursor: pointer;
  &-active {
    color: #333;
  }
  &:first-child {
    margin-left: 0;
  }
}
</style>
