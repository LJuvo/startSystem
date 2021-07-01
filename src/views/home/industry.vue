<template>
  <section class="industry-list">
    <amy-btn
      v-for="(item, key) in industryArr"
      :key="key"
      class="industry-btn"
      >{{ item.title }}</amy-btn
    >
  </section>
</template>
<script>
export default {
  data() {
    return {
      industryArr: [
        { title: "医疗行业" },
        { title: "通信行业" },
        { title: "交通行业" },
        { title: "航空行业" },
        { title: "金融行业" },
        { title: "市政行业" },
        { title: "警务行业" },
        { title: "查看更多" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.industry-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.industry-btn {
  color: #000;
  background: #c4c4c4;
  border-radius: 5px;
  width: 140px;
  height: 64px;
  font-size: 18px;
}
</style>
