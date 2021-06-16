<template>
  <div class="showcase-content">
    <!-- <div class="filter">
      <form
        id="advanced_search"
        class="ant-form ant-form-horizontal ant-advanced-search-form"
      >
        <div class="con style-con">
          <div class="filter-title">版本</div>
          <div class="filter-wrap">
            <div class="ant-row ant-form-item" style="row-gap: 0px;">
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <label
                      class="ant-checkbox-wrapper ant-checkbox-wrapper-checked"
                      ><span class="ant-checkbox ant-checkbox-checked"
                        ><input
                          id="advanced_search_versionAll"
                          type="checkbox"
                          class="ant-checkbox-input"
                          value=""
                          checked=""/><span
                          class="ant-checkbox-inner"
                        ></span></span
                      ><span
                        ><div class="filter-con style-all active">
                          全部
                        </div></span
                      ></label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="ant-row ant-form-item" style="row-gap: 0px;">
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <label class="ant-checkbox-wrapper"
                      ><span class="ant-checkbox"
                        ><input
                          id="advanced_search_level0"
                          type="checkbox"
                          class="ant-checkbox-input"
                          value=""/><span
                          class="ant-checkbox-inner"
                        ></span></span
                      ><span
                        ><div class="filter-con style-future ">
                          企业版
                        </div></span
                      ></label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="ant-row ant-form-item" style="row-gap: 0px;">
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <label class="ant-checkbox-wrapper"
                      ><span class="ant-checkbox"
                        ><input
                          id="advanced_search_level1"
                          type="checkbox"
                          class="ant-checkbox-input"
                          value=""/><span
                          class="ant-checkbox-inner"
                        ></span></span
                      ><span
                        ><div class="filter-con style-future ">
                          专业版
                        </div></span
                      ></label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="con style-con">
          <div class="filter-title">风格</div>
          <div class="filter-wrap">
            <div class="ant-row ant-form-item" style="row-gap: 0px;">
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <label
                      class="ant-checkbox-wrapper ant-checkbox-wrapper-checked"
                      ><span class="ant-checkbox ant-checkbox-checked"
                        ><input
                          id="advanced_search_styleAll"
                          type="checkbox"
                          class="ant-checkbox-input"
                          value=""
                          checked=""/><span
                          class="ant-checkbox-inner"
                        ></span></span
                      ><span
                        ><div class="filter-con style-all active">
                          全部
                        </div></span
                      ></label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="ant-row ant-form-item" style="row-gap: 0px;">
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <label class="ant-checkbox-wrapper"
                      ><span class="ant-checkbox"
                        ><input
                          id="advanced_search_style0"
                          type="checkbox"
                          class="ant-checkbox-input"
                          value=""/><span
                          class="ant-checkbox-inner"
                        ></span></span
                      ><span
                        ><div class="filter-con style-future ">
                          写实科技
                        </div></span
                      ></label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="ant-row ant-form-item" style="row-gap: 0px;">
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <label class="ant-checkbox-wrapper"
                      ><span class="ant-checkbox"
                        ><input
                          id="advanced_search_style1"
                          type="checkbox"
                          class="ant-checkbox-input"
                          value=""/><span
                          class="ant-checkbox-inner"
                        ></span></span
                      ><span
                        ><div class="filter-con style-future ">
                          未来科技
                        </div></span
                      ></label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="ant-row ant-form-item" style="row-gap: 0px;">
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <label class="ant-checkbox-wrapper"
                      ><span class="ant-checkbox"
                        ><input
                          id="advanced_search_style2"
                          type="checkbox"
                          class="ant-checkbox-input"
                          value=""/><span
                          class="ant-checkbox-inner"
                        ></span></span
                      ><span
                        ><div class="filter-con style-future ">
                          极简商务
                        </div></span
                      ></label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="con color-con">
          <div class="filter-title">颜色</div>
          <div class="filter-wrap">
            <div class="bfc-flot-left">
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label
                        class="ant-checkbox-wrapper ant-checkbox-wrapper-checked"
                        ><span class="ant-checkbox ant-checkbox-checked"
                          ><input
                            id="advanced_search_colorAll"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""
                            checked=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span
                          ><div class="filter-con color-all active">
                            全部
                          </div></span
                        ></label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bfc-overflow-hidden">
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_color0"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">橙色</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_color1"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">白色</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_color2"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">紫色</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_color3"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">红色</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_color4"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">绿色</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_color5"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">蓝色</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_color6"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">黄色</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="con industry-con">
          <div class="filter-title">行业</div>
          <div class="filter-wrap">
            <div class="bfc-flot-left">
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label
                        class="ant-checkbox-wrapper ant-checkbox-wrapper-checked"
                        ><span class="ant-checkbox ant-checkbox-checked"
                          ><input
                            id="advanced_search_industryAll"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""
                            checked=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span
                          ><div class="filter-con active">全部</div></span
                        ></label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bfc-overflow-hidden">
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="filter-con ">互联网</div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry1"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">交通</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry2"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">医疗</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry3"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">媒体</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry4"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">安防</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry5"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">工业</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry6"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">旅游</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry7"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">气象</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry8"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span
                          ><div class="filter-con ">物联网</div></span
                        ></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry9"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">环境</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry10"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">监控</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry11"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">组织</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry12"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">行政</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry13"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">金融</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry14"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">防疫</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry15"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">零售</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item" style="row-gap: 0px;">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <label class="ant-checkbox-wrapper"
                        ><span class="ant-checkbox"
                          ><input
                            id="advanced_search_industry16"
                            type="checkbox"
                            class="ant-checkbox-input"
                            value=""/><span
                            class="ant-checkbox-inner"
                          ></span></span
                        ><span><div class="filter-con ">其他</div></span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div> -->
    <ul class="list">
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/imgextra/i1/O1CN0115Mp7N1EWvGWy0mCk_!!6000000000360-2-tps-1600-900.png"
        />
        <div class="list-description">
          <div class="title">儿童节圆梦计划看板</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/imgextra/i1/O1CN01KcbdjB1nr5FhEESFK_!!6000000005142-2-tps-1600-900.png"
        />
        <div class="list-description">
          <div class="title">公益平台专项扶贫项目大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1h1kRRpP7gK0jSZFjXXc5aXXa-600-338.png"
        />
        <div class="list-description">
          <div class="title">新冠肺炎防疫复工看板</div>
          <div class="size"><p>自适应</p></div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1KdcCRuH2gK0jSZJnXXaT1FXa-600-338.png"
        />
        <div class="list-description">
          <div class="title">建材智慧工厂生产看板</div>
          <div class="size"><p>自适应</p></div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1XDIWVuL2gK0jSZFmXXc7iXXa-600-338.png"
        />
        <div class="list-description">
          <div class="title">平台销售报告</div>
          <div class="size"><p>自适应</p></div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//gw.alicdn.com/imgextra/i2/O1CN01v7w3hW1JMugBZNRrX_!!6000000001015-2-tps-600-338.png"
        />
        <div class="list-description">
          <div class="title">城市区域综合管理系统</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1600x900px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/imgextra/i4/O1CN01DaGu9M24cHvC42j4o_!!6000000007411-2-tps-600-338.png"
        />
        <div class="list-description">
          <div class="title">人事管理看板</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/imgextra/i4/O1CN01m6kMRb1Lu0X0eLUnN_!!6000000001358-2-tps-838-316.png"
        />
        <div class="list-description">
          <div class="title">金融行业智能贷款实时应用监控</div>
          <div class="size">
            <p>比例 16:6</p>
            <p>2880x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/imgextra/i1/O1CN01rLMYbF1CAMW6Ud6n4_!!6000000000040-2-tps-600-338.png"
        />
        <div class="list-description">
          <div class="title">内容安全信息净化平台</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/imgextra/i2/O1CN01u14BlV1zGEltmdEY8_!!6000000006686-2-tps-600-338.png"
        />
        <div class="list-description">
          <div class="title">五一假期旅游市场观测</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1E3z6SQY2gK0jSZFgXXc5OFXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">公安系统警情态势监控</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1Zk_Cj8Bh1e4jSZFhXXcC9VXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">消防救援态势大屏模板</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1YeLiTuH2gK0jSZJnXXaT1FXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">数字农家书屋大数据平台</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1tw12VEY1gK0jSZFMXXaWcVXa-300-167.png"
        />
        <div class="list-description">
          <div class="title">县城乡村卫生设施智能管护平台</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1LHcsYoT1gK0jSZFrXXcNCXXa-300-169.png"
        />
        <div class="list-description">
          <div class="title">双11商家数据大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1EPp43hv1gK0jSZFFXXb0sXXa-300-169.png"
        />
        <div class="list-description">
          <div class="title">全国气象数据大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/imgextra/i4/O1CN01pDFwNh1oLJMj4ALdU_!!6000000005208-2-tps-600-337.png"
        />
        <div class="list-description">
          <div class="title">订单物流信息监控大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/imgextra/i1/O1CN01DwGj4y1EdnBND3zEj_!!6000000000375-2-tps-600-337.png"
        />
        <div class="list-description">
          <div class="title">名单抽奖</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/imgextra/i4/O1CN01CVvYLd1iq6IYRzjPg_!!6000000004463-2-tps-350-196.png"
        />
        <div class="list-description">
          <div class="title">快乐转转转</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/imgextra/i4/O1CN01l0ON2K1Z4AIv4gupg_!!6000000003140-2-tps-600-337.png"
        />
        <div class="list-description">
          <div class="title">欢乐砸金蛋</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1UiW1AEY1gK0jSZFMXXaWcVXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">招标行业大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1qbcDBbj1gK0jSZFuXXcrHpXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">区域经济监测大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1U8bfCuL2gK0jSZPhXXahvXXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">BaaS区块链可信数据大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1duA4CKT2gK0jSZFvXXXnFXXa-688-386.png"
        />
        <div class="list-description">
          <div class="title">Hanabi新冠疫情数据大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1B1nrDhv1gK0jSZFFXXb0sXXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">中原制造工业共享云平台</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1shp9EoY1gK0jSZFMXXaWcVXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">城市旅游大数据分析平台</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1iI3OGEY1gK0jSZFMXXaWcVXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">产品预售数据看板</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//gw.alicdn.com/tfs/TB1lY6WHWL7gK0jSZFBXXXZZpXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">城市气象数据大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/472752_0b867e53c1d233ce9fe49d54549a2323.png?date=1591344864174"
        />
        <div class="list-description">
          <div class="title">视听软件数据监控看板</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB13m9dgicKOu4jSZKbXXc19XXa-1600-900.png"
        />
        <div class="list-description">
          <div class="title">直播电商数据看板</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1A7wqMGL7gK0jSZFBXXXZZpXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">出入境边检大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1CqhfxoY1gK0jSZFMXXaWcVXa-640-360.png"
        />
        <div class="list-description">
          <div class="title">工会会员数据监控</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1qy7Rwp67gK0jSZPfXXahhFXa-670-376.png"
        />
        <div class="list-description">
          <div class="title">商圈生态模拟-浅色版</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1FdWUw8v0gK0jSZKbXXbK2FXa-672-376.png"
        />
        <div class="list-description">
          <div class="title">商圈生态模拟-深色版</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1aralxVY7gK0jSZKzXXaikpXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">智能楼宇体征画像</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1ae_dyYr1gK0jSZR0XXbP8XXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">垃圾分类收集量统计</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1BVVbzRr0gK0jSZFnXXbRRXXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">智能工厂生产看板</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1BhI4vET1gK0jSZFhXXaAtVXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">居民健康调查屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB18Cuuvxz1gK0jSZSgXXavwpXa-640-360.png"
        />
        <div class="list-description">
          <div class="title">疫情物资保障大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB18bKjvuT2gK0jSZFvXXXnFXXa-640-360.png"
        />
        <div class="list-description">
          <div class="title">全国新型冠状病毒感染的肺炎疫情分布</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1tJk3vuT2gK0jSZFvXXXnFXXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">员工复工大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1f79avWL7gK0jSZFBXXXZZpXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">省市确诊疫情分析</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/397863_0b867e53c1d233ce9fe49d54549a2323.png?date=1582013645431"
        />
        <div class="list-description">
          <div class="title">企业复工大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB13qHguYY1gK0jSZTEXXXDQVXa-240-135.png"
        />
        <div class="list-description">
          <div class="title">疫情态势管控大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1OFS7veH2gK0jSZJnXXaT1FXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">疫情联防联控系统</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1T8GPu1L2gK0jSZFmXXc7iXXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">新型肺炎疫情播报</div>
          <div class="size">
            <p>比例 1:4</p>
            <p>750x3000px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1Lpviu9f2gK0jSZFPXXXsopXa-280-158.png"
        />
        <div class="list-description">
          <div class="title">疫情动态大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1fz_DsuL2gK0jSZFmXXc7iXXa-640-360.png"
        />
        <div class="list-description">
          <div class="title">智慧机场可视化界面</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1ohBHtCf2gK0jSZFPXXXsopXa-640-360.png"
        />
        <div class="list-description">
          <div class="title">物联网设备运营监控</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB107jTtYj1gK0jSZFOXXc7GpXa-640-360.png"
        />
        <div class="list-description">
          <div class="title">智能终端运营看板</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1dWcccFP7gK0jSZFjXXc5aXXa-640-360.png"
        />
        <div class="list-description">
          <div class="title">学区地图分析</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//gw.alicdn.com/tfs/TB13FH8dSf2gK0jSZFPXXXsopXa-640-360.png"
        />
        <div class="list-description">
          <div class="title">金融投资看板</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//gw.alicdn.com/tfs/TB1oSrVexD1gK0jSZFsXXbldVXa-640-360.png"
        />
        <div class="list-description">
          <div class="title">自然灾害预警</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//gw.alicdn.com/tfs/TB1wUJlfbr1gK0jSZFDXXb9yVXa-642-362.jpg"
        />
        <div class="list-description">
          <div class="title">城市交通模板</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB19_rvq7P2gK0jSZPxXXacQpXa-640-357.png"
        />
        <div class="list-description">
          <div class="title">互联网全球布局4k</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>3840x2160px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1NQFarV67gK0jSZPfXXahhFXa-640-360.png"
        />
        <div class="list-description">
          <div class="title">广告投放指数(企业版)</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1VLzysAY2gK0jSZFgXXc5OFXa-640-360.png"
        />
        <div class="list-description">
          <div class="title">广告投放指数(专业版)</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/d2fe31ebb0b23f9c5952f4e55ca90c1d.png"
        />
        <div class="list-description">
          <div class="title">公共区域实时监控</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/1084d7bb3280a49a2b0c7be914925cd9.png"
        />
        <div class="list-description">
          <div class="title">智能工厂监控</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/6f256de27a7845d019c61f045aef6e9b.png"
        />
        <div class="list-description">
          <div class="title">ES运维实时监控</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/1e73f63f1ea581e57394fc551fadb81b.jpeg"
        />
        <div class="list-description">
          <div class="title">监控视频</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/263879_0b867e53c1d233ce9fe49d54549a2323.png"
        />
        <div class="list-description">
          <div class="title">跨境电商</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/265079_0b867e53c1d233ce9fe49d54549a2323.png"
        />
        <div class="list-description">
          <div class="title">全球贸易2</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/254674_0b867e53c1d233ce9fe49d54549a2323.png"
        />
        <div class="list-description">
          <div class="title">网络安全</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/235dfe2763c5ad16cddb63269c7c8a8c.png"
        />
        <div class="list-description">
          <div class="title">安全系统实时监控</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/f853293a03c33ed15f15291b254ee47b.png"
        />
        <div class="list-description">
          <div class="title">实时医疗大屏</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB1lyPCsq61gK0jSZFlXXXDKFXa-640-360.png"
        />
        <div class="list-description">
          <div class="title">数据看板-第三方支付统计</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
      <li class="list-li">
        <img
          class="list-img"
          src="//img.alicdn.com/tfs/TB17ePQQVXXXXawXVXXXXXXXXXX-1920-1080.jpg"
        />
        <div class="list-description">
          <div class="title">互联网金融监控</div>
          <div class="size">
            <p>比例 16:9</p>
            <p>1920x1080px</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.ace-showcase.pc-ace-showcase .showcase-content {
  width: 1440px;
  margin: 0 auto;
  padding-left: 130px;
  padding-bottom: 100px;
  position: relative;
  top: -180px;
}
.ace-showcase.pc-ace-showcase .showcase-content .filter {
  user-select: none;
  overflow: hidden;
}
.ace-showcase.pc-ace-showcase .showcase-content .filter .filter-title {
  float: left;
  height: 32px;
  line-height: 32px;
  margin-right: 32px;
  font-size: 16px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
  margin-top: 26px;
}
.ace-showcase.pc-ace-showcase .showcase-content .filter .filter-wrap {
  overflow: hidden;
}
.ace-showcase.pc-ace-showcase .ant-form-item {
  display: inline-block;
  margin-top: 26px;
}
.ant-form-item-control:first-child:not([class^="ant-col-"]):not([class*=" ant-col-"]) {
  width: 100%;
}
.ace-showcase.pc-ace-showcase .ant-checkbox-wrapper {
  color: #fff;
}
.ant-checkbox {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  top: -0.09em;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
}

