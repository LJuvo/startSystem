<template>
  <div class="w-full h-full flex flex-col justify-between px-5">
    <div>
      <h3>配置信息</h3>
      <div class=" h-60 rounded bg-purple-50"></div>
    </div>
    <div>
      <h3>选中元素</h3>
      <a-textarea
        class="rounded"
        v-model="value"
        placeholder="Controlled autosize"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {},
      value: "",
    };
  },
  mounted() {
    this.$EventBus.$on("nested", (cell) => {
      this.checkCell(cell);
    });
  },
  methods: {
    checkCell(cell) {
      this.info = cell;
      this.value = JSON.stringify(cell);
    },
  },
};
</script>
