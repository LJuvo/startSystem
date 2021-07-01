<template>
  <div class="home-card">
    <div class="home-card-pic"></div>
    <div class="home-card-info">
      <h3>标题信息</h3>
      <span>分类信息</span>
      <div class="home-card-info-btn">
        <span>查看</span>
        <span>评论</span>
        <span>点赞</span>
      </div>
    </div>
    <div class="home-card-author">
      <div class="home-card-author-left">
        <div class="home-card-author-avatar"></div>
        <h3>北海老船长</h3>
      </div>
      <div class="home-card-author-time">
        <span>一天前</span>
      </div>
    </div>
  </div>
</template>
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
    }
  }
  &-author {
    width: 100%;
    height: 50px;
    padding: 0 15px;
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
      width: 40px;
      height: 40px;
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
