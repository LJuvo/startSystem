<template>
  <base-layout activeIndex="3">
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
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/layout/baseLayout.vue";

import HomeCardList from "./home/content.vue";
import WorksNav from "./works/nav.vue";
export default {
  components: {
    "base-layout": BaseLayout,
    "home-card-list": HomeCardList,
    "works-nav": WorksNav,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped></style>
