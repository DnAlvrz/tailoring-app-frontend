import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {path:'', name:'home', component: ()=> import('@/pages/Home.vue')},
    {path:'/products', name:'products', component: ()=> import('@/pages/Product.vue')},
    {path:'/admin', name:'admin', component: ()=> import('@/pages/Admin.vue')},
    {path:'/orders', name:'orders', component: ()=> import('@/pages/Order.vue')}
];


const router = createRouter({routes,history:createWebHistory()});


export default router;
