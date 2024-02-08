<template>
    <a class="shadow w-full bg-primary-0" href="#">
        <div class="p-4 border-b">
            <div class="flex justify-between flex-row">
                <div class="flex flex-row">
                    <img class="w-20 h-20" style="object-fit: cover;" :src="imagesUrl + '/' + order.product_orders[0].image" alt="">
                    <div class="p-2 w-52 md:w-96">
                        <h5 class="font-roboto text-secondary-0 line-clamp-1 lg:line-clamp-2 text-base uppercase">{{ order.product_orders[0].name }}</h5>
                        <span class="text-gray-600 font-roboto text-md">x{{ order.product_orders[0].quantity }}</span>
                        <p class="text-gray-400 font-roboto text-sm">Other Items: <span>{{ order.product_orders.length - 1 }}</span></p>
                    </div>
                </div>
                <div class="grid place-content-center p-4">
                    <span class="font-roboto font-semibold text-secondary-0">{{order.status}}</span>
                </div>
            </div>
        </div>
        <div class="flex justify-end p-4">
            <p v-if="order.status==='pending'" class="text-base font-roboto text-secondary-0">Order Total: <span class="text-2xl">${{ order.totalAmount }}</span></p>
            <button @click="redirect(order.id)" v-if="order.status === 'delivered'" type="button" class="block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rate</button>
        </div>
    </a>
</template>


<script setup>
import { onMounted, ref } from 'vue' 
const imagesUrl = ref(import.meta.env.VITE_IMAGES_URL);
const props = defineProps(['order']);
const redirect = (orderId) => {
    window.location.href = `/user/rating/${orderId}`
}
</script>