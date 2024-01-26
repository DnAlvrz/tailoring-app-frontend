<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <Navbar />
        <main class="flex-1 flex md:mt-[5rem] mt-0 md:items-start justify-center">
            <div class=" flex md:w-[40%] flex-col bg-primary-0 mx-auto p-4">
                <div class="flex items-center pb-4 gap-1">
                    <button>
                        <font-awesome-icon icon="fa-solid fa-arrow-left" size="lg" />
                         
                    </button>
                    <h1 class="font-roboto text-lg font-semibold text-secondary-0">Rate Product</h1>
                </div>
                <div>
                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="flex-shrink-0">
                            <img class="w-14 h-14" src="../../assets/cloth.jpg" alt="Jese image">
                        </div>
                        <div class="w-[60%] ps-3">
                            <div class="text-gray-600 line-clamp-1 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ut quas asperiores nulla eaque vel, esse voluptatibus quae neque modi est molestias voluptates assumenda et vitae amet a explicabo cupiditate?</div>
                            <div class="text-sm text-gray-300"><span>Category: </span>asdasdasdasd</div>
                        </div>
                    </a>
                </div>
                <div class="flex gap-12 px-4 py-3">
                    <span>Product Quality</span>
                    <div class="flex gap-3">
                        <div class="flex items-center">
                            <fwb-rating  size="md" v-if="rating > 1" :rating="rating" />
                            <svg v-else @click=updateRating($event) v-for="index in 5" class="w-6 h-6 ms-3 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path :data-bind="index" d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>

                        </div>
                        <h3 class="text-yellow-400">Good</h3>
                    </div>
                </div>
                <div class="px-4">
                    <textarea v-model="message" id="message" rows="4" class="block p-2.5 w-full text-sm resize-none mb-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-secondary-0 focus:border-secondary-0" placeholder="Write your thoughts about the product to help other buyer"></textarea>
                </div>
                <div class="p-4 self-end">
                    <button class="py-2 px-10 text-sm mr-2 border hover:bg-tertiary-0 hover:text-primary-0 font-roboto text-secondary-0">Cancel</button>
                    <button @click="submit" class="py-2 px-10 text-sm mr-2 border bg-tertiary-0 text-primary-0 font-roboto hover:bg-secondary-0">Submit</button>
                </div>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script setup>
import axios from 'axios';
import { FwbRating } from 'flowbite-vue'
import { useRoute } from "vue-router"
import { onMounted, ref } from 'vue'
const route = useRoute()
const backendUrl = ref(import.meta.env.VITE_BACKEND_URL);
const rating = ref(1)
const orderId = ref(route.params.id);
const message = ref("");
const updateRating = (e) => {
    rating.value = e.target.getAttribute('data-bind')
}
const submit = async () => {
    const config = {
        headers: {
            Authorization: 'test token',
        }
    };
    const data = {
        order_id: orderId.value,
        rating:rating.value,
        message: message.value
    }
    console.log(`${backendUrl.value}/rating`);
    const response = await axios.post(`${backendUrl.value}/rating`, data, config);
    if (response.data && response.data.status) {
        window.location.href = '/products'
    }
}
</script>

