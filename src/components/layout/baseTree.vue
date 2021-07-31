<template>
  <div>
    <base-tree :list="list"></base-tree>
  </div>
</template>
<script>
import baseTree from './baseTreeCell'
export default {
  components: {
    baseTree
  },
  data () {
    return {
      list: [
        {
          name: '黄焖鸡米饭111111111',
          children: [
            { name: '二级黄焖鸡' },
            {
              name: 'one chicken',
              children: [
                { name: '三级黄焖鸡3333', children: [{ name: '四级黄焖鸡' }] }
              ]
            }
          ]
        },
        { name: '2222222222' },
        {
          name: '黄焖鸡米饭33333333',
          children: [{ name: '二级黄焖鸡' }, { name: 'one chicken' }]
        }
      ]
    }
  },
  methods: {}
  
}
</script>