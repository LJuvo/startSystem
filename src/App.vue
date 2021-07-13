<template>
  <a-layout style="min-height: 100%;">
    <a-layout-header style="background: #383d41; padding: 0">
      <a-icon
        title="主页"
        key="setting"
        type="setting"
        @click="toRouterPath('')"
      />
      <a-icon key="edit" type="edit" />
      <a-icon
        title="发布"
        key="ellipsis"
        @click="toRouterPath('release')"
        type="ellipsis"
      />
    </a-layout-header>

    <router-view></router-view>
  </a-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    toRouterPath(path) {
      this.$router.push({ path: "/" + path });
    },
  },
};
</script>
<style lang="less" scoped></style>
