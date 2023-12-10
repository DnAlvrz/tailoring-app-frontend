<template>
        <div class="min-h-screen bg-gray-200 flex flex-col">
            <Navbar />
    <main class="flex-1 flex md:mt-[5rem] mt-[4rem] md:items-start justify-center">
      <div class=" flex md:2/3 max-w-7xl flex-col bg-primary-0 items-center justify-between mx-auto p-4">
        <!-- lading page category -->
          <CardCategoryHome/>
        <div class="py-4">
          <div>
            <h1 class="font-lato font-semibold lg:text-2xl text-base bg-tertiary-0 text-center w-full text-primary-0">FEATURED PRODUCTS</h1>
          </div>
          <div class="grid grid-cols-2 min-[600px]:grid-cols-3 sm:grid-cols-3  md:grid-cols-4 gap-4 lg:grid-cols-4">
          <!-- landing page products -->
              <CardHomeProduct/>
              <CardHomeProduct/>
              <CardHomeProduct/>
              <CardHomeProduct/>
              <CardHomeProduct/>
              <CardHomeProduct/>
              <CardHomeProduct/>
              <CardHomeProduct/>
              <CardHomeProduct/>
              <CardHomeProduct/>
              <CardHomeProduct/>
              <CardHomeProduct/>
          </div>
          <div class="flex justify-center items-center mt-10">
              <nav aria-label="Page navigation example">
                <ul class="flex items-center -space-x-px h-8 text-sm">
                  <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span class="sr-only">Previous</span>
                      <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                  </li>
                  <li>
                    <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-primary-0 border  border-tertiary-0 bg-tertiary-0 hover:bg-blue-100 hover:text-tertiary-0">3</a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                      <span class="sr-only">Next</span>
                      <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import CardHomeProduct from '../components/cutomer/card/Card.Home.Product.vue';
import CardCategoryHome from '../components/cutomer/card/Card.Category.Home.vue';
import Footer from '../components/cutomer/footer/Footer.vue';
import { onMounted } from 'vue'
 import { 
     initDropdowns, 
  } from 'flowbite'
 
 // initialize components based on data attribute selectors
 onMounted(() => {
     initDropdowns();
 })
</script>

  