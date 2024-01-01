import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/customer/LandingPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Auth/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/pages/Auth/Register.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/pages/Admin.vue"),
  },

  // {path:'', name:'home', component: ()=> import('@/pages/Home.vue')},
  {
    path: "/admin/products",
    name: "admin products",
    component: () => import("@/pages/admin/Product.vue"),
  },
  {
    path: "/admin/orders",
    name: "admin orders",
    component: () => import("@/pages/admin/Order.vue"),
  },
  {
    path: "/admin/users",
    name: "admin users",
    component: () => import("@/pages/admin/User.vue"),
  },
  {
    path: "/admin/inbox",
    name: "admin inbox",
    component: () => import("@/pages/admin/Inbox.vue"),
  },
  {
    path: "/user/cart",
    name: "cart",
    component: () => import("@/pages/customer/Cart.vue"),
  },
  {
    path: "/user/checkout",
    name: "checkout",
    component: () => import("@/pages/customer/Checkout.vue"),
  },
  {
    path: "/user/messages",
    name: "customer messages",
    component: () => import("@/pages/customer/Messages.vue"),
  },
  {
    path: "/products/:id",
    name: "customer products",
    component: () => import("@/pages/customer/Product.Page.vue"),
  },
];


const router = createRouter({routes,history:createWebHistory()});


export default router;
