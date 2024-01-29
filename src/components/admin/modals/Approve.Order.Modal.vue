<template>
    <button :data-modal-target="'popup-modal'+order" :data-modal-toggle="'popup-modal'+order" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2" type="button">
    Approve
    </button>

    <div :id="'popup-modal'+order" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="relative bg-primary-0 rounded-lg shadow">
                <div class="p-4 md:p-5 text-center">
                    <h3 class="mb-5 text-lg font-normal text-secondary-0">Are you sure this ready?</h3>
                    <button @click="updateStatus(order)" :data-modal-hide="'popup-modal'+order" type="button" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:outline-none focus:ring-tertiary-0 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                        Yes, I'm sure
                    </button>
                    <button :data-modal-hide="'popup-modal'+order" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref} from 'vue'
import { initModals } from 'flowbite'
const backendUrl = ref(import.meta.env.VITE_BACKEND_URL);
const props = defineProps(['order']);

const updateStatus = async (orderId) => {
    const config = {
        headers: {
            Authorization: ' test token',
        }
    };
    const data = { status:'approved' }
    const response = await axios.put(`${backendUrl.value}/orders/${orderId}/status`, data, config);
    location.reload();
}

// initialize components based on data attribute selectors
onMounted(() => {
    initModals();
})
</script>