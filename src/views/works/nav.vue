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
      {{ item.label }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    baseArr: {
      type: Array,
      default: () => {
        return [];
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
  watch: {
    baseArr(val) {
      this.headerArr = val;
    },
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
