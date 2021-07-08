<template>
  <base-layout>
    <div class="">
      <Badge status="default" text="Default" />
      <br />
      <Badge status="processing" text="Processing" />
      <br />
      <Badge status="warning" text="Warning" />
      <br />
      <Badge color="blue" text="blue" />
      <Badge color="green" text="green" />
      <Badge color="red" text="red" />
      <Badge color="yellow" text="yellow" />
      <Badge color="pink" text="pink" />
      <Badge color="magenta" text="magenta" />
      <Badge color="volcano" text="volcano" />
      <Badge color="orange" text="orange" />
      <Badge color="gold" text="gold" />
      <Badge color="lime" text="lime" />
      <Badge color="cyan" text="cyan" />
      <Badge color="geekblue" text="geekblue" />
      <Badge color="purple" text="purple" />
      <br />
      <Badge color="#2db7f5" text="#2db7f5" />
      <Badge color="#f50" text="#f50" />
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/layout/baseLayout.vue";

export default {
  components: {
    "base-layout": BaseLayout,
  },
  data() {
    return {};
  },
  mounted() {
    // 项目其他页面使用跟小程序一样使用Bmob对象即可，例如：
    Bmob.User.login("Juvos", "juvos")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // let params = {
    //   username: "bmob2018",
    //   password: "bmob2018",
    //   email: "bmob2018@bmob.cn",
    //   phone: "13711166567",
    // };
    // Bmob.User.register(params)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>
<style lang="less" scoped></style>
