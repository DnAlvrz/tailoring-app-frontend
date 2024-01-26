<template>
    <nav class="lg:bg-white/80 bg-primary-0 max-w-full border shadow backdrop:blur-md z-10 fixed top-0 left-0 right-0">
        <div class=" flex flex-row justify-between items-center sm:flex-row sm:justify-between md:justify-evenly mx-5">
            <!-- scroll up the home if press -->
            <a href="#" class="flex items-center space-x-3 select-none">
                <svg class="w-4 h-4 md:w-6 md:h-6 text-secondary-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z"/>
                </svg>
                <span class="self-center text-base sm:text-2xl text-secondary-0 font-roboto font-semibold whitespace-nowrap">Tailoring System</span>
            </a>
            <div class="flex items-center gap-4sm:gap-10">
            <div class="p-4">
                <!-- dropdown search for mobile view -->
                <div class="md:hidden">
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color: #474554;" />
                    </button>

                    <!-- Dropdown menu -->
                    <div id="dropdown" class="z-10 w-full hidden bg-white shadow">
                        <form>   
                            <label for="default-search" class="mb-2 text-sm font-medium font-roboto text-secondary-0 sr-only">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-secondary-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block  max-lg:w-full p-4 ps-10 font-roboto text-sm text-secondary-0 border border-gray-300 bg-gray-50 focus:ring-tertiary-0 focus:border-tertiary-0" placeholder="Search our store" required>
                            </div>
                        </form>
                    </div>
                </div>
                <form class="hidden md:block">   
                    <label for="default-search" class="mb-2 text-sm font-medium font-roboto text-secondary-0 sr-only">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-secondary-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-[500px] max-lg:w-full p-4 ps-10 font-roboto text-sm text-secondary-0 border border-gray-300 rounded-lg bg-gray-50 focus:ring-tertiary-0 focus:border-tertiary-0" placeholder="Search our store" required>
                    </div>
                </form>
            </div>
            <div class="flex items-center sm:gap-8 gap-2 sm:order-2 space-x-3 sm:space-x-0 rtl:space-x-reverse">
                <div   class="mb-4">
                    <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" class="relative py-2" type="button">
                            <div class="t-0 absolute left-3">
                                <p class="flex h-2 w-2 items-center justify-center rounded-full font-roboto bg-red-600 p-3 text-xs text-primary-0">{{ cart.length && cart.length > 0 && user ? cart.length : 0  }}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" mt-4 h-6 w-6 text-secondary-0">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                    </div>
                    <!-- Dropdown menu -->
                    <div id="dropdownNotification" class="z-20 hidden w-full max-w-sm bg-primary-0 divide-y divide-gray-100 rounded-lg shadow" aria-labelledby="dropdownNotificationButton">
                        <div class="block px-4 py-2 font-medium text-center text-secondary-0 rounded-t-lg bg-gray-50">
                            Recently added products
                        </div>
                        <div class="divide-y divide-gray-100">
                            <div v-if="cart.length > 0 && user">
                                <a v-for="(cartItem, index) in cart" :key="'cart`-'+index" class="flex px-4 py-3 hover:bg-gray-100">
                                    <div class="flex-hsrink-0">
                                        <img class="w-11 h-11" :src="cartItem.image" alt="Jese image">
                                    </div>
                                    <div class="w-full ps-3">
                                        <div class="text-secondary-0 font-roboto mb-1.5 line-clamp-1">{{ cartItem.name}}</div>
                                    </div>
                                    <div class="ml-4">
                                        <p class="font-lato text-slate-900">₱{{ cartItem.price }}</p>
                                    </div>
                                </a>
                            </div>
                            <div v-else-if="!user" class="text-center">
                                <span >Please login to view your cart</span>
                            </div>
                            <div v-else class="text-center">
                                <span >No Items in cart</span>
                            </div>
                            
                        </div>
                        <a href="/user/checkout" class="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100">
                            <div class="inline-flex items-center ">
                                <svg class="w-4 h-4 me-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                </svg>
                                View Cart
                            </div>
                        </a>
                    </div>
                    <button type="button" class="flex text-sm border rounded-full md:me-0 focus:ring-4 focus:ring-tertiary-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span class="sr-only">Open user menu</span>

                        <div class="relative inline-flex w-fit">
                            <div class="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-600 p-1.5 text-xs"></div>
                            <div class="flex items-center justify-center text-center">
                                <img class="w-8 h-8 rounded-full" src="../assets/vue.svg" alt="user photo">
                            </div>
                            </div>
                    </button>
                        <!-- Dropdown menu -->
                    <div class="z-50 hidden my-4 text-base list-none bg-primary-0 divide-y divide-gray-100 rounded-lg shadow" id="user-dropdown">
                        <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm font-roboto text-secondary-0 hover:bg-tertiary-0 hover:text-primary-0">My Account</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm font-roboto text-secondary-0 hover:bg-tertiary-0 hover:text-primary-0">My Purchase</a>
                        </li>
                        <li>
                            <button type="button" class="block px-4 py-2 text-sm font-roboto text-secondary-0 hover:bg-tertiary-0 hover:text-primary-0">
                                Messages
                                <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-primary-0 bg-tertiary-0 rounded-full">
                                    2
                                </span>
                            </button>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 border-t text-sm font-roboto text-secondary-0 hover:bg-tertiary-0 hover:text-primary-0">Sign out</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </nav>
</template>

<script setup>
 import { onMounted, ref} from 'vue'

const cart = ref([]);
const user = ref(null);

const getCart = () => {
    cart.value  =localStorage.getItem("cart") ?  JSON.parse(localStorage.getItem("cart")).splice(0,3) : [];
}

const getUser = () => {
    user.value = localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user')) : null;
}
 
 onMounted(() => {
    getCart()
    getUser();
    initDropdowns();
 })
</script>