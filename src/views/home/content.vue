<template>
  <div class="home-content">
    <home-card v-for="(item, key) in cardArr" :key="key"></home-card>
    <home-card></home-card>
    <home-card></home-card>
    <home-card></home-card>
    <home-card></home-card>
    <home-card></home-card>
  </div>
</template>
<script>
export default {
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
