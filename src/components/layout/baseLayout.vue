<template>
  <div class="m-bg-default">
    <base-header :activeIndex="activeIndex"></base-header>
    <slot></slot>
    <base-footer></base-footer>
  </div>
</template>
<script>
import Header from "./header.vue";
import Footer from "./footer.vue";
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
  },
};
</script>
<style lang="less" scoped></style>
