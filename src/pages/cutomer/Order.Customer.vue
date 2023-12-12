<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <ProfileNav />
        <main class="flex-1 flex md:mt-[6rem] mt-[4rem] md:items-start justify-center">
            <div class=" flex w-full md:2/3 max-w-7xl flex-row mx-auto">
                <SidebarAccount/>
                <div class="w-full">
                    <div class="w-full border border-gray-200">
                        <div class="p-4 border-b bg-primary-0 border-gray-200 justify-between flex">
                            <a href="">                    
                                <span class="text-secondary-0 hidden md:block font-roboto font-semibold">
                                    <font-awesome-icon icon="fa-solid fa-arrow-left" style="color: #474554;" />
                                    Back
                                </span>
                                <span class="text-secondary-0 block md:hidden font-roboto font-semibold">
                                    <font-awesome-icon icon="fa-solid fa-arrow-left" style="color: #474554;" />
                                    Order Details
                                </span>
                            </a>
                            <p class="uppercase hidden md:block ">Order ID: <span class="font-roboto pl-1 pr-4 text-base ">230709FH248K3Y</span> | <span class="font-roboto px-4 text-sm text text-gray-500">Order Confirmed</span> </p>
                        </div>
                        <div class="py-4 hidden md:block bg-primary-0">
                            <div class="flex justify-center mx-5 items-center">
                                <div class="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-tertiary-0 rounded-full flex items-center justify-center font-bold text-white">
                                    <font-awesome-icon icon="fa-solid fa-check" style="color: #ffff;" />
                                </div>
                            </div>
                            <div class="flex justify-center text-sm md:text-base w-full">
                                <div class="text-center text-tertiary-0">Order Confirmed</div>
                            </div>
                        </div>
                        <div class="py-4 md:hidden block bg-tertiary-0">
                            <p class="font-roboto px-4 pb-2 text-primary-0">Order Confirmed</p>
                            <p class="font-roboto px-4 text-sm text-primary-0">Thank you for Shopping with us!</p>
                        </div>
                    </div>
                    <div class= "w-full">
                        <a class="w-full" href="">
                            <div class="p-4 border-gray-200 border-b bg-primary-0">
                                <div class="flex flex-row items-center">
                                    <div class="flex p-2 items-center flex-row">
                                        <img class="w-20 h-20 md:w-52 md:h-20" src="../../assets/cloth.jpg" alt="">
                                        <div class="p-2">
                                            <h5 class="font-roboto text-secondary-0 line-clamp-1 lg:line-clamp-2 text-base uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minima omnis nulla odio officiis, atque autem quo consequatur doloribus. Ea expedita adipisci eos ipsa saepe doloremque aperiam ratione velit veritatis.</h5>
                                            <p class="text-gray-400 font-roboto text-sm">Category: <span>Shorts</span></p>
                                            <span class="text-gray-600 font-roboto text-sm">x1</span>
                                        </div>
                                    </div>
                                    <div class=" p-4">
                                        <p class="font-roboto text-secondary-0 font-semibold">₱449</p>
                                    </div>
                                    <div class="hidden md:block">
                                        <div class="flex w-[10rem] flex-col items-center">
                                            <span class="text-xs text text-gray-400">Shop Rating</span>
                                            <div class="flex items-center">
                                                <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>
                                                <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>
                                                <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>
                                                <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>
                                                <svg class="w-3 h-3 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="flex flex-col bg-primary-0 justify-between">
                        <div class="w-full p-4 ">
                            <h5 class="font-roboto text-secondary-0 font-semibold text-lg">Delivery Address</h5>
                            <p class="font-roboto ml-2.5 mt-2 text-secondary-0">Arjhon Lahudin</p>
                            <p class="font-roboto ml-2.5 mt-2 text-gray-400 text-sm">091234567890</p>
                            <p class="font-roboto ml-2.5 text-gray-400 text-sm">Dacon Homes Recodo, Zamboanga City</p>
                        </div>
                        <div class="w-full  p-4">
                            <ul>
                                <li class="flex items-center border border-gray-300 border-b-0 justify-between">
                                    <p class="font-roboto border-r text-right p-2 border-gray-300 w-full text-gray-400 text-sm">Merchandise Subtotal</p>
                                    <span class="font-roboto w-full p-2 text-right text-sm">₱449</span>
                                </li>
                                <li class="flex items-center border border-gray-300 border-b-0 justify-between">
                                    <p class="font-roboto border-r text-right p-2 border-gray-300 w-full text-gray-400 text-sm">Shipping Fee</p>
                                    <span class="font-roboto w-full p-2 text-right text-sm">₱100</span>
                                </li>
                                <li class="flex items-center border border-gray-300 border-b-0 justify-between">
                                    <p class="font-roboto border-r text-right p-2 border-gray-300 w-full text-gray-400 text-sm">Order Total</p>
                                    <span class="font-roboto w-full p-2 text-right text-xl">₱599</span>
                                </li>
                                <li class="flex p-2 border border-gray-300 justify-between">
                                    <p class="font-roboto  p-2  text-gray-400 text-sm">Payment Method</p>
                                    <span class="font-roboto  p-2  text-sm">Cash on Delivery</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    <Footer/>
</div>
</template>

<script setup>
import ProfileNav from '../../components/cutomer/nav/Profile.Nav.vue';
import Footer from '../../components/cutomer/footer/Footer.vue';
import SidebarAccount from '../../components/Sidebar/Sidebar.Account.vue';
import { onMounted } from 'vue'
import { 
 initDropdowns, 
} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
 initDropdowns();
})
</script>
























