<template>
  <base-layout activeIndex="1">
    <div class="amy-base m-bg-white">
      <div class="amy-base-wrapper a-space-12-top a-space-12-bottom">
        <works-nav :baseArr="navArr"></works-nav>
      </div>
    </div>

    <div class="amy-base a-space-12-top a-space-32-bottom">
      <div class="amy-base-wrapper">
        <home-card-list :cardData="baseWorks"></home-card-list>
      </div>
    </div>
    <div class="amy-base">
      <div class="amy-base-wrapper a-flex-row-center a-space-32-bottom">
        <a-pagination :default-current="6" :total="500" />
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
    return {
      navArr: [],
      baseWorks: [],
    };
  },
  mounted() {
    this.fetchWorksCategory();
    this.fetchWorks();
  },
  methods: {
    fetchWorks() {
      const query = Bmob.Query("works");
      query.limit(40);
      query.order("createdAt");
      query.find().then((res) => {
        this.baseWorks = res;
      });
    },
    fetchWorksCategory() {
      let categoryArr = this.$store.getters.getCategory;
      if (categoryArr && categoryArr.length > 0) {
        this.setWorksCategory(categoryArr);
      } else {
        const query = Bmob.Query("category");
        query.find().then((res) => {
          this.$store.dispatch("fetchCategory", res);
          localStorage.setItem("category", JSON.stringify(res));
          this.setWorksCategory(res);
          console.log("fetch category at resources ->");
        });
      }
    },
    setWorksCategory(categoryArr) {
      const worksCategory = _.find(
        categoryArr,
        (o) => o.keyword === "RESOURCE"
      );
      const categoryGroup = _.groupBy(categoryArr, "parentId");
      const temp = _.get(categoryGroup, worksCategory.objectId, []);
      this.navArr = _.filter(
        [{ label: "全部资源", url: "" }, , ...temp],
        (o) => o
      );
    },
  },
};
</script>
<style lang="less" scoped></style>
