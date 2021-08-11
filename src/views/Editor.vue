<template>
  <div class="flex flex-row w-full h-full bg-gray-100">
  <div class=" w-80 h-full py-5 bg-white">
    <editor-menu></editor-menu>
  </div>
  <div class=" flex-1 h-full p-5">
    <editor-nested></editor-nested>
      <!-- <div class=" rounded bg-gray-200 shadow-md w-full h-full text-center flex items-center p-5">内容模块</div> -->
      
  </div>
  <div class=" w-80 h-full py-5 bg-white">
    <editor-setting></editor-setting>
  </div>
</div>
</template>

<script>

import EditorMenu from "@components/editor/menu.vue"
import EditorNested from "@components/editor/nested.vue"
import EditorSetting from "@components/editor/setting.vue"
export default {
  components: {
    "editor-menu": EditorMenu,
    "editor-nested": EditorNested,
    "editor-setting": EditorSetting,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    fetchChild(cell) {
      console.log("fetchChild ->", cell, cell.currentTarget);
    }
  },
};
</script>
<style lang="less" scoped>

</style>
