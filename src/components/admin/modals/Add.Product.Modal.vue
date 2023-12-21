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

                    <!-- Modal body -->
                    <div class="p-4 md:p-5 space-y-4">
                        <div>
                            <Uploader
                                :server="imagesUrl"
                                @change="changeMedia"
                            />
                        </div>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="product-name" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Product Name</label>
                                    <input  v-model="productModel.name" type="text" id="product-name" class="bg-primary-0 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="Enter Product Name" required>
                                </div>
                                <div>
                                    <label for="product-serial-number" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Product Name</label>
                                    <input  v-model="productModel.productId" type="text" id="product-serial-number" class="bg-primary-0 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="Enter Product Name" required>
                                </div>
                                <div>
                                    <label for="product-price" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Price</label>
                                    <input v-model="productModel.price" type="number" min="1" id="product-price" class="bg-primary-0 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="Set" required>
                                </div>
                                <div>
                                    <label for="product-stock" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Stock</label>
                                    <input v-model="productModel.quantity" type="number" min="1" id="product-stock" class="bg-primary-0 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="0" required>
                                </div>
                                <div>

                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select category</label>
                                    <select v-model="productModel.category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Choose category</option>
                                        <option value="cloths">Cloths</option>
                                        <option value="shirts">Shirts</option>
                                        <option value="pants">Pants</option>
                                        <option value="shorts">Shorts</option>
                                    </select>

                                </div> 
                            </div>
                            <div class="mb-6">
                                <label for="message" class="block mb-2 text-sm font-medium font-roboto text-secondary-0">Product Description</label>
                                <textarea v-model="productModel.description" id="message" rows="4" class="block p-2.5 w-full text-sm text-secondary-0 bg-gray-50 rounded-lg border border-gray-300 focus:ring-tertiary-0 focus:border-tertiary-0"></textarea>
                            </div> 
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center justify-center p-2 md:p-5 rounded-b">
                        <button @click="submit" type="submit" class="text-primary-0 font-roboto bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:outline-none focus:ring-tertiary-0 hover:text-primary-0 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>                         
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import axios from 'axios';
    import Uploader from 'vue-media-upload';
    const backendUrl = ref(import.meta.env.VITE_BACKEND_URL);
    const imagesUrl = ref(`${backendUrl.value}/images/products`)
    const productModel = ref({
        name:'',
        quantity:0,
        productId:'',
        price:0,
        category:'',
        description:'',
    });
    const media = ref([]);

    const changeMedia = (newMedia) => {
        media.value = newMedia
    }


    const submit = async () => {
        const config = {
            headers: {
                Authorization: ' test token',
            }
        };
        const data = { ...productModel.value, images: media.value }
        const response = await axios.post(`${backendUrl.value}/products`,data, config);
    }
</script>