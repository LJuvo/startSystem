<template>
    <div>
        <h2>资源建模篇</h2>
        <p>Resource</p>
        <p>
            基于web建立资源模型及资源动态参数
        </p>
        <p>一期包含建库、建表、建字段、字段修改、表关联、定义插入数据接口、定义查询接口、定义回传参数</p>
        <p>二期包含app建模</p>
        <p>三期包含图形拖拽化建模</p>
        <p>四期包含科技化建模</p>
       <div>
           <table>
               <tr>
                   <th>标题</th>
                   <th>内容</th>
                   <th>实现</th>
                   <th>示例</th>
                   <th>开放类型</th>
                   <th>描述</th>
                </tr>
                <tr v-for="(ele, index) in tableData" :key="index">
                    <td>{{ele.title}}</td>
                    <td>{{ele.content}}</td>
                    <td><div style="width: 200px;font-size:10px;">{{ele.code}}</div></td>
                </tr>
           </table>
       </div>
       <div>
           <table>
               <tr>
                   <th>标题</th>
                   <th>内容</th>
                   <th>实现</th>
                   <th>示例</th>
                   <th>开放类型</th>
                   <th>描述</th>
                </tr>
                <tr v-for="(ele, index) in secondData" :key="index">
                    <td>{{ele.title}}</td>
                    <td>{{ele.content}}</td>
                    <td><div style="width: 200px;font-size:10px;">{{ele.code}}</div></td>
                </tr>
           </table>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData: [
                {
                    title: "建库",
                    content: "动态创建数据库",
                    code: `
                    CREATE DATABASE myDB
                    `
                },
                {
                    title: "建表",
                    content: "动态创建数据表",
                     code: `
                    CREATE TABLE sb_user (
                    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
                    firstname VARCHAR(30) NOT NULL,
                    lastname VARCHAR(30) NOT NULL
                    )
                    `
                },
                {
                    title: "动态增加字段",
                    content:"",
                    code: `ALTER TABLE 表名 ADD 字段 字段类型`
                },
                {
                    title: "获取表所有字段及类型",
                    content: "",
                    code: `SHOW FULL COLUMNS FROM student`
                },
                {
                    title: "插入数据",
                    code:  `INSERT INTO MyGuests (firstname, lastname, email) VALUES ('John', 'Doe', 'john@example.com')`
                },
                {
                    title: "插入多条数据",
                    code: `INSERT INTO MyGuests (firstname, lastname, email) VALUES ('John', 'Doe', 'john@example.com');
                            INSERT INTO MyGuests (firstname, lastname, email) VALUES ('Mary', 'Moe', 'mary@example.com');`
                },
                {
                    title: "优化方案：MySQLi 预处理语句"
                }
            ],

            secondData: [
                {
                    title: "动态创建接口",
                    content: "完善业务SQL短板"
                },
                {
                    title: "定义传入字段，定义传出字段",
                    content: "建立业务SQL存储表，实现表与接口关联"
                },
                {
                    title: "定义查询接口，默认查询字段，定义必传查询字段，定义辅传字段",
                    content: "建立业务SQL存储表，实现表与接口关联"
                },
                {
                    title: "定义插入数据接口",
                    content: "建立业务SQL存储表，实现表与接口关联"
                },
                {
                    title: "定义删除数据接口",
                    content: "建立业务SQL存储表，实现表与接口关联"
                },
                {
                    title: "定义修改数据接口",
                    content: "建立业务SQL存储表，实现表与接口关联"
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>

</style>


