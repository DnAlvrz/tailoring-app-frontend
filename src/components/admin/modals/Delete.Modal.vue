<template>
    <button :data-product-id="props.productId" :data-modal-target="'delete-modal-'+props.productId" :data-modal-toggle="'delete-modal-'+props.productId" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2" type="button">
        Delete
    </button>

    <div :id="'delete-modal-'+props.productId" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="relative bg-primary-0 rounded-lg shadow">
                <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" :data-modal-hide="'delete-modal-' + props.productId">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-4 md:p-5 text-center">
                    <svg class="mx-auto mb-4 text-secondary-0 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <input type="hidden" name="">
                    <h3 class="mb-5 text-lg font-normal text-secondary-0">Are you sure you want to delete this product?</h3>
                    <button @click.prevent="deleteProduct()" :data-modal-hide="'delete-modal-' + props.productId" type="button" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:outline-none focus:ring-tertiary-0 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                        Yes, I'm sure
                    </button>
                    <button :data-modal-hide="'delete-modal-'+props.productId" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref} from 'vue'
import {initModals, Modal  } from 'flowbite'
const props =  defineProps(['productId']);
const isLoading = ref(false);


const deleteProduct = async () => {
    const $targetEl = document.getElementById('delete-modal-' + props.productId);
    console.log($targetEl);
    const modal = new Modal($targetEl);
    try {
        isLoading.value = true;
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const config = {
            headers: {
                Authorization: ' test token',
            }
        };
        console.log(`${backendUrl}/products/${props.productId}`);
        const res = await axios.delete(`${backendUrl}/products/${props.productId}`, config)
    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false;
        modal.hide()
    }
}

onMounted(() => {
    initModals();
})
</script>