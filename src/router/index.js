import Vue from "vue";
import VueRouter from "vue-router";
import BaseContent from "@/views/base/base.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    title: "首页",
    component: () => import("@/views/Home.vue"),
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
