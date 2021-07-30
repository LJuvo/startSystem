<template>
  <header class="base-header">
    <div class="amy-base-wrapper a-flex-row">
      <div class="amy-base-logo">STARERA星纪元</div>
      <div class="a-flex-row-end a-flex-1">
        <div class="a-flex-row-center a-flex-1">
          <div class="a-flex-row-start">
            <header-cell
              v-for="(item, index) in headerArr"
              :key="index"
              :label="item.title"
              :active="activeIndex === index + ''"
              @on-check="checkHeadCell(index)"
            ></header-cell>
          </div>
        </div>
        <div class="a-flex-row-end">
          <div class="base-header-btn" v-if="userInfo.sessionToken">
            <a @click="toLinkPath('/product')">上传</a>
          </div>
          <div class="base-header-btn" v-if="!userInfo.sessionToken">
            <a @click="toLinkPath('/login')">登录</a>
          </div>
          <!-- <div class="base-header-btn" @click="toRegister()">注册</div> -->
          <div class="base-header-btn" v-if="userInfo.sessionToken">
            <div class="base-header-pic">
              <img :src="userInfo.head" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import HeaderCell from "./comps/headerCell.vue";
import { setTimeout } from "timers";
export default {
  props: {
    activeIndex: {
      type: String,
      default: "0",
    },
  },
  components: {
    "header-cell": HeaderCell,
  },
  data() {
    return {
      baseHeaderArr: [
        { title: "首页", url: "/" },
        { title: "作品", url: "/works" },
        { title: "素材资源", url: "/resources" },
        { title: "社区", url: "/community" },
        { title: "网站导航", url: "/webNav" },
      ],
      headerArr: [],
      userInfo: {},
    };
  },
  mounted() {
    this.initHeaderArr();
    this.$nextTick(() => {
      this.userInfo = this.$store.getters.getUserInfo;
    });
  },
  methods: {
    initHeaderArr() {
      this.headerArr = this.baseHeaderArr;
    },
    checkHeadCell(index) {
      const urlObj = this.headerArr[index];
      this.toLinkPath(urlObj.url);
    },
    toLinkPath(path) {
      return this.$router.push({ path });
    },
    toRegister() {},
  },
};
</script>
<style lang="less" scoped>
@import url("@/common/amy.less");
.base-header {
  height: 60px;
  background: #ffe300;
  color: #282828;
  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    color: #282828;
    a {
      color: #282828;
    }
  }
  &-pic {
    margin-left: 15px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
