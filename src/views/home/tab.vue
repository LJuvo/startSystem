<template>
  <div class="a-flex-row-start home-tab">
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
  data() {
    return {
      baseHeaderArr: [
        { title: "首页推荐", url: "" },
        { title: "我的关注", url: "" },
      ],
      headerArr: [],
      activeIndex: 0,
    };
  },
  mounted() {
    this.initHeaderArr();
  },
  methods: {
    initHeaderArr() {
      this.headerArr = this.baseHeaderArr;
      this.checkHeadCell(0);
    },
    checkHeadCell(index) {
      this.activeIndex = index;
    },
  },
};
</script>
<style lang="less" scoped>
.home-tab {
  background: #ffffff;
  padding: 10px 20px;
  padding-top: 5px;
  border-radius: 40px;
}
.base-tab-cell {
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-size: 400;
  margin: 0 20px;
  cursor: pointer;
  &-active {
    border-bottom: 2px solid #333;
  }
}
</style>
