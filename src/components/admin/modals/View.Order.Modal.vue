<template>
    <!-- Modal toggle -->
    <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="font-roboto text-primary-0 bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2" type="button">
      View
    </button>
    
    <!-- Main modal -->
    <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-primary-0 rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <div class="flex flex-col">
                        <h3 class="text-xl font-roboto font-semibold text-secondary-0">
                            View Order
                        </h3>
                    </div>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4">
                    <div class="flex flex-col ite gap-4">
                        <div class=" grid place-content-center">
                            <svg class="rounded bg-gray-500 w-36 h-36 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <form>
                                <div class="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label for="first_name" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Customer Name</label>
                                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" value="Patrick Asmad" disabled>
                                    </div>
                                    <div>
                                        <label for="last_name" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Product</label>
                                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" value="Apple MacBook Pro 17" disabled>
                                    </div>
                                    <div>
                                        <label for="BD" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Contact No.</label>
                                        <input type="text" id="BD" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" value="09253434563" disabled>
    
                                    </div>  
                                    <div>
                                        <label for="address" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Price</label>
                                        <input type="text" id="address" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" value="$2999" disabled>
                                    </div>
                                    <div>
                                        <label for="contact" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Date/Time Delivered</label>
                                        <input type="text" id="contact" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" value="01/01/23 3:00pm" disabled>
                                    </div>
                                    <div>
                                        <label for="DA" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Quantity</label>
                                        <input type="text" id="DA" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" value="5" disabled>
                                    </div>
                                    <div>
                                        <label for="DA" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Address</label>
                                        <input type="text" id="DA" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" value="Recodo, Zamboanga City" disabled>
                                    </div>                                    <div>
                                        <label for="DA" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Catergory</label>
                                        <input type="text" id="DA" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" value="T-shirt, Cloth" disabled>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <label for="message" class="block mb-2 text-sm font-medium font-roboto text-secondary-0">Product Description</label>
                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-secondary-0 bg-gray-50 rounded-lg border border-gray-300 focus:ring-tertiary-0 focus:border-tertiary-0" disabled>asdasdasd</textarea>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </template>
    