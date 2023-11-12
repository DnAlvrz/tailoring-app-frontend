<template>
  <Sidebar/>
  <div class="p-4 sm:ml-64 h-screen bg-primary-0">
    <div class="p-4 mt-10 2xl:mx-20">
      <div class="p-2 my-4 mb-8">
        <h1 class="text-4xl  font-bold  font-roboto text-secondary-0">Dashboard</h1>
        <span class="font-roboto text-sm text-secondary-0">14th August 2023</span>
      </div>
      <div class="sm:flex sm:flex-row sm:justify-between sm:items-center mb- max-2xl:flex max-2xl:flex-col max-2xl:gap-4 max-2xl:items-center mb-20">
        <div class="w-[350px] p-6 bg-primary-0 border rounded-lg shadow text-secondary-0 ">
          <a href="#">
            <h5 class="mb-2 text-mb font-roboto font-bold tracking-tight text-secondary-0">Total Order</h5>
          </a>
          <span class="font-semibold font-roboto text-2xl mb-6 text-secondary-0">0</span>
          <p class="mb-3 font-normal font-roboto text-gray-500">From the running month</p>
          <a href="#" class="max-2xl:float-right inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary-0 font-roboto bg-tertiary-0 rounded-lg hover:bg-secondary-0 focus:outline-none focus:bg-secondary-0">
            View more
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
        <div class="w-[350px] p-6 bg-primary-0 border rounded-lg shadow text-secondary-0 ">
          <a href="#">
            <h5 class="mb-2 text-mb font-roboto font-bold tracking-tight text-secondary-0">Total Products</h5>
          </a>
          <span class="font-semibold font-roboto text-2xl mb-6 text-secondary-0">0</span>
          <p class="mb-3 font-normal font-roboto text-gray-500">From the running month</p>
          <a href="#" class="max-2xl:float-right inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary-0 font-roboto bg-tertiary-0 rounded-lg hover:bg-secondary-0 focus:outline-none focus:bg-secondary-0">
            View more
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
        <div class="w-[350px] p-6 bg-primary-0 border rounded-lg shadow text-secondary-0 ">
          <a href="#">
            <h5 class="mb-2 text-mb font-roboto font-bold tracking-tight text-secondary-0">Total Order</h5>
          </a>
          <span class="font-semibold font-roboto text-2xl mb-6 text-secondary-0">0</span>
          <p class="mb-3 font-normal font-roboto text-gray-500">From the running month</p>
          <a href="#" class="max-2xl:float-right inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary-0 font-roboto bg-tertiary-0 rounded-lg hover:bg-secondary-0 focus:outline-none focus:bg-secondary-0">
            View more
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="relative overflow-x-auto">
        <h5 class="text-xl font-bold mb-6 font-roboto text-secondary-0">Recently Added</h5>
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-primary-0 uppercase bg-tertiary-0">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-primary-0 border-b">
              <th scope="row" class="px-6 py-4 font-roboto font-semibold text-secondary-0 whitespace-nowrap">
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">
                Silver
              </td>
              <td class="px-6 py-4">
                Laptop
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr class="bg-primary-0 border-b">
              <th scope="row" class="px-6 py-4 font-roboto font-semibold text-secondary-0 whitespace-nowrap">
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">
                White
              </td>
              <td class="px-6 py-4">
                Laptop PC
              </td>
              <td class="px-6 py-4">
                $1999
              </td>
            </tr>
            <tr class="bg-primary-0 border-b">
              <th scope="row" class="px-6 py-4 font-roboto font-semibold text-secondary-0 whitespace-nowrap">
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">
                Black
              </td>
              <td class="px-6 py-4">
                Accessories
              </td>
              <td class="px-6 py-4">
                $99
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Sidebar from '../components/Sidebar.vue';

  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
})
</script>