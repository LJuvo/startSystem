<template>
  <Form
    ref="formValidate"
    :model="formValidate"
    :rules="ruleValidate"
    :label-width="80"
  >
    <FormItem label="Name" prop="name">
      <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="E-mail" prop="mail">
      <Input
        v-model="formValidate.mail"
        placeholder="Enter your e-mail"
      ></Input>
    </FormItem>
    <FormItem label="City" prop="city">
      <Select v-model="formValidate.city" placeholder="Select your city">
        <Option value="beijing">New York</Option>
        <Option value="shanghai">London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
    </FormItem>
    <FormItem label="Date">
      <Row>
        <Col span="11">
          <FormItem prop="date">
            <DatePicker
              type="date"
              placeholder="Select date"
              v-model="formValidate.date"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="2" style="text-align: center">-</Col>
        <Col span="11">
          <FormItem prop="time">
            <TimePicker
              type="time"
              placeholder="Select time"
              v-model="formValidate.time"
            ></TimePicker>
          </FormItem>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="Gender" prop="gender">
      <RadioGroup v-model="formValidate.gender">
        <Radio label="male">Male</Radio>
        <Radio label="female">Female</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="Hobby" prop="interest">
      <CheckboxGroup v-model="formValidate.interest">
        <Checkbox label="Eat"></Checkbox>
        <Checkbox label="Sleep"></Checkbox>
        <Checkbox label="Run"></Checkbox>
        <Checkbox label="Movie"></Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="Desc" prop="desc">
      <Input
        v-model="formValidate.desc"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 5 }"
        placeholder="Enter something..."
      ></Input>
    </FormItem>
    <Form v-for="(item, key) in options" :key="key">
      <Select
        v-if="item.type === 'select'"
        v-model="formValidate[item.key]"
        :placeholder="item.placeholder"
      >
        <Option
          v-for="(cell, index) in item.select"
          :key="index"
          :value="cell.val"
          >{{ cell.title }}</Option
        >
      </Select>
      <RadioGroup v-if="item.type === 'radio'" v-model="formValidate[item.key]">
        <Radio
          v-for="(cell, index) in item.radio"
          :key="index"
          :label="cell.val"
          >{{ cell.title }}</Radio
        >
      </RadioGroup>
      <CheckboxGroup
        v-if="item.type === 'checkbox'"
        v-model="formValidate[item.key]"
      >
        <Checkbox
          v-for="(cell, index) in item.checkbox"
          :key="index"
          :label="cell.val"
        ></Checkbox>
      </CheckboxGroup>
      <Input
        v-if="item.type === 'textarea'"
        v-model="formValidate[item.key]"
        :type="item.type"
        :autosize="{ minRows: item.minRows ? item.minRows : 2, maxRows: 5 }"
        placeholder="Enter something..."
      ></Input>
      <Input
        v-else
        v-model="formValidate[item.key]"
        placeholder="Enter something..."
      ></Input>
    </Form>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')"
        >Submit</Button
      >
      <Button @click="handleReset('formValidate')" style="margin-left: 8px"
        >Reset</Button
      >
    </FormItem>
  </Form>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => {
        return [
          { title: "标题", type: "input", key: "a" },
          { title: "标题", type: "email", key: "b" },
          {
            title: "标题",
            type: "select",
            select: [
              { title: "London", val: "London" },
              { title: "Sydney", val: "Sydney" },
            ],
            key: "c",
          },
          { title: "标题", type: "date", key: "d" },
          {
            title: "标题",
            type: "radio",
            radio: [
              { title: "London", val: "London" },
              { title: "Sydney", val: "Sydney" },
            ],
            key: "e",
          },
          { title: "标题", type: "checkbox", key: "f" },
          { title: "标题", type: "textarea", key: "g" },
        ];
      },
    },
  },
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: "",
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur",
          },
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur",
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" },
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change",
          },
        ],
        gender: [
          {
            required: true,
            message: "Please select gender",
            trigger: "change",
          },
        ],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "Choose at least one hobby",
            trigger: "change",
          },
          {
            type: "array",
            max: 2,
            message: "Choose two hobbies at best",
            trigger: "change",
          },
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "change",
          },
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please enter a personal introduction",
            trigger: "blur",
          },
          {
            type: "string",
            min: 20,
            message: "Introduce no less than 20 words",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>
