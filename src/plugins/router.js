import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path:'/admin', 
        name:'admin', 
        component: ()=> import('@/pages/Admin.vue')
    },

    // {path:'', name:'home', component: ()=> import('@/pages/Home.vue')},
    {
        path:'/products', 
        name:'products', 
        component: ()=> import('@/pages/admin/Product.vue')
    },
    {
        path:'/orders', 
        name:'orders', 
        component: ()=> import('@/pages/admin/Order.vue')
    },
    {
        path:'/users',
        name: 'users',
        component: ()=> import('@/pages/admin/User.vue')
    },
    {
        path:'/inbox',
        name: 'inbox',
        component: ()=> import('@/pages/admin/Inbox.vue')
    }
    
];


const router = createRouter({routes,history:createWebHistory()});


export default router;
