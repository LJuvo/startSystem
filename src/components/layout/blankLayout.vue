<template>
  <router-view />
</template>
<script>
export default {
  mounted() {
    this.checkToken();
  },
  methods: {
    checkToken() {
      const token = localStorage.getItem("token");
      if (!token) {
        this.$router.push("/login");
      } else {
        this.$store.dispatch(
          "setUserInfo",
          JSON.parse(localStorage.getItem("userInfo"))
        );
      }
      console.log("token->", token);
    },
  },
};
</script>
