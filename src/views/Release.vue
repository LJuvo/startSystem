<template>
  <a-layout-content
    :style="{
      background: '#efefef',
      height: '100%',
    }"
  >
    <div class="release-box">
      <div class="release-box-content">
        col-18 col-push-6
      </div>
      <div class="release-box-tools">
        col-18 col-push-6
      </div>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.release-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &-content {
    flex: 1;
    height: 100%;
  }
  &-tools {
    height: 100%;
    width: 360px;
  }
}
</style>
