<template>
  <!-- <base-layout activeIndex="1">
    <div class="amy-base m-bg-white">
      <div class="amy-base-wrapper a-space-32-top a-space-32-bottom">
        <home-adver></home-adver>
      </div>
    </div> -->
  <div class="amy-base m-bg-white">
    <div class="amy-base-wrapper a-space-32-bottom">
      Product
      <a @click="showActicle()">查看文章</a>
      <product-editor></product-editor>
    </div>
  </div>
  <!-- </base-layout> -->
</template>

<script>
import BaseLayout from "@/components/layout/baseLayout.vue";
import HomeAdver from "@/views/home/adver.vue";
import ProductEditor from "./comps/editor.vue";
export default {
  components: {
    "base-layout": BaseLayout,
    "home-adver": HomeAdver,
    "product-editor": ProductEditor,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    showActicle() {
      this.$router.push(
        { path: "/details/475c7c9e9a" }
        //       {
        //     name: "details",
        //     params: { worksId: "475c7c9e9a" },
        //   }
      );
    },
  },
};
</script>
<style lang="less" scoped></style>
