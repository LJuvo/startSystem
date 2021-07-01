<template>
  <base-layout activeIndex="1">
    <div class="amy-base m-bg-white">
      <div class="amy-base-wrapper a-space-12-top a-space-12-bottom">
        <works-nav></works-nav>
      </div>
    </div>

    <div class="amy-base a-space-12-top a-space-32-bottom">
      <div class="amy-base-wrapper">
        <home-card-list></home-card-list>
      </div>
    </div>
    <div class="amy-base">
      <div class="amy-base-wrapper a-flex-row-center a-space-32-bottom">
        <amy-btn size="large">分页</amy-btn>
      </div>
    </div>
    <div class="amy-base m-bg-white">
      <div class="amy-base-wrapper a-space-32-top a-space-32-bottom">
        <home-adver></home-adver>
      </div>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/layout/baseLayout.vue";
import HomeNav from "./home/nav.vue";
import HomeIndustry from "./home/industry.vue";
import HomeTab from "./home/tab.vue";
import HomeCardList from "./home/content.vue";
import HomeAdver from "./home/adver.vue";
import WorksNav from "./works/nav.vue";
export default {
  components: {
    "base-layout": BaseLayout,
    "home-nav": HomeNav,
    "home-industry": HomeIndustry,
    "home-tab": HomeTab,
    "home-card-list": HomeCardList,
    "home-adver": HomeAdver,
    "works-nav": WorksNav,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped></style>
