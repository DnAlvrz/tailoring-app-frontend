<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <Navbar/>
        <main class="flex-1 flex md:mt-[6.5rem] mt-32 md:items-start justify-center">
            <div class="md:w-full w-screen  mb-4 bg-primary-0">
                <div class="md:w-2/3">
                <div class="w-full p-4">
                    <div class="p-2 bg-tertiary-0 flex">
                        <a class="" href="">                    
                        <span class="text-primary-0 ml-6">
                            <font-awesome-icon icon="fa-solid fa-arrow-left" style="color: #fcfcfc;" />
                            Back
                        </span>
                        </a>
                    </div>
                    <div class="p-2">
                        <div class="flex justify-center mx-5 items-center">
                            <div class="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">
                                <font-awesome-icon icon="fa-solid fa-check" style="color: #ffff;" />
                            </div>
                        </div>
                        <div class="flex justify-center mb-4 md:mb-8 text-sm md:text-base w-full">
                            <div class="text-center text-blue-500">Order Confirmed</div>
                        </div>
                    </div>
             
    <div class="px-4 md:px-6 bg-red-900 2xl:container 2xl:mx-auto">
  <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div class="flex flex-col justify-start items-start w-full">
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
                <div class="mt-4 sm:flex justify-between lg:hidden hidden sm:space-y-6 md:mt-0 sm:space-x-6">
                    <div class="flex items-center">
                    <span class="cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 bg-white text-center text-xs border-gray-300 outline-none" type="text" value="2" min="1" />
                    <span class="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                </div>
                </div>

            </div>
            <!-- number of the quantity of the product only show in desktop view -->
            <div class="mt-4 lg:flex justify-between md:hidden hidden sm:space-y-6 md:mt-0 sm:space-x-6">
                <div class="flex items-center">
                    <span class="cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 bg-white text-center text-xs border-gray-300 outline-none" type="text" value="2" min="1" />
                    <span class="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                </div>
            </div>
            <!-- PRODUCT PRICE -->
            <div class="flex items-center space-x-4">
                <p class="text-sm font-semibold text-secondary-0 font-roboto">₱449</p>
            </div>
            <!-- delete button only appear on 1080p screen size -->
            <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="hidden p-2 xl:block font-roboto font-semibold text-tertiary-0 text-center" type="button">
                Delete
            </button>
            <!-- number of the quantity of the product only show in ipad view -->
            <div class="mt-4 flex justify-between sm:space-y-6 md:mt-0 sm:hidden sm:space-x-6">
                <div class="flex items-center">
                    <span class="cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 bg-white text-center text-xs border-gray-300 outline-none" type="text" value="2" min="1" />
                    <span class="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                </div>
            </div>
        </div>
    </div>


      </div>
      <div class="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
          <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div class="flex justify-between w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">$56.00</p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">Discount <span class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span></p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">-$28.00 (50%)</p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">$8.00</p>
            </div>
          </div>
          <div class="flex justify-between items-center w-full">
            <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
            <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">$36.00</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
      <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
        <div class="flex flex-col justify-start items-start flex-shrink-0">
          <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
            <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
            <div class="flex justify-start items-start flex-col space-y-2">
              <p class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">David Kent</p>
              <p class="text-sm dark:text-gray-300 leading-5 text-gray-600">10 Previous Orders</p>
            </div>
          </div>
  
          <div class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p class="cursor-pointer text-sm leading-5 ">david89@gmail.com</p>
          </div>
        </div>
        <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
          <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
            <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
              <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
              <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
            </div>
            <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
              <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
              <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
            </div>
          </div>
          <div class="flex w-full justify-center items-center md:justify-start md:items-start">
            <button class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Edit Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
      </div>
  
  
            </div>
            </div>

        </main>
        <CartFooter/>
    </div>

    <!-- <div class="hidden">
                <div class="h-full p-3 space-y-2 w-56">
                    <div class="flex items-center p-2 space-x-4">
                        <img src="../../assets/vue.svg" alt="" class="w-12 h-12 rounded-full">
                        <div>
                            <h2 class="text-lg font-semibold">Username</h2>
                            <span class="flex items-center space-x-1">
                                <a rel="noopener noreferrer" href="#" class="text-xs hover:underline">Edit profile</a>
                            </span>
                        </div>
                    </div>
                    <div class="divide-y dark:divide-gray-700">
                        <ul class="pt-2 pb-4 space-y-1 text-sm">
                            <li class="dark:bg-gray-800 dark:text-gray-50">
                                <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                    </svg>
                                    <span>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                    <span>My Purchase</span>
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                                        <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                                    </svg>
                                    <span>Messanges</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> -->
</template>
<script setup>
  import Navbar from '../../components/Navbar.vue';
import CartFooter from '../../components/cutomer/footer/Cart.Footer.vue';
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


























