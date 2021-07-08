<template>
  <div class="a-flex-column-start exam-list">
    <div class="a-flex-row-between">
      <div class="a-flex-row-start"></div>
      <div class="a-flex-row-end">
        <Button
          type="primary"
          icon="ios-refresh"
          size="small"
          @click="refreshExamList"
          >刷新</Button
        >
      </div>
    </div>
    <div class="exam-list">
      <Table :loading="examLoading" :columns="examColumns" :data="examData">
        <template slot-scope="{ row }" slot="question">
          <Poptip title="Title" content="content" placement="right">
            <strong>{{ row.question }}</strong>
            <div slot="title">{{ row.question }}</div>
            <div slot="content">
              {{ row.answer }}
            </div>
          </Poptip>
        </template>
      </Table>
    </div>
  </div>
</template>
<script>
import { StarExam } from "@/api/exam.js";
export default {
  data() {
    return {
      examLoading: false,
      examColumns: [
        {
          title: "题目",
          key: "question",
          width: 320,
          fixed: "left",
        },
        {
          title: "答案",
          key: "answer",
          width: 240,
        },
        {
          title: "示例",
          key: "coding",
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
      ],
      examData: [],
    };
  },
  methods: {
    refreshExamList() {
      this.examLoading = true;
      StarExam.list().then((res) => {
        console.log("examTableName ->", res);
        this.examData = res;
        this.examLoading = false;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.exam-list {
  width: 100%;
  margin: 10px 0;
}
</style>
