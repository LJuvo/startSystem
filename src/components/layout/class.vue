<template>
  <div>
    <a-collapse>
      <a-collapse-panel
        v-for="(item, key) in baseTailList"
        :key="key"
        :header="item.title"
      >
        <div v-for="(cell, ke) in item.list" :key="ke">
          <span :style="{ marginRight: 8 }">{{ cell.title }}:</span>
          <check-tag :tag-list="cell.list" :selected="selectedTags" @on-change="onCheckTag($event)"></check-tag>
        </div>
      </a-collapse-panel>
    </a-collapse>
    <div>
        <!-- <a-tag v-for="(cell, key) in selectedTags" :key="key" @close="closeTag(cell)" closable>
      {{cell}}
    </a-tag> -->
    <a-textarea
    disabled
      v-model="selectedTagText"
      placeholder="Controlled autosize"
      :auto-size="{ minRows: 3, maxRows: 5 }"
    />
    </div>
  </div>
</template>
<script>
import { TailWindCss } from "./tailwind.js";
import CheckTag from "./checkTag.vue";
export default {
    components:{
        "check-tag": CheckTag
    },
  data() {
    return {
      activeKey: ["1"],
      checked1: false,
      checked2: false,
      checked3: false,
      tailList: [
        {
          title: "容器",
          list: [{ class: "container", properties: "width: 100%;" }],
        },
        {
          title: "弹性布局-Flex Direction",
          type: "radio",
          list: [
            { class: "flex-row", properties: "flex-direction: row;" },
            {
              class: "flex-row-reverse",
              properties: "flex-direction: row-reverse;",
            },
            { class: "flex-col", properties: "flex-direction: column;" },
            {
              class: "flex-col-reverse",
              properties: "flex-direction: column-reverse;",
            },
          ],
        },
      ],
      selectedTags: [],

      baseTailList: [],
      selectedTagText: "",
    };
  },
  mounted() {
    this.baseTailList = TailWindCss;
    console.log("TailWindCss -> ", TailWindCss);
  },
  methods: {
    closeTag(tag) {
        this.selectedTags = this.selectedTags.filter(o=> o!== tag);
    },
    onCheckTag(cell) {
        console.log(cell);
        this.selectedTags.filter(o => !!cell.lastTags.find(ele => ele === o))
        const tag = this.selectedTags.find(o => o === cell.tag);
        if(!cell.checked) {
            if(tag){
                this.closeTag(tag);
            }
        } else {
            if(!tag){
                this.selectedTags = [...this.selectedTags, cell.tag];
            }
        }

        this.selectedTagText = this.selectedTags.join(" ");
    }
  },
};
</script>
