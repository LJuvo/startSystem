<template>
  <div class="base-title" :style="{ 'align-items': align }">
    <label class="base-title-input-label" v-if="label">{{ label }}:</label>
    <div v-if="type === 'textarea'" class="a-flex-1">
      <Input
        v-model="inputValue"
        type="textarea"
        :rows="4"
        placeholder="Enter something..."
      />
    </div>
    <div v-else-if="type === 'slot'" class="a-flex-1">
      <slot></slot>
    </div>
    <div v-else class="a-flex-1">
      <Input v-model="inputValue" size="small" :placeholder="placeholder" />
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: "baseValue",
    event: "input",
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "input",
    },
    baseValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    align: {
      type: String,
      default: "center",
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    inputValue(val) {
      this.$emit("input", val);
    },
  },
  mounted() {
    this.inputValue = this.baseValue;
  },
};
</script>
<style lang="less" scoped>
.base-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 12px;
  &-input-label {
    margin-right: 5px;
  }
}
</style>
