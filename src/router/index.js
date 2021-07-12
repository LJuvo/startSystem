import Vue from "vue";
import VueRouter from "vue-router";
import BaseContent from "@/views/base/base.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    title: "首页",
    // redirect: "/exam",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/features",
    name: "features",
    title: "推荐",
    component: () => import("@/views/Features.vue"),
  },
  {
    path: "/content",
    name: "content",
    title: "内容页",
    component: () => import("@/views/ContentPages.vue"),
  },
  {
    path: "/pages",
    name: "pages",
    title: "单页",
    component: () => import("@/views/SinglePages.vue"),
  },
  {
    path: "/media",
    name: "media",
    title: "媒体库",
    component: () => import("@/views/Works.vue"),
  },
  {
    path: "/person",
    name: "person",
    title: "用户库",
    component: () => import("@/views/Works.vue"),
  },
  {
    path: "/system",
    name: "system",
    title: "系统",
    component: () => import("@/views/Works.vue"),
  },
  {
    path: "/works",
    name: "works",
    title: "作品",
    component: () => import("@/views/Works.vue"),
  },
  {
    path: "/resources",
    name: "resources",
    title: "/素材资源",
    component: () => import("@/views/Resources.vue"),
  },
  {
    path: "/community",
    name: "community",
    title: "社区",
    component: () => import("@/views/Community.vue"),
  },
  {
    path: "/webNav",
    name: "webNav",
    title: "网址导航",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    title: "关于我们",
    description: "我们的信息",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/chat/list",
    name: "Chat",
    title: "",
    description: "社区文章内容页",
    component: () => import("@/views/Chat.vue"),
  },
  {
    path: "/exam",
    name: "题库",
    title: "",
    description: "题库",
    component: () => import("@/views/Exam.vue"),
  },
  {
    path: "/base",
    name: "base",
    title: "基础",
    description: "基础页",
    component: BaseContent,
    children: [
      {
        path: "login",
        name: "Login",
        title: "登录",
        description: "登录页",
        component: () => import("@/views/base/Login.vue"),
      },
      {
        path: "reg",
        name: "Registor",
        title: "注册",
        description: "注册页",
        component: () => import("@/views/base/Registor.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
