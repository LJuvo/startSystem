<template>
  <div class="container mx-auto flex flex-row w-full h-full">
  <div class=" w-80 h-full py-5">
    <class-tree></class-tree>
  </div>
  <div class=" flex-1 h-full">
    <div class=" m-5">
      <div class=" rounded bg-gray-200 shadow-md w-full h-full text-center flex items-center p-5">内容模块</div>
      <base-tree></base-tree>
    </div>
  </div>
  <div class=" w-80 h-full py-5">
    <class-layout></class-layout>
  </div>
</div>
</template>

<script>
import DragEditor from "@components/editor/drag.vue"
import ClassLayout from "@components/layout/class.vue"
import ClassTree from "@components/layout/tree.vue"
import BaseTree from "@components/layout/baseTree.vue"
export default {
  components: {
    "drag-editor": DragEditor,
    "class-layout": ClassLayout,
    "class-tree": ClassTree,
    "base-tree": BaseTree
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
