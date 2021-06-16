<template>
  <div class="search-element">
    <a-input-search
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
  </div>
</template>
<script>
export default {
  methods: {
    onSearch() {},
  },
};
</script>
<style lang="less" scoped>
.search {
  &-element {
    width: 400px;
    height: 80px;
    padding: 0 40px;
    margin: 0 auto;
    border-radius: 80px;
    box-shadow: 0 0 5px #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
