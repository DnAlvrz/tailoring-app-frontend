<template>
    <!-- Modal toggle -->
    <button :data-modal-target="'view-product'+order.id" :data-modal-toggle="'view-product' + order.id" class="font-roboto text-primary-0 bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2" type="button">
      View
    </button>
    
    <!-- Main modal -->
    <div :id="'view-product' + order.id" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
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
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" :data-modal-hide="'view-product' + order.id">
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
                                        <label for="BD" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Contact No.</label>
                                        <input type="text" id="BD" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" value="09253434563" disabled>
    
                                    </div>  
                                    <div>
                                        <label for="address" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Total</label>
                                        <input type="text" id="address" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" value="$2999" disabled>
                                    </div>
                                    <div>
                                        <label for="contact" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Date/Time Delivered</label>
                                        <input type="text" id="contact" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" value="01/01/23 3:00pm" disabled>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    Product List
                    <div v-for="product in order.product_orders" class="flex-1 flex md:mt-[1rem] mt-0 md:items-start justify-center">
                        <a href="#" class="w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <div class="w-[60%] ps-3">
                                <div class="text-gray-600 line-clamp-1 dark:text-gray-400">{{ product.name }} - {{ product.id }}</div>
                                <div class="text-sm text-gray-300"><span>Quantity: </span>{{ product.quantity }}</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button v-if="order.status !== 'ready for pickup'" @click="updateStatus(order.id, 'ready for pickup')" :data-modal-hide="'view-product' + order.id" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ready for pickup</button>
                     <button v-else @click="updateStatus(order.id, 'delivered')" :data-modal-hide="'view-product' + order.id" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delivered</button>
                    <button @click="updateStatus(order.id, 'cancelled')"  :data-modal-hide="'view-product'+order.id" type="button" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancelled</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue'
import { initModals } from 'flowbite'
const backendUrl = ref(import.meta.env.VITE_BACKEND_URL);
const props = defineProps(['order']);

const updateStatus = async (orderId, status) => {
    const config = {
        headers: {
            Authorization: ' test token',
        }
    };
    const data = { status: status }
    const response = await axios.put(`${backendUrl.value}/orders/${orderId}/status`, data, config);
    location.reload();
}

// initialize components based on data attribute selectors
onMounted(() => {
    initModals();
})
</script>
    