<template>
  <div class="min-h-screen bg-gray-200 flex flex-col">
    <header>
    <CartNavbar/>
  </header>
    
    <main class="flex-1 flex md:mt-36 mt-20 mb-14 md:items-start justify-center">
        <div class="rounded-lg md:w-2/3">
            <CardCart/>
            <CardCart/>
        </div>
    </main>

    <footer class="bg-primary-0 fixed bottom-0 right-0 left-0 shadow mt-auto">
        <div class="w-full flex flex-row justify-between items-center">
            <div class="flex gap-2 items-center p-4 ml-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select All</label>
            </div>
                <div class="flex items-center justify-between">
                <p class="text-sm text-secondary-0 p-2 font-roboto">Total<span class="text-lg font-roboto font-semibold p-1">₱<span>449</span></span></p>
                <button type="button" class="text-white bg-tertiary-0 hover:bg-secondary-0 p-4 font-medium text-sm focus:outline-none">Check Out <span>(0)</span></button>
            </div>

        </div>    
    </footer>
  </div>

  <!-- <div class="h-screen">
    <div class="mx-auto bg-red-900 mt-[4.5rem] md:mt-[8rem] max-w-5xl justify-center">


      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">$129.99</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$4.99</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">$134.98 USD</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
    </div>
  </div> -->

</template>
<script setup>
import CartNavbar from '../../components/cutomer/nav/Cart.Navbar.vue';
import CardCart from '../../components/cutomer/card/Card.Cart.vue';
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
