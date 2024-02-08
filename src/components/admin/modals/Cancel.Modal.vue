<template>
    <button :data-modal-target="'cancel-modal'+order" :data-modal-toggle="'cancel-modal' + order" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2" type="button">
    Cancel
    </button>

    <div :id="'cancel-modal' + order" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="relative bg-primary-0 rounded-lg shadow">
                <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" :data-modal-hide="'cancel-modal' + order">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-4 md:p-5 text-center">
                    <svg class="mx-auto mb-4 text-secondary-0 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <h3 class="mb-5 text-lg font-normal text-secondary-0">Are you sure you want to cancel this order?</h3>
                    <button @click="updateStatus(order)" :data-modal-hide="'cancel-modal'+order" type="button" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:outline-none focus:ring-tertiary-0 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                        Yes, I'm sure
                    </button>
                    <button :data-modal-hide="'cancel-modal' + order" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</button>
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

const updateStatus = async (orderId) => {
    try {
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            }
        };
        const data = { status: 'cancelled' }
        const response = await axios.put(`${backendUrl.value}/orders/${orderId}/status`, data, config);
        location.reload();
    } catch (error) {
        console.log(error)
    }
}

// initialize components based on data attribute selectors
onMounted(() => {
    initModals();
})
</script>