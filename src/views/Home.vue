<template>
  <base-layout>
    <home-nav :navData="navArr"></home-nav>
    <div class="amy-base a-space-32-top">
      <div class="amy-base-wrapper a-space-32-bottom">
        <home-industry></home-industry>
      </div>
    </div>
    <div class="amy-base a-space-32-bottom">
      <div class="amy-base-wrapper a-flex-row-center">
        <home-tab></home-tab>
      </div>
    </div>
    <div class="amy-base a-space-32-bottom">
      <div class="amy-base-wrapper">
        <home-card-list :cardData="baseWorks"></home-card-list>
      </div>
    </div>
    <div class="amy-base">
      <div class="amy-base-wrapper a-flex-row-center a-space-32-bottom">
        <amy-btn size="large">查看更多</amy-btn>
      </div>
    </div>
    <div class="amy-base">
      <div class="amy-base-wrapper a-space-32-bottom">
        <home-adver></home-adver>
      </div>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/layout/baseLayout.vue";
// import CourseDetails from "./course/details.vue";
import HomeNav from "./home/nav.vue";
import HomeIndustry from "./home/industry.vue";
import HomeTab from "./home/tab.vue";
import HomeCardList from "./home/content.vue";
import HomeAdver from "./home/adver.vue";
export default {
  components: {
    "base-layout": BaseLayout,
    "home-nav": HomeNav,
    "home-industry": HomeIndustry,
    "home-tab": HomeTab,
    "home-card-list": HomeCardList,
    "home-adver": HomeAdver,
    //     "course-details": CourseDetails,
  },
  data() {
    return {
      navArr: [],
      baseWorks: [],
    };
  },
  mounted() {
    this.fetchBanner();
    this.fetchWorks();
  },
  methods: {
    fetchBanner() {
      const query = Bmob.Query("adver");
      query.equalTo("type", "==", "puXANNNf");
      query.find().then((res) => {
        console.log("adver ->", res);
        this.navArr = res;
      });
    },
    fetchWorks() {
      const query = Bmob.Query("works");
      query.limit(40);
      query.order("createdAt");
      query.find().then((res) => {
        console.log("works ->", res);
        this.baseWorks = res;
      });
    },
  },
};
</script>
<style lang="less" scoped></style>
