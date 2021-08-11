<template>
  <section class=" w-full flex flex-col">
    <h3 class=" ml-3 mb-3">组件列表</h3>
    <div class="w-full flex flex-col">
      <div
        class="w-full mb-3 flex flex-col"
        v-for="(item, key) in menuList"
        :key="key"
      >
        <div class="w-full px-3 h-9 leading-9">
          {{ item.title }}
        </div>
        <draggable
          class="w-full mr-3 flex justify-start flex-wrap"
          :list="item.children"
          :group="{ name: 'nested', pull: 'clone', put: false }"
          :clone="cloneDog"
          @change="log"
        >
          <div
            class="p-2 w-1/3 cursor-pointer"
            v-for="(cell, index) in item.children"
            :key="index"
            draggable="true"
          >
            <div class="px-3 py-1  rounded bg-gray-200 text-center flex justify-center items-center">{{ cell.title }}</div>
          </div>
        </draggable>
      </div>
    </div>
  </section>
</template>
<script>
import draggable from "vuedraggable";
import { uuid } from "@/utils/UUID.js"
export default {
  components: {
    draggable,
  },
  data() {
    return {
      menuList: [
          {
          title: "基础布局",
          children: [
            { title: "布局框", props: {}, type: "div", class: "container" },
            { title: "左右布局", props: {}, type: "div", class: "w-full flex flex-row" },
            { title: "上下布局", props: {}, type: "div", class: "h-full flex flex-col" },
            { title: "左中右", props: {}, type: "div", class: "container" },
            { title: "上中下", props: {}, type: "div", class: "container" },
          ],
        },
        {
          title: "基础组件",
          children: [
            { title: "按钮", props: {}, type: "button" },
            { title: "文字", props: {}, type: "span" },
            { title: "按钮", props: {}, type: "button" },
            { title: "文字232", props: {}, type: "span" },
            { title: "按钮", props: {}, type: "button" },
            { title: "文字", props: {}, type: "span" },
            { title: "按钮", props: {}, type: "button" },
            { title: "文字", props: {}, type: "span" },
          ],
        },
        {
          title: "表格组件",
          children: [
            { title: "按钮", props: {}, type: "button" },
            { title: "文字", props: {}, type: "span" },
          ],
        },
      ],
    };
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
    },
    cloneDog(cell) {
      console.log("Cell ->", cell);
      return {
        ...cell,
        id: uuid(),
        children: []
      };
    },
  },
};
</script>
