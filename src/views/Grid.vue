<template>
  <div class="flex flex-row w-full h-full bg-gray-100">
    <div class=" w-80 h-full py-5 bg-white">
    </div>
    <div class=" flex-1 h-full p-5">
        <div class=" rounded bg-gray-200 shadow-md w-full h-full text-center flex items-center p-5">
          <grid-cell class="w-full"></grid-cell>
        </div>
        
    </div>
    <div class=" w-80 h-full py-5 bg-white">
      
    </div>
  </div>
</template>

<script>
import GridCell from "../components/grid/cell.vue"
export default {
  components: {
    "grid-cell": GridCell
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
