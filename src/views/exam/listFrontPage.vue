<template>
  <div class="a-flex-column-start exam-list">
    <div class="a-flex-row-between">
      <div class="a-flex-row-start"></div>
      <div class="a-flex-row-end">
        <Input
          search
          enter-button
          placeholder="请输入查询题目信息"
          style="margin-right: 10px"
          v-model="filterText"
          @on-search="filterPage()"
        />
        <Button
          type="primary"
          icon="ios-refresh"
          size="small"
          @click="refreshExamList()"
          >刷新</Button
        >
      </div>
    </div>
    <div class="exam-list">
      <Table :loading="examLoading" :columns="examColumns" :data="examData">
        <template slot-scope="{ row }" slot="question">
          <Poptip
            title="Title"
            content="content"
            width="400"
            transfer
            word-wrap
          >
            <strong>{{ row.question }}</strong>
            <div slot="title">{{ row.question }}</div>
            <div slot="content">
              {{ row.answer }}
            </div>
          </Poptip>
        </template>
        <template slot-scope="{ row }" slot="answer">
          <Tooltip :content="row.answer" theme="light" max-width="400" transfer>
            <div class="exam-list-cell">{{ row.answer }}</div>
          </Tooltip>
        </template>
        <template slot-scope="{ row }" slot="coding">
          <Tooltip :content="row.coding" theme="light" max-width="400" transfer>
            <div class="exam-list-cell">{{ row.coding }}</div>
          </Tooltip>
        </template>
      </Table>
    </div>
    <div class="a-flex-row-end">
      <Page
        :total="totalNum"
        :current="currentPage"
        :page-size="pageSize"
        size="small"
        show-elevator
        show-sizer
        show-total
        @on-change="changePage($event)"
        @on-page-size-change="changePageSize($event)"
      />
    </div>
  </div>
</template>
<script>
import { StarExam } from "@/api/exam.js";
export default {
  data() {
    return {
      examLoading: false,
      examColumns: [],
      examData: [],
      baseDataArr: [],
      filterText: "",
      pageSize: 5,
      totalNum: 0,
      allPage: 0,
      currentPage: 1,
    };
  },
  mounted() {
    this.initExamList();
  },
  methods: {
    initExamList() {
      this.examColumns = [
        {
          title: "题目",
          key: "question",
          slot: "question",
          width: 320,
          fixed: "left",
        },
        {
          title: "答案",
          key: "answer",
          slot: "answer",
          width: 240,
        },
        {
          title: "示例",
          key: "coding",
          slot: "coding",
          width: 300,
        },
        {
          title: "类型",
          key: "type",
          align: "center",
          width: 100,
        },
        {
          title: "范围",
          key: "range",
          width: 150,
        },
        {
          title: "排序",
          key: "order",
          align: "center",
          width: 80,
        },
        {
          title: "创建时间",
          key: "createdAt",
          align: "center",
          width: 150,
        },
        {
          title: "更新时间",
          key: "updatedAt",
          align: "center",
          width: 150,
        },
      ];
      this.examLoading = true;
      StarExam.list()
        .then((res) => {
          console.log("examTableName ->", res);
          this.baseDataArr = res;
          this.filterPage();
          this.examLoading = false;
          this.$emit("on-fetch", res);
        })
        .catch(() => {
          this.baseDataArr = [];
        });
    },
    filterPage() {
      let list = JSON.parse(JSON.stringify(this.baseDataArr));
      if (this.filterText) {
        list = _.filter(list, (o) => {
          return o.question.indexOf(this.filterText) > -1;
        });
      }
      this.totalNum = list.length;
      const pageList = _.chunk(list, this.pageSize);
      this.allPage = pageList.length;
      if (this.currentPage > this.allPage) this.currentPage = 1;
      this.examData = pageList[this.currentPage - 1];
    },
    changePage(index) {
      this.currentPage = index;
    },
    refreshExamList() {
      this.initExamList();
    },
    addExamToList(val) {
      this.baseDataArr = val;
      this.filterPage();
    },
    changePage(val) {
      this.currentPage = val;
      this.filterPage();
    },
    changePageSize(val) {
      this.pageSize = val;
      this.filterPage();
    },
  },
};
</script>
<style lang="less" scoped>
.exam-list {
  width: 100%;
  margin: 10px 0;
  &-cell {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}
</style>
<style lang="less">
.ivu-poptip-body-content-word-wrap {
  white-space: pre-line;
}
</style>
