<template>
  <footer class="base-footer">
    <!-- <div class="amy-base-wrapper a-flex-row">底部</div> -->
    <div class="amy-base-wrapper">
      <div class="footer-wrapper-top">
        <div class="footer-wrapper-top-left">
          <a href="javascript:;" class="footer-mobile"
            ><i class="hide"></i>移动版</a
          >
          <a href="https://www.zcool.com.cn/about">关于我们</a>
          <a href="https://www.zcool.com.cn/userAgreement">用户协议</a>
          <a href="https://www.zcool.com.cn/policy">隐私政策</a>
          <a href="https://www.zcool.com.cn/violationClaim">侵权申诉</a>
          <a href="https://www.zcool.com.cn/competition">企业服务</a>
          <a href="https://www.zcool.com.cn/help">帮助中心</a>
          <a href="https://www.zcool.com.cn/contactUs">联系我们</a>

          <a href="javascript:;" onclick="changeLang('zh');">中文</a>
          <a href="javascript:;" onclick="changeLang('en');">English</a>
        </div>
        <div class="footer-wrapper-top-right">
          <a href="javascript:;" class="footer-weixin"
            ><i class="hide" z-st="footer_focusUs_wechat"></i
          ></a>
          <a
            href="https://weibo.com/hizcool"
            class="footer-weibo"
            target="_blank"
            z-st="footer_focusUs_weibo"
          ></a>
        </div>
      </div>
      <div class="footer-wrapper-middle">
        <span class="police"
          ><a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502000501"
            target="_blank"
            >京公网安备11010502000501号</a
          ></span
        >
        <i></i>
        <a
          href="//static.zcool.cn/git_z/z/common/images/tvlicence.jpg"
          target="_blank"
          >广播电视节目制作经营许可证（京）字第06990号</a
        >
        <i></i
        ><a href="http://beian.miit.gov.cn" target="_blank"
          >京ICP备11017824号</a
        >
        <i></i
        ><a href="http://beian.miit.gov.cn" target="_blank">京ICP证130164号</a>
        <i></i
        ><a
          href="//static.zcool.cn/git_z/z/common/images/man-resource.jpg"
          target="_blank"
          >人力资源服务许可证</a
        >
      </div>
      <div class="footer-wrapper-bottom" style="margin-top: 10px;">
        <a
          href="//static.zcool.cn/git_z/z/common/images/businesslicense.jpg"
          target="_blank"
          >营业执照</a
        >
        <i></i
        ><a href="http://www.12377.cn/" target="_blank">网上有害信息举报专区</a>
        <i></i><span>不良信息举报电话：010-56538658</span> <i></i
        ><span>举报邮箱 jubao@zcool.com.cn</span> <i></i
        ><span>联系电话：010-56538600</span>

        <span class="footer-copy-right"
          >Copyright © 2006-2021
          <a href="https://www.zcool.com.cn" target="_blank">ZCOOL站酷</a></span
        >
      </div>
    </div>
  </footer>
</template>
<style lang="less" scoped>
@import url("@/common/amy.less");
.base-footer {
  color: #fff;
  // height: 490px;
  background: #333;
  padding-bottom: 50px;
}

footer .footer-wrapper-top {
  width: 100%;
  height: 130px;
  border-bottom: 1px solid #333333;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
footer .footer-wrapper-top .footer-wrapper-top-left .footer-mobile {
  position: relative;
}

footer .footer-wrapper-top .footer-wrapper-top-left a {
  margin-right: 24px;
}

footer .footer-wrapper-top .footer-wrapper-top-right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
footer .footer-wrapper-top .footer-wrapper-top-right .footer-weixin {
  background-position: 0 0;
  width: 25px;
  height: 21px;
  position: relative;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIzcHgiIGhlaWdodD0iMTlweCIgdmlld0JveD0iMCAwIDIzIDE5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+d2VpeGluPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtSEQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MTkuMDAwMDAwLCAtNjcuMDAwMDAwKSIgZmlsbD0iIzY2NjY2NiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC02LUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxOS4wMDAwMDAsIDY3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjUsNS43IEwxNi4zLDUuNyBDMTUuNiwyLjQgMTIuMSwwIDguMSwwIEMzLjYsMCAwLDMgMCw2LjkgQzAsOS4xIDEuMiwxMSAzLjMsMTIuNCBMMi41LDE0LjggTDUuMywxMy40IEM2LjMsMTMuNiA3LjEsMTMuOCA4LjEsMTMuOCBMOC45LDEzLjggQzguNywxMy4zIDguNiwxMi43IDguNiwxMi4xIEM4LjUsOC42IDExLjYsNS43IDE1LjUsNS43IEwxNS41LDUuNyBaIE0xMS4xLDMuNSBDMTEuNywzLjUgMTIuMSwzLjkgMTIuMSw0LjUgQzEyLjEsNS4xIDExLjcsNS41IDExLjEsNS41IEMxMC41LDUuNSA5LjksNS4xIDkuOSw0LjUgQzkuOSwzLjkgMTAuNSwzLjUgMTEuMSwzLjUgTDExLjEsMy41IFogTTUuNCw1LjUgQzQuOCw1LjUgNC4yLDUuMSA0LjIsNC41IEM0LjIsMy45IDQuOCwzLjUgNS40LDMuNSBDNiwzLjUgNi40LDMuOSA2LjQsNC41IEM2LjQsNS4xIDYsNS41IDUuNCw1LjUgTDUuNCw1LjUgWiIgaWQ9IlhNTElEXzIzM18iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMi44LDExLjkgQzIyLjgsOC43IDE5LjUsNiAxNS45LDYgQzEyLDYgOSw4LjYgOSwxMS45IEM5LDE1LjIgMTIsMTcuOCAxNS45LDE3LjggQzE2LjcsMTcuOCAxNy41LDE3LjYgMTguMywxNy40IEwyMC41LDE4LjYgTDE5LjksMTYuNiBDMjEuNiwxNS40IDIyLjgsMTMuOCAyMi44LDExLjkgTDIyLjgsMTEuOSBaIE0xMy42LDEwLjkgQzEzLjIsMTAuOSAxMi44LDEwLjUgMTIuOCwxMC4xIEMxMi44LDkuNyAxMy4yLDkuMyAxMy42LDkuMyBDMTQuMiw5LjMgMTQuNiw5LjcgMTQuNiwxMC4xIEMxNC42LDEwLjUgMTQuMiwxMC45IDEzLjYsMTAuOSBMMTMuNiwxMC45IFogTTE4LjEsMTAuOSBDMTcuNywxMC45IDE3LjMsMTAuNSAxNy4zLDEwLjEgQzE3LjMsOS43IDE3LjcsOS4zIDE4LjEsOS4zIEMxOC43LDkuMyAxOS4xLDkuNyAxOS4xLDEwLjEgQzE5LjEsMTAuNSAxOC43LDEwLjkgMTguMSwxMC45IEwxOC4xLDEwLjkgWiIgaWQ9IlhNTElEXzIyMV8iPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
}
footer .footer-wrapper-middle {
  margin-top: 20px;
}
footer .footer-wrapper-middle i,
footer .footer-wrapper-bottom i {
  display: inline-block;
  width: 1px;
  height: 12px;
  margin: 0 20px;
  background: #666666;
  vertical-align: middle;
}
footer .footer-wrapper-bottom {
  position: relative;
}
</style>
