<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
      <Navbar />
      <main class="flex-1 flex md:mt-[5rem] mt-[4rem] md:items-start justify-center">
        <div class=" flex md:2/3 max-w-7xl flex-col bg-primary-0 items-center justify-between mx-auto p-4">
          <div class="py-4">
            <div>
              <h1 class="font-lato font-semibold lg:text-2xl text-base bg-tertiary-0 text-center w-full text-primary-0">OUR PRODUCTS</h1>
            </div>
            <div class="grid grid-cols-2 min-[600px]:grid-cols-3 sm:grid-cols-3  md:grid-cols-4 gap-4 lg:grid-cols-4" v-if="!isLoading" >
            <!-- landing page products -->
                <CardHomeProduct v-for="product in products" :key="product.id" :product="product"/>
            </div>
            <div v-else class="h-80 text-center">   
                <div role="status">
                <svg aria-hidden="true" class="inline w-10 h-10text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div class="flex justify-center items-center mt-10">
                
            </div>
          </div>
        </div>
      </main>
    <Footer/>
    </div>
</template>

<script setup>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import CardHomeProduct from '@/components/customer/card/Card.Home.Product.vue';
import CardCategoryHome from '@/components/customer/card/Card.Category.Home.vue';
import Footer from '@/components/customer/footer/Footer.vue';
import { onMounted, ref } from 'vue'
import { 
  initDropdowns, 
} from 'flowbite'
const isLoading = ref(true);
const products = ref([]);
const getProducts = async () => {
  try {
    isLoading.value = true;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const config = {
      headers: {
        Authorization: ' test token',
      }
    };
    const res = await axios.get(`${backendUrl}/products`, config)
    products.value = res.data.products
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false;
  }
}
 // initialize components based on data attribute selectors
 onMounted(() => {
    initDropdowns();
    getProducts();
 })
</script>

  