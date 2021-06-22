import Vue from "vue";
import VueRouter from "vue-router";
import BaseLayout from "@/components/layout/baseLayout.vue";

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
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/resources",
    name: "resources",
    title: "/素材资源",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/community",
    name: "community",
    title: "社区",
    component: () => import("@/views/Home.vue"),
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
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/chat/list",
    name: "Chat",
    component: () => import("@/views/Chat.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
