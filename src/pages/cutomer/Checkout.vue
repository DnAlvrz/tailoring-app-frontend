<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <CheckoutNav/>
        <main class="flex-1 flex md:mt-[1rem] mt-[3.5rem] md:items-start justify-center">
            <div class="rounded-lg md:w-2/3">
                <div class="md:w-full w-screen mb-4">
                    <div class="p-4 bg-primary-0 w-full">
                        <div>
                            <h4 class="font-roboto font-semibold text-lg p-4">Delivery Address</h4>
                        </div>
                        <div class="flex flex-row items-center gap-60">
                            <div class="ml-5">
                                <p class="font-roboto font-semibold text-secondary-0">Arjhon Lahudin</p>
                                <p class="font-roboto font-semibold text-secondary-0">091234567890</p>
                            </div>
                            <div class="mr-5">
                                <p class="font-roboto font-semibold text-xl text-secondary-0">Dacon Homes Recodo, Zamboanga City</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-primary-0 mt-2">
                        <a class="shadow w-full" href="">
                            <div class="p-4 border-b">
                                <div class="flex flex-row">
                                    <div class="flex flex-row">
                                        <img class="w-20 h-20 md:w-52 md:h-24" src="../../assets/cloth.jpg" alt="">
                                        <div class="p-2">
                                            <h5 class="font-roboto text-secondary-0 line-clamp-1 lg:line-clamp-2 text-base uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minima omnis nulla odio officiis, atque autem quo consequatur doloribus. Ea expedita adipisci eos ipsa saepe doloremque aperiam ratione velit veritatis.</h5>
                                            <p class="text-gray-400 font-roboto text-sm">Category: <span>Shorts</span></p>
                                            <span class="text-gray-600 font-roboto text-md">x1</span>
                                        </div>
                                    </div>
                                    <div class="grid place-content-center p-4">
                                        <span class="font-roboto font-semibold text-secondary-0">₱1,299</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="bg-primary-0 mt-4">
                        <div class="flex justify-between items-center p-8 border-b border-gray-200">
                            <h3 class="font-roboto text-secondary-0 font-semibold text-lg">Payment Method</h3>
                            <p class="font-roboto text-sm font-semibold text-secondary-0">Cash on Delivery</p>
                        </div>
                        <div class="w-full border-b border-gray-200  p-4">
                            <ul>
                                <li class="flex items-center justify-between">
                                    <p class="font-roboto text-right p-2 w-full text-gray-400 text-sm">Merchandise Subtotal</p>
                                    <span class="font-roboto w-[10%] p-2 text-right text-sm">₱1,299</span>
                                </li>
                                <li class="flex items-center justify-between">
                                    <p class="font-roboto text-right p-2 border-gray-300 w-full text-gray-400 text-sm">Shipping Fee</p>
                                    <span class="font-roboto p-2 w-[10%] text-right text-sm">₱100</span>
                                </li>
                                <li class="flex items-center justify-between">
                                    <p class="font-roboto text-right p-2 border-gray-300 w-full text-gray-400 text-sm">Order Total</p>
                                    <span class="font-roboto w-[10%] p-2 text-right text-xl">₱1,399</span>
                                </li>
                            </ul>
                        </div>
                        <div class="flex justify-end p-8">
                            <button class="bg-tertiary-0 py-2.5 px-10 font-roboto text-primary-0">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <CartFooter/>
    </div>
</template>
<script setup>
import CheckoutNav from '../../components/cutomer/nav/Checkout.Nav.vue';
 import { onMounted } from 'vue'
 import { 
    initDropdowns, 
     initModals,
 } from 'flowbite'
 
 // initialize components based on data attribute selectors
 onMounted(() => {
     initDropdowns();
     initModals();
 })
</script>
