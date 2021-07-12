<template>
  <div class="a-flex-column-start exam-create">
    <div class="a-flex-row-between">
      <div class="a-flex-row-start a-flex-1">
        <base-input
          label="题目"
          v-model="examQuestion"
          placeholder="请输入题目"
          class="exam-create-cell"
        ></base-input>
      </div>

      <div class="a-flex-row-end">
        <Button
          type="primary"
          icon="ios-add"
          size="small"
          :loading="createLoading"
          @click="createLoading ? '' : addExam()"
          >创建</Button
        >
        <!-- <Button type="primary" icon="ios-add" size="small" @click="addGroup">批量创建</Button> -->
      </div>
    </div>
    <div class="a-flex-row-start exam-create">
      <base-input
        label="答案"
        v-model="examAnswer"
        placeholder="请输入答案"
        type="textarea"
        align="flex-start"
      ></base-input>
    </div>
    <div class="a-flex-row-start exam-create">
      <base-input
        label="详解"
        v-model="examTextArea"
        type="textarea"
        align="flex-start"
        placeholder="请输入详解"
      ></base-input>
    </div>
  </div>
</template>
<script>
import { StarExam, ExamQuestion } from "@/api/exam.js";
export default {
  props: {
    examData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    "base-input": () => import("@/components/title/input.vue"),
  },
  data() {
    return {
      examQuestion: "",
      examAnswer: "",
      examTextArea: "",
      createLoading: false,
    };
  },
  watch: {
    examQuestion(val) {
      console.log("examTitle ->", val);
    },
  },
  methods: {
    addExam() {
      console.log(
        "similar('黑衣人3','mmm黑豹') ->",
        this.similar("黑衣人3", "豹人")
      );
      return;
      if (!this.examQuestion) return this.$Message.warning(`请输入题目！`);
      if (
        _.find(this.examData, (o) => {
          return o.question == this.examQuestion;
        })
      )
        return this.$Message.warning(`${this.examQuestion}已存在！`);
      this.createLoading = true;
      const examObj = {
        question: this.examQuestion,
        answer: this.examAnswer,
        coding: `${this.examTextArea}`,
        type: "JavaScript",
        range: "JavaScript",
        order: "",
      };

      console.log("examObj ->", examObj);
      StarExam.create(examObj)
        .then((res) => {
          console.log("callback ->", res);
          this.$emit("on-create", examObj);
          this.$Message.success(`添加 ${this.examQuestion} 成功！`);
        })
        .catch((err) => {
          console.log("fallback ->", err);
          this.$Message.error(`添加 ${this.examQuestion} 失败！`);
        })
        .finally(() => {
          this.createLoading = false;
        });
    },
    addGroup() {
      const queryArray = new Array();

      ExamQuestion.forEach((ele) => {
        const examObj = {
          question: ele.question,
          answer: ele.answer,
          coding: ele.coding,
          type: ele.type,
          range: ele.range,
          order: "",
        };

        var queryObj = Bmob.Query("exam");

        Object.keys(examObj).forEach((ele) => {
          queryObj.set(ele, examObj[ele]);
        });
        queryArray.push(queryObj);
      });

      // 传入刚刚构造的数组
      Bmob.Query("exam")
        .saveAll(queryArray)
        .then((result) => {
          console.log("callback ->", result);
        })
        .catch((err) => {
          console.log("fallback ->", err);
        });
    },
    similar(a, b) {
      if (!a || !b) {
        return 0;
      }
      if (a.length > b.length) {
        var t = b;
        b = a;
        a = t;
      } // 保证 a <= b
      var al = a.length,
        bl = b.length;
      var mp = []; // 一个表
      var i, j, ai, lt, tmp; // ai：字符串a的第i个字符。 lt：左上角的值。 tmp：暂存新的值。
      for (i = 0; i <= bl; i++) {
        mp[i] = i;
      }
      for (i = 1; i <= al; i++) {
        ai = a.charAt(i - 1);
        lt = mp[0];
        mp[0] = mp[0] + 1;
        for (j = 1; j <= bl; j++) {
          tmp = Math.min(
            mp[j] + 1,
            mp[j - 1] + 1,
            lt + (ai == b.charAt(j - 1) ? 0 : 1)
          );
          lt = mp[j];
          mp[j] = tmp;
        }
      }
      return 1 - mp[bl] / bl;
    },
  },
};
</script>
<style lang="less" scoped>
.exam-create {
  width: 100%;
  margin: 10px 0;
  &-cell {
    margin-right: 10px;
  }
}
</style>
