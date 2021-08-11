<template>
      <nested-draggable class="w-full h-full" :children="list" />
</template>

<script>
import nestedDraggable from "./nestedCell";
export default {
  display: "Nested",
  order: 15,
  components: {
    nestedDraggable
  },
  data() {
    return {
      list: [],
      currentCell: {}
    };
  },
  watch:{
      list(val){
          console.log("list ->", val)

      }
  },
  mounted(){
    this.$EventBus.$on("nested", (cell) => {
        this.checkCell((cell && cell.active)? {} : cell);
    });
    this.$EventBus.$on("nested-change", (cell) => {
        this.changeCell(cell);
    });
    this.$EventBus.$on("nested-remove", (cell) => {
        let treeNodes = this.spiltTree(this.list);
        treeNodes = _.filter(treeNodes, o => o.id !== cell.id);
        this.list = this.buildTree(treeNodes);
    });

    
  },
  methods:{
      checkCell(cell){
        let treeNodes = this.spiltTree(this.list);
        treeNodes.forEach(ele => {
            ele.active = ele.id === cell.id;
        })
        this.list = this.buildTree(treeNodes);
      },
      fetchNestedTree(treeNodes){
      },
      spiltTree(tree) {
        const treeSource = JSON.parse(JSON.stringify(tree));
        let res = [];
        const fn = (source)=>{
            source.forEach(el=>{
                res.push(el)
                if(el.children && el.children.length>0) {
                    el.children.forEach(ele => {
                        ele.parent_id = el.id;
                    })
                    fn(el.children);
                }
            })
        }

        fn(treeSource);
        return res;
      },
      buildTree(source) {
          const baseSource = JSON.parse(JSON.stringify(source));
          let parentNodes = baseSource.filter(o => !o.parent_id);
          const fn = (tree) => {
              tree.forEach(ele => {
                  ele.children = baseSource.filter(o => o.parent_id === ele.id);
                  if(ele.children && ele.children.length > 0) {
                      fn(ele.children);
                  }
              })
          }

          fn(parentNodes);
          return parentNodes;
      }
  }
};
</script>
<style scoped></style>
