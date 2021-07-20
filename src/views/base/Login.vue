<template>
  <div>
    <a-card style="width: 300px">
      <a-form-model
        :model="formInline"
        @submit="handleSubmit"
        @submit.native.prevent
      >
        <a-form-model-item>
          <a-input v-model="formInline.user" placeholder="Username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input
            v-model="formInline.password"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formInline.user === '' || formInline.password === ''"
          >
            Log in
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      formInline: {
        user: "Juvos",
        password: "juvos",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      const hide = this.$message.loading("Login in progress..", 0);
      console.log(this.formInline);
      Bmob.User.login(this.formInline.user, this.formInline.password)
        .then((res) => {
          setTimeout(hide, 100);
          console.log("setUserInfo ->", res);
          localStorage.setItem("token", res.sessionToken);
          localStorage.setItem("userInfo", JSON.stringify(res));
          this.$store.dispatch("setUserInfo", res);

          this.$message.success("Loading finished", 1).then(() => {
            this.$router.push("/");
          });
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("Loading error", 2);
        });
    },
  },
};
</script>
<style lang="less" scoped></style>
