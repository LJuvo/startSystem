<template>
  <a-card title="测试验证集">
    <a-card-grid style="width:25%;text-align:center">
        <div>
            <a-input v-model="formInline.user" placeholder="Username">
                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
            <a-input v-model="formInline.password" placeholder="Passwordd">
                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
            <a-button @click="postUser()">新建</a-button>
            <a-button @click="postBook()">新建</a-button>
        </div>
    </a-card-grid>
    <a-card-grid style="width:75%;text-align:center">
        <a-row :gutter="16">
      <a-col :span="8" v-for="(ele, index) in baseArr" :key="index">
        <DataCell :title="ele.firstname"></DataCell>
      </a-col>
      <a-col :span="8">
        <DataCell></DataCell>
      </a-col>
      <a-col :span="8">
        <DataCell></DataCell>
      </a-col>
    </a-row>
    </a-card-grid>
  </a-card>
</template>

<script>
import { baseSiteUrl } from "./../config/site.base";
import DataCell from "./DataComps/DataCell";
export default {
    components: {
        DataCell
    },
    data() {
        return {
            formInline: {},
            baseArr: [],
        };
    },
    mounted(){
        this.fetchBaseList();
    },
    methods:{
        fetchBaseList(){
            this.$axios({
                url: baseSiteUrl + "api/list.php",
                method: "get"
            }).then(res => {
                console.log("alarmArr", res);
                this.baseArr = res.data;
            });
        },
        postUser(){
            this.$axios({
                url: "http://192.168.64.2/startStart/api/post.php",
                method: "post",
                data: {
                    firstname: "AAA",
                    lastname: "ABB"
                }
            }).then(res => {
                console.log("alarmArr", res);
                // this.baseArr = res.data;
            });
        },
        postBook(){
            this.$axios({
                url: "http://test2.acgbear.cn/api/book.php",
                method: "post",
                data: {
                    personname: "花开全季",
                    phone: "13024344909"
                }
            }).then(res => {
                console.log("alarmArr", res);
                // this.baseArr = res.data;
            });
        }
    }
};
</script>
<style lang="less" scoped>

</style>