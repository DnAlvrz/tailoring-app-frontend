<template>
<div class="md:w-full w-screen  mb-4 bg-primary-0">
    <!-- popup modal -->
    <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow">
                <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-4 md:p-5 text-center">
                    <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                    <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                        Yes, I'm sure
                    </button>
                    <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</button>
                </div>
            </div>
        </div>
    </div>
    <div class="md:flex flex xl:hidden justify-end border-b">
        <!-- edit button -->
        <button id="dropdownDefaultButton" data-dropdown-toggle="editBtn" class="text-secondary-0 mr-2 focus:outline-none font-medium text-sm p-2.5 text-center" type="button">Edit</button>
        <div id="editBtn" class="z-10 hidden bg-tertiary-0 shadow">
            <ul class="py-2 text-sm text-primary-0 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>                  
                    <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block p-2 text-center" type="button">
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    </div>
    <div class=" mb-2 w-full p-4 shadow border flex">
        <!-- card content -->
        <div class="flex items-center p-2 mb-10 md:mb-6">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 rounded focus:ring-transparent">
        </div>
        <img src="../../../assets/cloth.jpg" alt="product-image" class="w-20 h-20 mt-2 shadow border" />
        <div class="p-2 md:flex sm:items-center sm:justify-between sm:w-full">
            <div class="w-52 mb-4 md:w-72">
                <!-- PRODUCT NAME -->
                <h2 class="text-base lg:line-clamp-2 line-clamp-1 text-secondary-0 font-roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae omnis exercitationem dolore doloremque aliquid nesciunt veniam labore magnam similique ad vitae corrupti dicta, quae eaque. Architecto dolorum fuga alias ea.</h2>
                <!-- PRODUCT CATEGORY -->
                <p class="text-xs text-gray-500 font-roboto">Cloth</p>
                <!-- number count of quantity of the prducts only show on mobile view -->
                <div class="mt-4 sm:flex justify-between lg:hidden hidden sm:space-y-6 md:mt-4 sm:space-x-6">
                    <div class="flex items-center">
                    <span class="cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-tertiary-0 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 bg-white text-center text-xs border-gray-300 outline-none" type="text" value="2" min="1" />
                    <span class="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-tertiary-0 hover:text-blue-50"> + </span>
                </div>
                </div>

            </div>
            <!-- number of the quantity of the product only show in desktop view -->
            <div class="mt-4 lg:flex justify-between md:hidden hidden sm:space-y-6 md:mt-0 sm:space-x-6">
                <div class="flex items-center">
                    <span class="cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-tertiary-0 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 bg-white text-center text-xs border-gray-300 outline-none" type="text" value="2" min="1" />
                    <span class="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-tertiary-0 hover:text-blue-50"> + </span>
                </div>
            </div>
            <!-- PRODUCT PRICE -->
            <div class="flex items-center sm:justify-end space-x-4">
                <p class="text-sm font-semibold text-secondary-0 font-roboto"> <span class="text-sm md:text-sm sm:text-lg">₱449</span> </p>
            </div>
            <!-- delete button only appear on 1080p screen size -->
            <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="hidden p-2 xl:block font-roboto font-semibold text-tertiary-0 text-center" type="button">
                Delete
            </button>
            <!-- number of the quantity of the product only show in ipad view -->
            <div class="mt-4 flex justify-between sm:space-y-6 md:mt-0 sm:hidden sm:space-x-6">
                <div class="flex items-center">
                    <span class="cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-tertiary-0 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 bg-white text-center text-xs border-gray-300 outline-none" type="text" value="2" min="1" />
                    <span class="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-tertiary-0 hover:text-blue-50"> + </span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { 
 initAccordions, 
 initCarousels, 
 initCollapses, 
 initDials, 
 initDismisses, 
 initDrawers, 
 initDropdowns, 
 initModals, 
 initPopovers, 
 initTabs, 
 initTooltips } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
 initAccordions();
 initCarousels();
 initCollapses();
 initDials();
 initDismisses();
 initDrawers();
 initDropdowns();
 initModals();
 initPopovers();
 initTabs();
 initTooltips();
})
</script>