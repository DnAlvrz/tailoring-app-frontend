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
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },
  {
    path: "/admin/products",
    name: "admin products",
    component: () => import("@/pages/admin/Product.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },
  {
    path: "/admin/orders",
    name: "admin orders",
    component: () => import("@/pages/admin/Order.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },
  {
    path: "/admin/users",
    name: "admin users",
    component: () => import("@/pages/admin/User.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },
  {
    path: "/admin/inbox",
    name: "admin inbox",
    component: () => import("@/pages/admin/Inbox.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },

  {
    path: "/user/messages",
    name: "customer messages",
    component: () => import("@/pages/customer/Messages.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/products/:id",
    name: "customer products",
    component: () => import("@/pages/customer/Product.Page.vue"),
  },
  {
    path: "/user/cart",
    name: "cart",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/customer/Cart.vue"),
  },
  {
    path: "/users/orders/rate",
    name: "cart",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/customer/Rating.vue"),
  },
  {
    path: "/user/checkout",
    name: "checkout",
    component: () => import("@/pages/customer/Checkout.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user/rating",
    name: "rating",
    component: () => import("@/pages/customer/Product.Rating.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user/purchase",
    name: "customer purchases",
    component: () => import("@/pages/customer/Purchase.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];


const router = createRouter({routes,history:createWebHistory()});

router.beforeEach((to, from, next)=> {
  let user = JSON.parse(localStorage.getItem("user"));
  if(to.meta.requiresAuth) {
    if(!user) {
      next('/login');
    }
  }
  if(to.meta.isAdmin) {
    if (user.access_level !== 3) {
      next("/products");
      return;
    }
  } 
  next();
})

export default router;
