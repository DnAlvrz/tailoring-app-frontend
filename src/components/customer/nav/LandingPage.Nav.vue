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
            <div class="flex items-center gap-4">
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
                <!-- search for desktop and ipad view -->
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
                <div class="mb-4">
                    <!-- connect to login page -->
                        <a href="#" class="relative py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6 text-secondary-0">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </a>
                    </div>
                    <!-- connect to login page -->
                    <a href="#" class="sm:me-0">
                        <font-awesome-icon icon="fa-solid fa-user" style="color: #474554; height: 20px;" />
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
 import { onMounted } from 'vue'
 import { 
     initDropdowns, 
 } from 'flowbite'
 
 // initialize components based on data attribute selectors
 onMounted(() => {
     initDropdowns();
 })
</script>