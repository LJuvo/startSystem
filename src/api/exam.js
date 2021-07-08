const examTemp = {
  question: "",
  answer: "",
  coding: "",
  type: "",
  range: "",
  order: "",
};
const examTableName = "exam";
export const StarExam = {
  create: (obj) => {
    const query = Bmob.Query(examTableName);
    query.set("question", obj.question ? obj.question : "");
    query.set("answer", obj.answer ? obj.answer : "");
    query.set("coding", obj.coding ? obj.coding : "");
    query.set("type", obj.type ? obj.type : "");
    query.set("range", obj.range ? obj.range : "");
    query.set("order", obj.order ? obj.order : "");
    return query.save();
  },
  list: () => {
    const query = Bmob.Query(examTableName);
    return query.find();
  },
  page: () => {
    const query = Bmob.Query(examTableName);
    // 返回最多10条数据
    query.limit(10);
    // 跳过查询的前多少条数据来实现分页查询
    query.skip(10);
    query.find().then((res) => {
      console.log(res);
    });
  },
};

export const ExamQuestion = [
  {
    question: "在 JavaScript 中创建对象的可行方法有哪些？",
    answer: "",
    coding: "",
    type: "",
    range: "",
    order: "",
  },
  {
    question: "什么是原型链？",
    answer: "",
    coding: "",
    type: "",
    range: "",
    order: "",
  },
  {
    question: "call、apply、bind有什么区别？",
    answer: "",
    coding: "",
    type: "",
    range: "",
    order: "",
  },
  {
    question: "什么是 JSON 及其常见操作？",
    answer: "",
    coding: "",
    type: "",
    range: "",
    order: "",
  },
  {
    question: "数组slice()方法的目的是什么？",
    answer: "",
    coding: "",
    type: "",
    range: "",
    order: "",
  },
];
