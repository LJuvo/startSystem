<template>
  <draggable class="p-3 border border-dashed border-gray-300" chosenClass="chosen" :list="children" :group="{ name: 'nested' }">
    <div  v-for="(el,key) in children" :key="key"
    class="rounded bg-white border shadow-md p-3"
    :class="el.active? 'border-blue-300':''"
    @click="checkCell(el, $event)">
      <div class="flex flex-row justify-between items-center">
        <span>{{ el.title }}</span>
        <div class="rounded-full pb-1 border border-red-500 h-3 w-3 text-red-500 flex justify-center items-center cursor-pointer" @click="removeCell(el, $event)">x</div>
      </div>
      <nested-draggable class="base-h" :class="el.class" :children="el.children" />
    </div>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";

export default {
  props: {
    children: {
      required: true,
      type: Array
    }
  },
  components: {
    draggable
  },
  name: "nested-draggable",
  methods:{
    checkCell(cell, e){
      e.stopPropagation();
      this.$EventBus.$emit("nested", cell);
    },
    removeCell(cell, e){
      e.stopPropagation();
      this.$EventBus.$emit("nested-remove", cell);
    },
  }
};
</script>
<style lang="less">
.base-h {
  min-height: 20px;
}
</style>
