<template>
    <div class="m-5" @click="fetchCurrentNode($event)">
      <base-node></base-node>
    </div>
</template>
<script>
import BaseNode from "./node.vue"
export default {
    components: {
        "base-node": BaseNode,
    },
    methods:{
        fetchCurrentNode(node){
            this.$emit("on-fetch", node);
        }
    }
}
</script>

