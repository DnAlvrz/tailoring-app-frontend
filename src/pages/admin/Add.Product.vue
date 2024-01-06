<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <Navbar />
        <main class="flex-1 flex md:mt-[5rem] mt-[4rem] md:items-start justify-center">
            <div class=" flex md:w-2/3 flex-col bg-primary-0 mx-auto p-4">
                <h1 class="font-roboto p-4 text-lg font-semibold text-secondary-0">Add Products</h1>
                <div class="flex p-8 flex-col">
                    <div class="flex mt-4 justify-end items-center gap-4 flex-row">
                        <p>Product Images:</p>
                        <div class="w-[80%]">
                            <Uploader class=""
                            :server="imagesUrl"
                            @change="changeMedia"
                            />
                        </div>
                    </div>
                    <div class="flex mt-4 justify-end items-center gap-4 flex-row">
                        <label for="product-name" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Product Name:</label>
                        <div class="w-[80%]">
                            <input  v-model="productModel.name" type="text" id="product-name" class="bg-primary-0 border border-gray-300 text-secondary-0 text-sm focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="Enter Product Name" required>
                        </div>
                    </div>
                    <div class="flex mt-4 justify-end items-center gap-4 flex-row">
                        <label for="product-serial-number" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Product Serial Number:</label>
                        <div class="w-[80%]">
                            <input v-model="productModel.productId" type="text" id="product-serial-number" class="bg-primary-0 w-full border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block p-2.5" placeholder="Enter Product Name" required>
                        </div>
                    </div>
                    <div class="flex mt-4 justify-end items-center gap-4 flex-row">
                        <label for="product-price" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Price</label>
                        <div class="w-[80%]">
                            <input v-model="productModel.price" type="number" min="1" id="product-price" class="bg-primary-0 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="Set" required>
                        </div>
                    </div>
                    <div class="flex mt-4 justify-end items-center gap-4 flex-row">
                        <label for="product-stock" class="block mb-2 font-roboto text-sm font-medium text-secondary-0">Stock</label>
                        <div class="w-[80%]">
                            <input v-model="productModel.quantity" type="number" min="1" id="product-stock" class="bg-primary-0 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="0" required>
                        </div>
                    </div>
                    <div class="flex mt-4 justify-end items-center gap-4 flex-row">
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select category</label>
                        <div class="w-[80%]">
                            <select v-model="productModel.category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose category</option>
                            <option value="cloths">Cloths</option>
                            <option value="shirts">Shirts</option>
                            <option value="pants">Pants</option>
                            <option value="shorts">Shorts</option>
                        </select>
                        </div>
                    </div>                             
                    <div class="flex mt-4 justify-end items-center gap-4 flex-row">
                        <label for="message" class="block mb-2 text-sm font-medium font-roboto text-secondary-0">Product Description</label>
                        <div class="w-[80%]">
                            <textarea v-model="productModel.description" id="message" rows="4" class="block p-2.5 w-full text-sm text-secondary-0 bg-gray-50 rounded-lg border border-gray-300 focus:ring-tertiary-0 focus:border-tertiary-0"></textarea>
                        </div>
                    </div> 
                </div>
                <div class="flex justify-center gap-20 items-center">
                    <button type="submit" class="text-primary-0 font-roboto bg-red-600 hover:bg-tertiary-0 focus:ring-4 focus:outline-none focus:ring-tertiary-0 hover:text-primary-0 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Cancel</button>
                    <button type="submit" class="text-primary-0 font-roboto bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:outline-none focus:ring-tertiary-0 hover:text-primary-0 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Sumbit</button>
                </div>

            </div>
        </main>
        <Footer/>
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

