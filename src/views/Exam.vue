<template>
  <base-layout activeIndex="7">
    <section class="exam-layout a-space-32 a-flex-row-between">
      <div class="exam-menu">
        <menu-manager
          :menu="examMenu"
          :initIndex="1"
          @on-check="checkMenuCell($event)"
        ></menu-manager>
      </div>
      <div class="exam-content" v-if="examPageType === 'list'">
        <base-title>新增题目</base-title>
        <exam-create
          :examData="examDataArr"
          @on-create="createExam($event)"
        ></exam-create>
        <base-title>题库列表</base-title>
        <exam-list ref="examList" @on-fetch="fetchExam($event)"></exam-list>
      </div>
      <div class="exam-content" v-if="examPageType === 'exam'">
        <base-title>试题</base-title>
        <exam-question></exam-question>
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
    "exam-list": () => import("./exam/listFrontPage"),
    "exam-create": () => import("./exam/create"),
    "exam-question": () => import("./exam/questionPage"),
  },
  data() {
    return {
      examMenu: [
        { label: "题目列表", icon: "logo-freebsd-devil", key: "list" },
        { label: "开始答题", icon: "logo-freebsd-devil", key: "exam" },
      ],
      examDataArr: [],
      examPageType: "exam",
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
