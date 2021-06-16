<template>
  <a-layout-content
    :style="{
      background: '#efefef',
      height: '100%',
    }"
  >
    <div class="release-box">
      <!-- <a-card>
      <a-card-grid style="width:75%;height: 100%"> </a-card-grid>
      <a-card-grid style="width:25%;text-align:center">
        <a-card style="width: 100%">
          <template slot="actions" class="ant-card-actions">
            <a-icon key="setting" type="setting" />
            <a-icon key="edit" type="edit" />
            <a-icon key="ellipsis" type="ellipsis" />
          </template>
          <a-card-meta title="新建数据库"> </a-card-meta>
        </a-card>
      </a-card-grid>
    </a-card> -->

      <div class="release-box-content">
        col-18 col-push-6
      </div>
      <div class="release-box-tools">
        col-18 col-push-6
      </div>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.release-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &-content {
    flex: 1;
    height: 100%;
  }
  &-tools {
    height: 100%;
    width: 360px;
  }
}
</style>
