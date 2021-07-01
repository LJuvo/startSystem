<template>
  <div class="nav-wrapper">
    <div class="nav-wrapper-content">
      <h1>Banner</h1>
    </div>
    <div class="nav-wrapper-search">
      <div class="banner-search">
        <input class="banner-search-input" placeholder="最佳搜索" />
        <amy-btn shape="circle" icon="ios-search"></amy-btn>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.nav-wrapper {
  height: 500px;
  width: 100%;
  background: #c4c4c4;
  position: relative;
  &-content {
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: center;
    h1 {
      padding-top: 100px;
    }
  }
  &-search {
    position: absolute;
    z-index: 99;
    top: 240px;
    left: calc(50% - 300px);
  }
}
.banner-search {
  width: 600px;
  height: 60px;
  color: #666;
  background: #fff;
  border-radius: 30px;
  padding: 4px 20px 4px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &-input {
    flex: 1;
    outline-color: invert;
    outline-style: none;
    outline-width: 0px;
    border: none;
    border-style: none;
    text-shadow: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    outline-color: transparent;
    box-shadow: none;
    background: none;
    border: none;
    font-size: 18px;
  }
}
</style>
