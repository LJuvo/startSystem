<template>
  <header class="base-header">
    <div class="amy-base-wrapper a-flex-row">
      <div class="amy-base-logo">LOGO</div>
      <div class="a-flex-row-end a-flex-1">
        <div class="a-flex-row-center a-flex-1">
          <div class="a-flex-row-start">
            <header-cell
              v-for="(item, index) in headerArr"
              :key="index"
              :label="item.title"
              :active="activeIndex === index + ''"
              @on-check="checkHeadCell(index)"
            ></header-cell>
          </div>
        </div>
        <div class="a-flex-row-end">
          <div class="base-header-btn">上传</div>
          <div class="base-header-btn">
            <a @click="toLinkPath('/base/login')">登录</a>
          </div>
          <div class="base-header-btn">注册</div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import HeaderCell from "./comps/headerCell.vue";
export default {
  props: {
    activeIndex: {
      type: String,
      default: "0",
    },
  },
  components: {
    "header-cell": HeaderCell,
  },
  data() {
    return {
      baseHeaderArr: [
        { title: "首页", url: "/" },
        { title: "作品", url: "/works" },
        { title: "素材资源", url: "/resources" },
        { title: "社区", url: "/community" },
        { title: "网站导航", url: "/webNav" },
      ],
      headerArr: [],
    };
  },
  mounted() {
    this.initHeaderArr();
  },
  methods: {
    initHeaderArr() {
      this.headerArr = this.baseHeaderArr;
    },
    checkHeadCell(index) {
      const urlObj = this.headerArr[index];
      this.toLinkPath(urlObj.url);
    },
    toLinkPath(path) {
      return this.$router.push({ path });
    },
  },
};
</script>
<style lang="less" scoped>
@import url("@/common/amy.less");
.base-header {
  height: 60px;
  background: #333;
  &-btn {
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    color: #fff;
  }
}
</style>
