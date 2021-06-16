<template>
  <div class="nav-element">
    <slot></slot>
  </div>
</template>
<style lang="less" scoped>
.nav-element {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &-cell {
    height: 180px;
    width: 240px;
    box-shadow: 0 0 5px #eee;
    margin-bottom: 20px;
  }
}
</style>
