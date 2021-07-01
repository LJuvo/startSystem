<template>
  <section class="base-view">
    <div class=""></div>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.base-view {
  width: 100%;
  height: 100%;
  // background: url(../images/login-ground.jpg) no-repeat, #ffe400;
  // background: url(../images/login-ground.jpg) no-repeat, -moz-linear-gradient(top, #ffd100, #ffe400);
  // background: url(../images/login-ground.jpg) no-repeat, -o-linear-gradient(top, #ffd100, #ffe400);
  // background: url(../images/login-ground.jpg) no-repeat, -webkit-gradient(linear, 0 0, 0 bottom, from(#ffd100), to(#ffe400));
  background-size: cover;
  background-image: url(//static.zcool.cn/passport4.0/images/login-tommyp.jpg);
}
</style>
