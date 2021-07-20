<template>
  <div class="home-card">
    <div class="home-card-pic">
      <a @click="cardLink()">
        <img :src="cardInfo.signal" />
      </a>
    </div>
    <div class="home-card-info">
      <a @click="cardLink()">
        <h3>{{ cardInfo.title ? cardInfo.title : "" }}</h3>
      </a>
      <span>{{ cardInfo.mark ? cardInfo.mark : "" }}</span>
      <div class="home-card-info-btn">
        <span>点赞 {{ cardInfo.like ? cardInfo.like : "" }}</span>
        <span>收藏 {{ cardInfo.collection ? cardInfo.collection : "" }}</span>
        <span>评论 {{ cardInfo.comment ? cardInfo.comment : "" }}</span>
      </div>
    </div>
    <div class="home-card-author">
      <div class="home-card-author-left">
        <div class="home-card-author-avatar">
          <img :src="cardInfo.publisherHead" />
        </div>
        <h3>{{ cardInfo.publisherName ? cardInfo.publisherName : "" }}</h3>
      </div>
      <div class="home-card-author-time">
        <span>{{ currentDate }}前</span>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  props: {
    cardInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    currentDate() {
      let tempDate = this.cardInfo.createdAt
        ? this.cardInfo.createdAt
        : new Date();
      const hours = dayjs(new Date()).diff(dayjs(tempDate), "hour");
      return hours + "小时";
    },
  },
  methods: {
    cardLink() {
      this.$router.push({ path: `/details/${this.cardInfo.objectId}` });
    },
  },
};
</script>

<style lang="less" scoped>
.home-card {
  width: 280px;
  height: 322px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  &-pic {
    width: 100%;
    height: 172px;
    background: #c4c4c4;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-info {
    width: 100%;
    padding: 10px 15px;
    border-bottom: 1px solid #eee;
    font-size: 12px;
    h3 {
      font-size: 16px;
      margin-bottom: 5px;
    }
    &-btn {
      margin-top: 8px;
      font-size: 12px;
      span {
        margin-right: 8px;
      }
    }
  }
  &-author {
    width: 100%;
    height: 50px;
    padding: 0 15px;
    padding-bottom: 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &-left {
      flex: 1;
      color: #999999;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height: 50px;
      h3 {
        font-size: 16px;
        color: #333;
      }
    }
    &-avatar {
      width: 35px;
      height: 35px;
      background: #999;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-time {
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>
