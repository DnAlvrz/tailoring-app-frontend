<template>
    <Sidebar/>
    <div class="p-4 sm:ml-64 h-screen bg-primary-0">
        <div class="p-4 mt-10 2xl:mx-20">
            <div class="p-2 my-4 mb-8">
        <h1 class="text-4xl  font-bold  font-roboto text-secondary-0">Listed Orders</h1>
        <span class="font-roboto text-sm text-secondary-0">14th August 2023</span>
      </div>
      <div class="relative overflow-x-auto">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class="flex max-sm:flex-col max-sm:pt-6 max-sm:flex-wrap items-center justify-between pb-4">
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-secondary-0 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-tertiary-0 focus:border-tertiary-0" placeholder="Search for items">
                    </div>
                    <div>
                        <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" class="inline-flex items-center text-primary-0 bg-tertiary-0 border border-gray-300 focus:outline-none hover:bg-secondary-0 hover:text-primary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-3 py-1.5 group" type="button">
                            <svg class="w-3 h-3 text-primary-0 group-hover:text-primary-0 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                                </svg>
                            Last 30 days
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div id="dropdownRadio" class="z-10 hidden w-48 bg-primary-0 divide-y divide-gray-100 rounded-lg shadow" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
                            <ul class="p-3 space-y-1 text-sm text-secondary-0" aria-labelledby="dropdownRadioButton">
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-tertiary-0 group">
                                        <input id="filter-radio-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 focus:ring-tertiary-0">
                                        <label for="filter-radio-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded group-hover:text-primary-0">Last day</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-tertiary-0 group">
                                        <input id="filter-radio-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 focus:ring-tertiary-0">
                                        <label for="filter-radio-2" class="w-full ml-2 text-sm font-medium text-gray-900 rounded group-hover:text-primary-0">Last 7 days</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-tertiary-0 group">
                                        <input id="filter-radio-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 focus:ring-tertiary-0">
                                        <label for="filter-radio-3" class="w-full ml-2 text-sm font-medium text-gray-900 rounded group-hover:text-primary-0">Last 30 days</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-tertiary-0 group">
                                        <input id="filter-radio-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 focus:ring-tertiary-0">
                                        <label for="filter-radio-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded group-hover:text-primary-0">Last Month</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-tertiary-0 group">
                                        <input id="filter-radio-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 focus:ring-tertiary-0">
                                        <label for="filter-radio-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded group-hover:text-primary-0">Last Year</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-primary-0 uppercase bg-tertiary-0">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Customer name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Item
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Payment Method
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Shipping Fee
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Patrick Asmad
                            </th>
                            <td class="px-6 py-4">
                                Apple MacBook Pro 17
                            </td>
                            <td class="px-6 py-4">
                                COD
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                Pending
                            </td>
                            <td class="px-6 py-4">
                                10
                            </td>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Approve</a>
                                <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Patrick Asmad
                            </th>
                            <td class="px-6 py-4">
                                Apple MacBook Pro 17
                            </td>
                            <td class="px-6 py-4">
                                COD
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                Approved
                            </td>
                            <td class="px-6 py-4">
                                10
                            </td>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Approve</a>
                                <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Patrick Asmad
                            </th>
                            <td class="px-6 py-4">
                                Apple MacBook Pro 17
                            </td>
                            <td class="px-6 py-4">
                                COD
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                Pending
                            </td>
                            <td class="px-6 py-4">
                                10
                            </td>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Approve</a>
                                <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Patrick Asmad
                            </th>
                            <td class="px-6 py-4">
                                Apple MacBook Pro 17
                            </td>
                            <td class="px-6 py-4">
                                COD
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                Approved
                            </td>
                            <td class="px-6 py-4">
                                10
                            </td>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Approve</a>
                                <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Patrick Asmad
                            </th>
                            <td class="px-6 py-4">
                                Apple MacBook Pro 17
                            </td>
                            <td class="px-6 py-4">
                                COD
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                Pending
                            </td>
                            <td class="px-6 py-4">
                                10
                            </td>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Approve</a>
                                <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Patrick Asmad
                            </th>
                            <td class="px-6 py-4">
                                Apple MacBook Pro 17
                            </td>
                            <td class="px-6 py-4">
                                COD
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                Pending
                            </td>
                            <td class="px-6 py-4">
                                10
                            </td>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Approve</a>
                                <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Patrick Asmad
                            </th>
                            <td class="px-6 py-4">
                                Apple MacBook Pro 17
                            </td>
                            <td class="px-6 py-4">
                                COD
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                Pending
                            </td>
                            <td class="px-6 py-4">
                                10
                            </td>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Approve</a>
                                <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Patrick Asmad
                            </th>
                            <td class="px-6 py-4">
                                Apple MacBook Pro 17
                            </td>
                            <td class="px-6 py-4">
                                COD
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                Pending
                            </td>
                            <td class="px-6 py-4">
                                10
                            </td>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Approve</a>
                                <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Patrick Asmad
                            </th>
                            <td class="px-6 py-4">
                                Apple MacBook Pro 17
                            </td>
                            <td class="px-6 py-4">
                                COD
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                Pending
                            </td>
                            <td class="px-6 py-4">
                                10
                            </td>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Approve</a>
                                <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Patrick Asmad
                            </th>
                            <td class="px-6 py-4">
                                Apple MacBook Pro 17
                            </td>
                            <td class="px-6 py-4">
                                COD
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                Pending
                            </td>
                            <td class="px-6 py-4">
                                10
                            </td>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Approve</a>
                                <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <div class="flex justify-center items-center mt-10">
                    <nav aria-label="Page navigation example">
                        <ul class="inline-flex -space-x-px text-sm">
                            <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                            </li>
                            <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                            <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                            </li>
                            <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                            </li>
                            <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  </div>
 </template>
 
<script setup>
import Sidebar from '../../components/Sidebar.vue';
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