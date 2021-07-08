<template>
  <div class="base-title">
    <span class="base-title-label" v-if="label">{{ label }}</span>
    <span class="base-title-label" v-else>
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="less" scoped>
.base-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  &-label {
    border-left: 4px solid #204e97;
    color: #204e97;
    padding-left: 15px;
  }
}
</style>
