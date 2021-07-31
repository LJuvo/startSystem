<template>
  <div class="p-2">
    <template v-for="(item, index) in list">
      <div :class="item.class" :key="index">
          <span>{{ item.name }}</span>
          <a-input v-model="item.class" placeholder="Basic usage" />
          <a-button type="primary" @click="addChild(item)">添加子元素</a-button>
          <a-button type="primary" @click="deleteChild(item)">移除子元素</a-button>
          <a-button type="primary" @click="deleteNode(list, item)">移除自身</a-button>
          <base-tree-cell :list="item.children" :key="index"></base-tree-cell>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "baseTreeCell",
  props: {
    list: Array,
  },
  methods:{
      addChild(node) {
          node.children.push({ name: '新黄焖鸡' })
      },
      deleteChild(node) {
          delete node.children;
      },
      deleteNode(list, node) {
          _.without(list, node);
      }
  }
};
</script>
