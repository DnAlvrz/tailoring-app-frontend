<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <Navbar/>
        <main class="flex-1 flex mb-14 md:mt-[6rem] mt-[5rem] md:items-start justify-center">
            <div class="rounded-lg md:w-2/3">
                <div v-if="!isLoading">
                    <div class="border-b lg:flex lg:flex-row bg-primary-0 border-gray-300">
                        <div class="h-60 lg:h-auto lg:w-[70%] overflow-hidden">
                            <fwb-carousel slide  :pictures="productImages" />
                        </div>
                        <div class="p-4">
                            <h2 class="font-roboto font-semibold lg:text-2xl text-secondary-0 line-clamp-2">{{ product.name }}</h2>
                            <p class="font-roboto font-semibold lg:text-xl pt-2 lg:pt-4">₱ {{ product.price }}</p>
                            <div class="flex mt-2 lg:mt-4 items-center">
                                <span @click="quantity--" class="cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-tertiary-0 hover:text-blue-50"> - </span>
                                    <input class="h-8 w-8 bg-white text-center text-xs border-gray-300 outline-none" type="text" :value="quantity" min="1" />
                                <span @click="quantity++" class="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-tertiary-0 hover:text-blue-50"> + </span>
                            </div>
                            <div class="flex row mt-4 items-center">
                                <div class="flex items-center">
                                    <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg> 
                                    <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg class="w-3 h-3 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <p class="text-xs text p-2 text-gray-400">8.0 <span class="pl-2">|</span> <span class="pl-2">10Sold</span></p>
                            </div>
                            <div class="lg:flex hidden mt-6 ml-7 flex-row gap-4">
                                <button @click="addToCart" type="button" class="text-white bg-tertiary-0 lg:px-6 border border-red-500 hover:bg-secondary-0 p-4 font-medium text-sm focus:outline-none">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 bg-primary-0 mt-2  pl-2">
                        <h3 class="font-roboto py-4 border-b text-secondary-0 font-semibold">Description</h3>
                        <p class="font-roboto text-secondary-0 mt-2">{{ product.description }}</p>
                    </div>
                    <div>
                        <div class="bg-primary-0 py-4 border-b p-2 mt-2 pl-2">
                            <h4 class="font-roboto text-secondary-0 font-semibold">Product Rating</h4>
                            <div class="flex row items-center">
                                <div class="flex items-center">
                                    <fwb-rating  size="md" :rating="averageStars" />
                                </div>
                                <span class="text-xs text text-gray-400">{{ averageStars }}/5 <span>({{reviews.length}} reviews)</span></span>
                            </div>
                        </div>
                        <div v-for="review in reviews">
                            <ReviewCard v-if="review.order.rating" :review="review"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
        <ProductFooter/>
        <div class="hidden lg:block">
            <Footer/>
        </div>
    </div>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import ReviewCard from '@/components/customer/ReviewCard.vue';
import { FwbCarousel } from 'flowbite-vue'
import { useRoute } from "vue-router"
import ProductFooter from '../../components/customer/footer/Product.Footer.vue';
import Footer from '../../components/customer/footer/Footer.vue';
import axios from 'axios'
import { FwbRating } from 'flowbite-vue'
import { onMounted, ref } from 'vue'
import { initDropdowns, initModals,} from 'flowbite'
const imagesUrl = ref(import.meta.env.VITE_IMAGES_URL);
const route = useRoute()
const isLoading = ref(true);
const product = ref(null);
const quantity= ref(1);
const productImages = ref([]);
const reviews = ref([])
const averageStars = ref(1)
const addToCart = async () => {
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    if(cart.length) {
        return
    }
    cart.forEach(cartItem => {
        if(cartItem.id === product.value.id) {
            return;
        }
    });
    cart.push({
        id: product.value.id,
        name: product.value.name,
        image: `${imagesUrl.value}/${product.value.images[0].name}`,
        price: product.value.price,
        quantity: quantity.value,
        category: product.value.category,
        total: product.value.price * quantity.value
    })
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload()
}

const getProduct = async () => {
    try {
        isLoading.value = true;
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const config = {
            headers: {
                Authorization: ' test token',
            }
        };
        const res = await axios.get(`${backendUrl}/products/${route.params.id}`, config)
        product.value = res.data.product
        reviews.value = res.data.reviews
        averageStars.value = res.data.averageReviews
        console.log(reviews.value);
        productImages.value = product.value.images.map((image) => { return { src: imagesUrl.value + '/' + image.name } })
    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false;
    }
}

 // initialize components based on data attribute selectors
 onMounted(() => {
    initDropdowns();
    initModals();
    getProduct();
    
 })
</script>
