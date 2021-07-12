<template>
  <div class="page-plus-root">
    <Page
      ref="pagePlus"
      :current="current"
      :total="total"
      :pageSize="pageSize"
      :pageSizeOpts="pageSizeOpts_"
      :placement="placement"
      :transfer="transfer"
      :size="size"
      :simple="simple"
      :showTotal="showTotal"
      :showElevator="showElevator"
      :showSizer="showSizer"
      :className="className"
      :styles="styles"
      :prevText="prevText"
      :nextText="nextText"
      :disabled="disabled"
      @on-change="onChangeHandler"
      @on-page-size-change="onPageSizeChangeHandler"
    >
      <slot></slot>
    </Page>
    <Modal
      v-model="isShowCustomPagingInput"
      :width="200"
      :footer-hide="true"
      :mask-closable="false"
    >
      <Input
        v-model="customPagingInput"
        search
        type="number"
        enter-button="确定"
        placeholder="输入分页数"
        @on-search="customPagingInputHandler"
      />
    </Modal>
  </div>
</template>
<script>
/**
 * ##iView Page 增强版##
 *
 * **Props**
 *  + customPaging; true 开启自定义分页， false 不开启自定义分页，默认关闭
 *
 * **API**
 *
 * **Event**
 *
 * @author Chorin <xiaolinxuan@foxmail.com>
 * @date 2020-04-08
 */
export default {
  name: "PagePlus",
  components: {},
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizeOpts: {
      type: Array,
      default() {
        return [10, 20, 30, 40];
      }
    },
    placement: {
      default: "bottom"
    },
    transfer: {
      type: Boolean
    },
    size: {},
    simple: {
      type: Boolean,
      default: false
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    showElevator: {
      type: Boolean,
      default: false
    },
    showSizer: {
      type: Boolean,
      default: false
    },
    className: {
      type: String
    },
    styles: {
      type: Object
    },
    prevText: {
      type: String,
      default: ""
    },
    nextText: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customPaging: {
      type: Boolean,
      default: false
    }
  },
  watch:{
    pageSizeOpts: {
      immediate: true,
      handler(v){
        this.pageSizeOpts_ = v;
      },
    }
  },
  data() {
    return {
      pageSizeOpts_: [],
      isShowCustomPagingInput: false,
      customPagingHandlerCallback: null,
      customPagingInput: ""
    };
  },
  mounted() {
    if(this.customPaging){
      this.initCustomPaging();
    }
  },
  methods: {
    /**
     * 初始化自定义分页
     * @returns {void}
     * @author Chorin <xiaolinxuan@foxmail.com>
     * @date 2020-04-08
     */
    initCustomPaging(){
      ///添加自定义标记
      if(this.pageSizeOpts_[ this.pageSizeOpts_.length - 1] !== -1){
        this.pageSizeOpts_.push(-1);
      }
      this.$nextTick(()=>{
        this.pageInterceptor(this.customPagingHandler);
        this.injectCustomPagingStyle();
      });
    },

    /**
     * 注册页数拦截器，
     * @returns {void}
     * @author Chorin <xiaolinxuan@foxmail.com>
     * @date 2020-04-08
     */
    pageInterceptor(interceptor) {
      let pageVm = this.$refs.pagePlus;
      let { onSize } = pageVm;
      pageVm.onSize = pageSize => {
        interceptor(pageSize, size => {
          onSize(size);
        });
      };
    },

    /**
     * 自定义分页处理器
     * @returns {void}
     * @author Chorin <xiaolinxuan@foxmail.com>
     * @date 2020-04-08
     */
    customPagingHandler(pageSize, callback) {
      if (pageSize !== -1) {
        callback(pageSize);
      } else {
        /// 自定义分页
        this.customPagingInput = "";
        this.isShowCustomPagingInput = true;
        this.customPagingHandlerCallback = callback;
      }
    },

    /**
     * 注入自定义分页样式
     * @returns {void}
     * @author Chorin <xiaolinxuan@foxmail.com>
     * @date 2020-04-08
     */
    injectCustomPagingStyle() {
      let pageVm = this.$refs.pagePlus;
      let domList = pageVm.$el.querySelectorAll(".ivu-select-dropdown-list");
      let children = domList[0].children;
      let customPaging = domList[0].children[children.length - 1];
      customPaging.innerText = "自定义";
    },

    /**
     * 自定义分页
     * @returns {void}
     * @author Chorin <xiaolinxuan@foxmail.com>
     * @date 2020-04-08
     */
    customPagingInputHandler(v) {
      v = v | 0;
      if(!this.pagingVerifier(v)){
        return;
      }
      let { pageSizeOpts_ } = this;
      /// 将自定义分页插入分页选项
      if (pageSizeOpts_.indexOf(v) === -1) {
        let newPageSizeOpts = [],
          isFind = false;
        pageSizeOpts_.forEach(opt => {
          if (!isFind && (opt >= v || opt === -1)) {
            newPageSizeOpts.push(v);
            isFind = true;
          }
          newPageSizeOpts.push(opt);
        });
        this.pageSizeOpts_ = newPageSizeOpts;
      }
      this.customPagingHandlerCallback(v);
      this.isShowCustomPagingInput = false;
    },

    /**
     * 页数验证器, true 通过
     * @returns {void}
     * @author Chorin <xiaolinxuan@foxmail.com>
     * @date 2020-04-08
     */
    pagingVerifier(v){
      let pass = true, message = "";
      if (this.pageSize === v) {
        message = `当前分页数已经为${v} 条/页`;
        pass =  false;
      } else if (v <= 0) {
        message = `请输入大于0的整数`;
        pass =  false;
      }else if(v > 1000){
        message = `每页最多不超过1000条`;
        pass =  false;
      }
      !pass &&  this.$Message.warning(message);
      return pass;
    },
    

    onChangeHandler(...args) {
      this.$emit("on-change", ...args);
    },
    onPageSizeChangeHandler(...args) {
      this.$emit("on-page-size-change", ...args);
    }
  }
};
</script>
<style lang="less" scoped>
.page-plus-root {
}
</style>