<template>
  <div class="menu-manager">
    <div class="menu-manager-header">
      <div class="menu-manager-header-title">题库管理</div>
    </div>
    <div
      class="menu-manager-cell"
      v-for="(item, key) in menuArr"
      :key="key"
      :class="{ active: item.checked }"
      @click="checkMenuCell(key)"
    >
      <Icon class="menu-manager-cell-icon" :type="item.icon" size="20" />
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
          { label: "新增题目", icon: "logo-freebsd-devil", key: "create" },
          { label: "题目列表", icon: "logo-freebsd-devil", key: "list" },
          { label: "开始答题", icon: "logo-freebsd-devil", key: "exam" },
        ];
      },
    },
  },
  data() {
    return {
      menuArr: [],
    };
  },
  mounted() {
    this.checkMenuCell(0);
  },
  methods: {
    checkMenuCell(index) {
      const temp = JSON.parse(JSON.stringify(this.menu));
      temp[index].checked = true;
      this.menuArr = temp;
      this.$emit("on-check", temp[index]);
    },
  },
};
</script>
<style lang="less" scoped>
.menu-manager {
  width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &-header {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    font-size: 20px;
    &-title {
      border-left: 4px solid #3482fb;
      padding-left: 15px;
    }
  }
  &-cell {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 24px;
    font-size: 14px;
    cursor: pointer;
    &-icon {
      margin-right: 10px;
    }
  }
  .active {
    background: #e1ecfe;
    color: #3482fb;
  }
}
</style>
