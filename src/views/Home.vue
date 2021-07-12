<template>
  <base-layout>
    <section class="exam-layout a-space-32 a-flex-row-between">
      <div class="exam-menu">
        <menu-manager
          :menu="examMenu"
          :initIndex="0"
          @on-check="checkMenuCell($event)"
        ></menu-manager>
      </div>
      <div class="exam-content">
        <base-title>控制台</base-title>
        <i-editor v-model="content"></i-editor>

        <base-title>预览</base-title>
        <preview-md :content="content"></preview-md>
      </div>
    </section>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/layout/baseLayout.vue";
import MenuManager from "@/components/menu/manager.vue";
import BaseTitle from "@/components/title/base.vue";

export default {
  components: {
    "base-layout": BaseLayout,
    "menu-manager": MenuManager,
    "base-title": BaseTitle,
    "preview-md": () => import("./home/preview.vue"),
  },
  data() {
    return {
      examMenu: [
        { label: "题目列表", icon: "logo-freebsd-devil", key: "list" },
        { label: "开始答题", icon: "logo-freebsd-devil", key: "exam" },
      ],
      examDataArr: [],
      examPageType: "exam",
      content: "",
    };
  },
  mounted() {
    // // 项目其他页面使用跟小程序一样使用Bmob对象即可，例如：
    // Bmob.User.login("Juvos", "juvos")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
  methods: {
    fetchExam(val) {
      this.examDataArr = val;
    },
    createExam(val) {
      this.examDataArr.push(val);
      this.$refs.examList.addExamToList(this.examDataArr);
    },
    checkMenuCell(val) {
      this.examPageType = val.key;
    },
  },
};
</script>
<style lang="less" scoped>
.exam-layout {
  height: 100%;
}
.exam-menu {
  height: 100%;
  background: #ffffff;
  box-shadow: 0 0 10px 0 rgba(128, 145, 165, 20%);
  margin-right: 20px;
}
.exam-content {
  flex: 1;
  height: 100%;
  background: #ffffff;
  box-shadow: 0 0 10px 0 rgba(128, 145, 165, 20%);
  padding: 20px;
  overflow: auto;
}
</style>
