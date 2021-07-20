<template>
  <div class="home-content">
    <home-card
      v-for="(item, key) in cardData"
      :key="key"
      :cardInfo="item"
    ></home-card>
    <home-card
      v-for="(item, key) in cardData"
      :key="key + 'a'"
      :cardInfo="item"
    ></home-card>
    <home-card
      v-for="(item, key) in cardData"
      :key="key + 'b'"
      :cardInfo="item"
    ></home-card>
    <home-card
      v-for="(item, key) in cardData"
      :key="key + 'c'"
      :cardInfo="item"
    ></home-card>
  </div>
</template>
<script>
export default {
  props: {
    cardData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    "home-card": () => import("./card.vue"),
  },
  data() {
    return {
      cardArr: [],
    };
  },
  mounted() {
    const baseArr = [
      { title: "标题" },
      { title: "标题" },
      { title: "标题" },
      { title: "标题" },
      { title: "标题" },
      { title: "标题" },
      { title: "标题" },
      { title: "标题" },
      { title: "标题" },
      { title: "标题" },
    ];
    this.cardArr = baseArr;
  },
};
</script>
<style lang="less" scoped>
.home-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
