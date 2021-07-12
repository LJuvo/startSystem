<template>
  <base-layout activeIndex="1">
    <section class="exam-layout a-space-32 a-flex-row-between">
      <div class="exam-menu">
        <menu-manager
          label="推荐管理"
          :menu="examMenu"
          :initIndex="0"
          @on-check="checkMenuCell($event)"
        ></menu-manager>
      </div>
      <div class="exam-content">
        <base-title>内容</base-title>
        <HyzFTable
          :dataSource="detailDataList"
          :columns="detailDataListColumns"
        />
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
        { label: "推荐列表", icon: "logo-freebsd-devil", key: "list" },
        { label: "新增推荐", icon: "logo-freebsd-devil", key: "create" },
      ],
      examDataArr: [],
      examPageType: "exam",
      content: "",
      detailDataList: [],
      detailDataListColumns: [
        {
          title: "设备名称",
          key: "name",
          align: "center",
          // render(h, params){
          //   return <label
          //     onClick={() => that.openDeviceDetailHandler(params.row)}
          //     style="color: #0cbabd; text-decoration: underline;cursor: pointer;">
          //         {params.row.name}
          //     </label>
          // }
        },
        {
          //   title: "设备描述",
          //   key: "",
          //   align: "center",
          // },{
          title: "设备编码",
          key: "serial",
          align: "center",
        },
        {
          title: "设计编码",
          key: "design_serial",
          align: "center",
        },
        {
          title: "设备类型",
          key: "type",
          align: "center",
        },
        {
          title: "所在区域",
          key: "region_full_name",
          align: "center",
        },
        {
          title: "归属专业",
          key: "domain",
          align: "center",
        },
        {
          title: "硬件标识码",
          key: "hardware_identifi_code",
          align: "center",
        },
        {
          title: "软件标识码",
          key: "soft_identifi_code",
          align: "center",
        },
        {
          title: "管理分组",
          key: "manager_group_number",
          align: "center",
        },
        {
          title: "告警时间",
          key: "latestUpdateTime",
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
