<template>
  <div class="menu-list">
    <div class="menu-logo">
      <Icon type="ios-flower" size="40" />
    </div>
    <div
      class="menu-list-cell"
      v-for="(item, key) in menuArr"
      :key="key"
      :class="{ active: item.checked }"
      @click="checkMenuCell(key)"
    >
      <Icon :type="item.icon" size="20" />
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => {
        return [
          { label: "控制台", path: "/", icon: "md-analytics" },
          { label: "推荐", path: "/features", icon: "md-analytics" },
          { label: "内容页", path: "/content", icon: "md-analytics" },
          { label: "单页", path: "/pages", icon: "md-analytics" },
          { label: "媒体库", path: "/media", icon: "md-analytics" },
          { label: "用户库", path: "/person", icon: "md-analytics" },
          { label: "系统", path: "/system", icon: "md-analytics" },
          { label: "题库", path: "/exam", icon: "md-analytics" },
        ];
      },
    },
    activeIndex: {
      type: String,
      default: "0",
    },
  },
  data() {
    return {
      menuArr: [],
    };
  },
  mounted() {
    this.checkMenuCell(parseInt(this.activeIndex));
  },
  methods: {
    checkMenuCell(index) {
      const temp = JSON.parse(JSON.stringify(this.menu));
      temp[index].checked = true;
      this.menuArr = temp;
      if (this.activeIndex !== index + "")
        this.$router.push({ path: temp[index].path });
    },
  },
};
</script>
<style lang="less" scoped>
.menu-logo {
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.menu-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &-cell {
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 5px;
    padding-top: 8px;
    padding-bottom: 8px;
    cursor: pointer;
  }

  .active {
    background: #204e97;
  }
}
</style>
