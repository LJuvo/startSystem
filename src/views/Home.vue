<template>
  <base-layout>
    <div>首页</div>
    <amy-btn><i class="amy-icon amy-icon-ios-apps"></i>首页</amy-btn>
    <amy-btn type="primary"><i class="amy-icon amy-icon-ios-apps"></i>首页</amy-btn>
    <amy-btn type="dashed"><i class="amy-icon amy-icon-ios-apps"></i>首页</amy-btn>
    <amy-btn type="text"><i class="amy-icon amy-icon-ios-apps"></i>首页</amy-btn>
    <amy-btn loading><i class="amy-icon amy-icon-ios-apps"></i>首页</amy-btn>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/layout/baseLayout.vue";
// import CourseDetails from "./course/details.vue";
export default {
  components: {
    "base-layout": BaseLayout,
    //     "course-details": CourseDetails,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped></style>
