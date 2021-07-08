<template>
  <div class="base-layout">
    <div class="base-layout-menu">
      <base-menu></base-menu>
    </div>
    <div class="m-bg-default base-layout-content">
      <base-header :activeIndex="activeIndex"></base-header>
      <section class="base-layout-wrapper">
        <slot></slot>
      </section>
    </div>
  </div>
</template>
<script>
import Header from "./header.vue";
import Footer from "./footer.vue";
import Menu from "./menu.vue";
export default {
  props: {
    activeIndex: {
      type: String,
      default: "0",
    },
  },
  components: {
    "base-header": Header,
    "base-footer": Footer,
    "base-menu": Menu,
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.base-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &-menu {
    width: 60px;
    height: 100%;
    background: #2969c9;
  }
  &-content {
    flex: 1;
    max-width: calc(100vw - 60px);
    min-width: 1274px;
  }
  &-wrapper {
    height: calc(100% - 60px);
    overflow: hidden;
    width: 100%;
  }
}
</style>
