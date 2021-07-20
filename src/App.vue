<template>
  <router-view></router-view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      collapsed: false,
    };
  },
  created() {
    this.fetchSiteBasic();
  },
  methods: {
    fetchSiteBasic() {
      const query = Bmob.Query("basic");
      query.find().then((res) => {
        const versionObj = res.find((o) => {
          return o.keywords === "version";
        });
        this.checkVersion(versionObj.keyValue);
      });
    },
    checkVersion(version) {
      const pageVersion = localStorage.getItem("version");
      let pageCategory = localStorage.getItem("category");
      pageCategory = pageCategory ? JSON.parse(pageCategory) : undefined;
      if (pageVersion === version && pageCategory) {
        this.$store.dispatch("fetchCategory", pageCategory);
      } else {
        localStorage.setItem("version", version);
        this.fetchCategory();
      }
    },
    fetchCategory() {
      const query = Bmob.Query("category");
      query.find().then((res) => {
        this.$store.dispatch("fetchCategory", res);
        localStorage.setItem("category", JSON.stringify(res));
        console.log("fetch category at app ->");
      });
    },
  },
};
</script>
<style lang="less">
@import "./common/amy.less";
</style>
<style lang="less" scoped></style>

<style></style>
