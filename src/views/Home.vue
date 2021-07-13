<template>
  <a-layout-content
    :style="{
      'min-height': '100%',
    }"
  >
    <div class="ace-showcase pc-ace-showcase">
      <home-header></home-header>
      <home-content></home-content>
    </div>
  </a-layout-content>
</template>

<script>
import HomeSearch from "@/components/search/homeSearch";
import HomeNav from "@/components/nav/homeNav";
import HomeHeader from "@/components/home/header";
import HomeContent from "@/components/home/content";
export default {
  components: {
    "home-search": HomeSearch,
    "home-nav": HomeNav,
    "home-header": HomeHeader,
    "home-content": HomeContent,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.ant-carousel > .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel > .slick-slide h3 {
  color: #fff;
}

.home-box {
  position: relative;
  background: #0a0d11;
}
.search-box {
  width: 100%;
  height: 400px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}
.mr-b {
  margin-bottom: 20px;
}
.demo-element {
  margin: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  background: #eee;
}

.ace-showcase.pc-ace-showcase {
  background: #0b0d10;
}
</style>
