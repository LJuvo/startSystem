<template>
  <a-form :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="标题">
      <a-input v-model:value="formData.title" />
    </a-form-item>
    <a-form-item label="描述信息">
      <a-input v-model:value="formData.description" type="textarea" />
    </a-form-item>
    <a-form-item label="示意图">
      <a-input v-model:value="formData.signal" />
    </a-form-item>
    <a-form-item label="" v-if="formData.signal">
      <div style="height: 200px">
        <img style="height: 100%" :src="formData.signal" />
      </div>
    </a-form-item>
    <a-form-item label="领域类型">
      <a-radio-group v-model:value="formData.type">
        <a-radio value="1">Sponsor</a-radio>
        <a-radio value="2">Venue</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="标签">
      <a-input v-model:value="formData.mark" />
    </a-form-item>
    <a-form-item label="编辑类型">
      <a-select v-model:value="formData.infoType" placeholder="请选择编辑类型">
        <a-select-option value="MARKDOWN">MarkDown</a-select-option>
        <a-select-option value="RICHEXT">富文本</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="内容编辑器">
      <markdown-pro v-model="contentInfo"></markdown-pro>
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px">Cancel</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { MarkdownPro } from "vue-meditor";
export default {
  components: {
    "markdown-pro": MarkdownPro,
  },
  data() {
    return {
      formData: {
        title: "围绕应用生命周期的编排设计",
        signal:
          "https://img.zcool.cn/community/01b6d060e40a9211013eaf70e00c31.jpg@520w_390h_1c_1e_2o_100sh.jpg",
      },
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      contentInfo: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.formData, JSON.stringify(this.contentInfo));
      this.createWorksInfo();
    },
    createWorks(objectId) {
      const userInfo = this.$store.getters.getUserInfo;
      const query = Bmob.Query("works");
      query.set("title", this.formData.title);
      query.set("description", this.formData.description);
      const contentId = this.setPointer("works_info", objectId); //关联字段
      query.set("infoId", contentId);
      const infoType = this.setPointer("category", "RjzKgLLg"); //关联字段
      query.set("type", infoType);
      query.set("signal", this.formData.signal);
      query.set("mark", this.formData.mark);
      const userObjId = this.setPointer("_User", userInfo.objectId); //关联字段
      query.set("publisherId", userObjId);
      query.set("publisherHead", userInfo.head);
      query.set("publisherName", userInfo.username);
      query
        .save()
        .then((res) => {
          console.log("works->", res);
        })
        .catch((err) => {
          console.log("works error ->", err);
        });
    },
    createWorksInfo() {
      const query = Bmob.Query("works_info");
      query.set("title", this.formData.title);
      const infoType = this.setPointer("category", "bDoY6446"); //关联字段
      query.set("type", infoType);
      query.set("content", JSON.stringify(this.contentInfo));
      query
        .save()
        .then((res) => {
          console.log("works info ->", res);
          this.createWorks(res.objectId);
        })
        .catch((err) => {
          console.log("works info error->", err);
        });
    },
    setPointer(tableName, objectId) {
      return {
        __type: "Pointer",
        className: tableName,
        objectId: objectId,
      };
    },
  },
};
</script>
