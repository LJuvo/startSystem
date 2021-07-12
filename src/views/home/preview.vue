<template>
  <div>
    <mark-down :content="content" :highlight="highlight"></mark-down>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
    },
    highlight: {
      type: Function,
      default(code) {
        return code;
      },
    },
  },
  components: {
    "mark-down": () => import("./md.vue"),
  },
};
</script>
