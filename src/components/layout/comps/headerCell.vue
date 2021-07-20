<template>
  <div
    :class="{ 'header-cell': true, 'header-cell-active': active }"
    @click="clickNode()"
  >
    {{ label }}
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickNode() {
      this.$emit("on-check");
    },
  },
};
</script>
<style lang="less" scoped>
.header-cell {
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  font-weight: 400;
  width: 120px;
  text-align: center;
  cursor: pointer;
  // color: #fff;
  &-active {
    // background: #666;
  }
  &:hover {
    background: #ffc107;
    color: #fff;
  }
}
</style>
