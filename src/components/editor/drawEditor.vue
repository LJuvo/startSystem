<template>
  <div class="draw-editor">
    <div class="draw-editor-pic">
      <img :src="backImg" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    backImg: "/bg.png",
  },
};
</script>
<style lang="less" scoped>
.draw-editor {
  width: 100%;
  height: 100%;
  &-pic {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
