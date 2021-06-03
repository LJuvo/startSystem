<template>
    <a-card :title="title">
        <template slot="actions" class="ant-card-actions">
            <a-icon key="setting" type="setting" />
            <a-icon key="edit" type="edit" />
            <a-icon key="ellipsis" type="ellipsis" />
        </template>
        <p>card content</p>
    </a-card>
</template>
<script>
export default {
    props:{
        title: {
            type: String,
            default: "Card title"
        }
    },
  data() {
    return {
      
    };
  },
};
</script>