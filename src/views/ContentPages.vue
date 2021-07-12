<template>
  <base-layout activeIndex="2">
    <section class="exam-layout a-space-32 a-flex-row-between">
      <div class="exam-menu">
        <menu-manager
          label="内容页管理"
          :menu="examMenu"
          :initIndex="1"
          @on-check="checkMenuCell($event)"
        ></menu-manager>
      </div>
      <div class="exam-content" v-if="examPageType === 'list'">
        <base-title>页面列表</base-title>
        <div class="a-flex-row-between a-margin-10-top a-margin-10-bottom">
          <div class="a-flex-row-start">
            <Button icon="md-cloud-download" type="primary">新增</Button>
          </div>
          <div class="a-flex-row-end">
            <Button type="primary" icon="ios-refresh" size="small">刷新</Button>
          </div>
        </div>

        <HyzFTable
          :dataSource="detailDataList"
          :columns="detailDataListColumns"
        />
      </div>
      <div class="exam-content" v-else>
        <base-form></base-form>
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
    "base-form": () => import("@/components/form/index.vue"),
  },
  data() {
    return {
      examMenu: [
        { label: "内容页列表", icon: "logo-freebsd-devil", key: "list" },
        { label: "新增内容页", icon: "logo-freebsd-devil", key: "create" },
        { label: "内容页模型", icon: "logo-freebsd-devil", key: "create" },
        { label: "内容页类型", icon: "logo-freebsd-devil", key: "create" },
      ],
      examDataArr: [],
      examPageType: "list",
      content: "",
      detailDataList: [
        {
          title: "[潮流热议]今日计划行业资讯火爆！",
          address: "http://ss.sss.com/single/456",
          category: "内容页",
          type: "markdown",
          createTime: "2021-09-12 08:43:08",
          createUser: "Juvos",
          state: "应用中",
          readNum: "73120",
          action: "编辑",
        },
        {
          title: "[潮流热议]今日计划行业资讯火爆！",
          address: "http://ss.sss.com/single/456",
          category: "内容页",
          type: "markdown",
          createTime: "2021-09-12 08:43:08",
          createUser: "Juvos",
          state: "审核中",
          readNum: "73120",
          action: "编辑",
        },
        {
          title: "[潮流热议]今日计划行业资讯火爆！",
          address: "http://ss.sss.com/single/456",
          category: "内容页",
          type: "markdown",
          createTime: "2021-09-12 08:43:08",
          createUser: "Juvos",
          state: "冻结中",
          readNum: "73120",
          action: "编辑",
        },
      ],
      detailDataListColumns: [
        {
          title: "标题",
          key: "title",
          width: 300,
          align: "center",
        },
        {
          title: "引用地址",
          key: "address",
          width: 200,
          align: "center",
        },
        {
          title: "分类",
          key: "category",
          align: "center",
        },
        {
          title: "类型",
          key: "type",
          align: "center",
        },
        {
          title: "创建日期",
          key: "createTime",
          width: 150,
          align: "center",
        },
        {
          title: "创建人",
          key: "createUser",
          align: "center",
        },
        {
          title: "状态",
          key: "state",
          align: "center",
        },
        {
          title: "阅读量",
          key: "readNum",
          align: "center",
        },
        {
          title: "操作",
          key: "action",
          align: "center",
        },
      ],
    };
  },
  mounted() {},
  methods: {
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
