<template>
    <Sidebar/>
    <div class="p-4 sm:ml-64 h-screen bg-primary-0">
        <div class="p-4 mt-10 2xl:mx-20">
            <div class="p-2 my-4">
                <h1 class="text-4xl  font-bold  font-roboto text-secondary-0">Listed Products</h1>
                <span class="font-roboto text-sm text-secondary-0">14th August 2023</span>
            </div>
            <div class="pb-12 pt-2">
                <!-- Modal toggle -->
                <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block font-roboto font-semibold text-primary-0 bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:outline-none focus:ring-tertiary-0 rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                Add Product
                </button>
                <!-- Main modal -->
                <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-primary-0 rounded-lg shadow">
                        <!-- Modal header -->
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                <h3 class="text-xl font-roboto font-semibold text-secondary-0">
                                    Add Product
                                </h3>
                                <button type="button" class="text-tertiary-0 bg-transparent hover:bg-gray-200 hover:text-secondary-0 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div>
                                <form>
                                    <!-- Modal body -->
                                    <div class="p-4 md:p-5 space-y-4">
                                        <div>
                                            <label class="block mb-2 text-sm font-medium font-roboto text-secondary-0" for="file_input">Upload file</label>
                                            <input class="block w-full text-sm text-secondary-0 border border-gray-300 rounded-lg cursor-pointer bg-gray-5 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file" required>
                                        </div>
                                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                                <div>
                                                    <label for="first_name" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Product Name</label>
                                                    <input type="text" id="first_name" class="bg-primary-0 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="Enter Product Name" required>
                                                </div>
                                                <div>
                                                    <label for="last_name" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Price</label>
                                                    <input type="number" id="last_name" class="bg-primary-0 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="Set" required>
                                                </div>
                                                <div>
                                                    <label for="company" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Stock</label>
                                                    <input type="number" id="company" class="bg-primary-0 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="0" required>
                                                </div>
                                                <div>
                                                    <label for="company" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Shipping Fee</label>
                                                    <input type="number" id="company" class="bg-primary-0 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="0" required>
                                                </div>
                                                <div>
                                                    <label for="company" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Catergory</label>
                                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-gray-900 border-gray-300 bg-gray-50 border hover:bg-tertiary-0 hover:text-primary-0 font-roboto focus:ring-4 focus:outline-none w-full focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-between flex items-center" type="button">
                                                        Please set category 
                                                        <svg class="w-2.5 h-2.5 ms-3 float-left" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                                        </svg>
                                                    </button>

                                                    <!-- Dropdown menu -->
                                                    <div id="dropdown" class="z-10  hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-72">
                                                        <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                                                            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                                <div class="flex items-center ps-3">
                                                                    <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 rounded focus:ring-tertiary-0 focus:ring-2">
                                                                    <label for="vue-checkbox" class="w-full py-3 ms-2 font-roboto text-sm font-medium text-gray-900">Cloth</label>
                                                                </div>
                                                            </li>
                                                            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                                <div class="flex items-center ps-3">
                                                                    <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 rounded focus:ring-tertiary-0 focus:ring-2">
                                                                    <label for="react-checkbox" class="w-full py-3 ms-2 font-roboto text-sm font-medium text-gray-900">T-shit</label>
                                                                </div>
                                                            </li>
                                                            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                                <div class="flex items-center ps-3">
                                                                    <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 rounded focus:ring-tertiary-0 focus:ring-2">
                                                                    <label for="angular-checkbox" class="w-full py-3 ms-2 font-roboto text-sm font-medium text-gray-900">Pants</label>
                                                                </div>
                                                            </li>
                                                            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                                <div class="flex items-center ps-3">
                                                                    <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 rounded focus:ring-tertiary-0 focus:ring-2">
                                                                    <label for="laravel-checkbox" class="w-full py-3 ms-2 font-roboto text-sm font-medium text-gray-900">Shorts</label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="mb-6">
                                                <label for="message" class="block mb-2 text-sm font-medium font-roboto text-secondary-0">Product Description</label>
                                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-secondary-0 bg-gray-50 rounded-lg border border-gray-300 focus:ring-tertiary-0 focus:border-tertiary-0"></textarea>
                                            </div> 
                                    </div>
                                    <!-- Modal footer -->
                                    <div class="flex items-center justify-center p-2 md:p-5 rounded-b">
                                        <button type="submit" class="text-primary-0 font-roboto bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:outline-none focus:ring-tertiary-0 hover:text-primary-0 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>                         
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative overflow-x-auto">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="flex max-sm:flex-col max-sm:pt-6 max-sm:flex-wrap items-center justify-between pb-4">
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-secondary-0 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-tertiary-0 focus:border-tertiary-0" placeholder="Search for items">
                        </div>
                        <div>
                            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" class="inline-flex items-center font-roboto text-primary-0 bg-tertiary-0 border border-gray-300 focus:outline-none hover:bg-secondary-0 hover:text-primary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-3 py-1.5 group" type="button">
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
                                            <label for="filter-radio-1" class="w-full ml-2 font-roboto text-sm font-medium text-gray-900 rounded group-hover:text-primary-0">Last day</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex items-center p-2 rounded hover:bg-tertiary-0 group">
                                            <input id="filter-radio-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 focus:ring-tertiary-0">
                                            <label for="filter-radio-2" class="w-full ml-2 font-roboto text-sm font-medium text-gray-900 rounded group-hover:text-primary-0">Last 7 days</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex items-center p-2 rounded hover:bg-tertiary-0 group">
                                            <input id="filter-radio-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 focus:ring-tertiary-0">
                                            <label for="filter-radio-3" class="w-full ml-2 font-roboto text-sm font-medium text-gray-900 rounded group-hover:text-primary-0">Last 30 days</label>
                                    </div>
                                    </li>
                                    <li>
                                        <div class="flex items-center p-2 rounded hover:bg-tertiary-0 group">
                                            <input id="filter-radio-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 focus:ring-tertiary-0">
                                            <label for="filter-radio-4" class="w-full ml-2 font-roboto text-sm font-medium text-gray-900 rounded group-hover:text-primary-0">Last Month</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex items-center p-2 rounded hover:bg-tertiary-0 group">
                                            <input id="filter-radio-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 focus:ring-tertiary-0">
                                            <label for="filter-radio-5" class="w-full ml-2 font-roboto text-sm font-medium text-gray-900 rounded group-hover:text-primary-0">Last Year</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <table class="w-full text-sm text-left text-secondary-0">
                        <thead class="text-xs text-primary-0 uppercase bg-tertiary-0">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Stock
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Availability
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
                                    Apple MacBook Pro 17
                                </th>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    10
                                </td>
                                <td class="px-6 py-4">
                                    6
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Edit</a>
                                    <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b hover:bg-gray-50">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Microsoft Surface Pro
                                </th>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    15
                                </td>
                                <td class="px-6 py-4">
                                    10
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Edit</a>
                                    <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b hover:bg-gray-50">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Magic Mouse 2
                                </th>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    20
                                </td>
                                <td class="px-6 py-4">
                                    15
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Edit</a>
                                    <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b hover:bg-gray-50">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Apple Watch
                                </th>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    30
                                </td>
                                <td class="px-6 py-4">
                                    20
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Edit</a>
                                    <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b hover:bg-gray-50">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    iPad
                                </th>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    16
                                </td>
                                <td class="px-6 py-4">
                                    13
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Edit</a>
                                    <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white hover:bg-gray-50">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Apple iMac 27"
                                </th>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    20
                                </td>
                                <td class="px-6 py-4">
                                    6
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Edit</a>
                                    <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white hover:bg-gray-50">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Apple iMac 27"
                                </th>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    20
                                </td>
                                <td class="px-6 py-4">
                                    6
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Edit</a>
                                    <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white hover:bg-gray-50">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Apple iMac 27"
                                </th>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    20
                                </td>
                                <td class="px-6 py-4">
                                    6
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Edit</a>
                                    <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white hover:bg-gray-50">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Apple iMac 27"
                                </th>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    20
                                </td>
                                <td class="px-6 py-4">
                                    6
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Edit</a>
                                    <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white hover:bg-gray-50">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Apple iMac 27"
                                </th>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    20
                                </td>
                                <td class="px-6 py-4">
                                    6
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Edit</a>
                                    <a href="#" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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