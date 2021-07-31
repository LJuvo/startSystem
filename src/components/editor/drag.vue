<template>
  <div class="drag-content">
    <span :style="{'background-color': item.color}"
      v-for="(item, index) in colorList"
      v-dragging="{ item: item, list: colorList, group: 'item' }" :key="index">{{item.color}}</span>
  </div>
</template>

<script>
export default{
  data () {
    return {
      colorList: [
        {color: '#2ec7c9'}, {color: '#b6a2de'}, {color: '#5ab1ef'},
        {color: '#ffb980'}, {color: '#d87a80'}, {color: '#8d98b3'},
        {color: '#e5cf0d'}, {color: '#97b552'}, {color: '#95706d'},
        {color: '#dc69aa'}, {color: '#07a2a4'}, {color: '#9a7fd1'},
        {color: '#588dd5'}, {color: '#f5994e'}, {color: '#c05050'},
        {color: '#59678c'}, {color: '#c9ab00'}, {color: '#7eb00a'},
        {color: '#6f5553'}, {color: '#c14089'}
      ]
    }
  },
  mounted () {
    // 拖拽后触发的事件
    this.$dragging.$on('dragged', (res) => {
      console.log(res)
    })

    this.$dragging.$on('dragend', (res) => {
      console.error("dragend ->",res);
    })
  }
}
</script>

<style>
  .drag-content{width: 500px; margin: 20px auto; text-align: left;}
  .drag-content span{width: 50%; height: 50px; line-height: 50px; text-align: center; display: inline-block;}
</style>