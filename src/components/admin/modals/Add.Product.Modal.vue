<template>
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
</template>