.ace-showcase.pc-ace-showcase .showcase-content .list {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.ace-showcase.pc-ace-showcase .showcase-content .list .list-li {
  margin-top: 40px;
  width: 258px;
  height: 184px;
  border: 1px solid #3a4659;
  outline: 1px solid transparent;
  margin-right: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgb(0 0 0 / 2%), 0 4px 8px rgb(0 0 0 / 2%);
  -webkit-backface-visibility: hidden;
}
.ace-showcase.pc-ace-showcase .showcase-content .list .list-img {
  width: 100%;
  height: 146px;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  position: relative;
}
.ace-showcase.pc-ace-showcase .showcase-content .list .list-description {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 36px;
  line-height: 36px;
  background: #1d262e;
  transition: 0.2s;
  width: 100%;
}
.ace-showcase.pc-ace-showcase .showcase-content .list .list-description .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 2;
  color: #fff;
  font-size: 12px;
}
.ace-showcase.pc-ace-showcase .showcase-content .list .list-description .size {
  position: relative;
  top: 1px;
  flex: 1;
  color: #999;
  text-align: right;
  font-family: Orbitron-Bold, PingFangSC-Medium, PingFang SC, Microsoft YaHei,
    Arial, Helvetica, sans-serif;
}
.ace-showcase.pc-ace-showcase
  .showcase-content
  .list
  .list-description
  .size
  p {
  color: #999;
  text-align: right;
  height: 18px;
  line-height: 18px;
  font-family: Orbitron-Bold, PingFangSC-Medium, PingFang SC, Microsoft YaHei,
    Arial, Helvetica, sans-serif;
}
p {
  margin-bottom: 0;
  font-size: 12px;
}
</style>
