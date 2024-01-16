<template>
  <div class="min-h-screen bg-gray-200 flex flex-col">
    <Navbar />
  <main class="flex-1 flex md:mt-[5rem] mt-[3rem] md:items-start justify-center">
    <div class=" flex md:w-2/3 max-w-7xl flex-col bg-primary-0 items-center justify-between mx-auto p-4">
        <!-- landing page hero -->
        <CardLandPageHero/>
      <!-- lading page category -->
        <CardCategory/>

      <div class="py-4">
        <div>
          <h1 class="font-lato font-semibold lg:text-2xl text-base bg-tertiary-0 text-center w-full text-primary-0">OUR PRODUCTS</h1>
        </div>
        <div v-if="!isLoading" class="grid grid-cols-2 min-[600px]:grid-cols-3 sm:grid-cols-3  md:grid-cols-3 gap-4 xl:grid-cols-4">
          <CardHomeProduct v-for="product in products" :key="product.id" :product="product"/>
        </div>
        <div class="flex justify-center items-center mt-10">
            <!-- see more button -->
          <button @click="redirectProductsPage" type="button" class="text-primary-0 bg-tertiary-0 hover:bg-escondary-0 font-medium lg:text-sm text-xs px-5 py-2.5 me-2 mb-2">SEE MORE</button>
        </div>
      </div>
    </div>
  </main>
  <Footer/>
  </div>
</template>

<script setup>
import axios from 'axios'
import Navbar from "@/components/Navbar.vue";
import CardLandPageHero from "@/components/customer/card/Card.LandPage.Hero.vue";
import CardCategory from "@/components/customer/card/Card.Category.vue";
import Footer from "@/components/customer/footer/Footer.vue";
import CardHomeProduct from "@/components/customer/card/Card.Home.Product.vue";
import { onMounted, ref } from "vue";
import {
  initDropdowns,
} from "flowbite";

const isLoading = ref(false)
const products = ref([])
const redirectProductsPage = () => {
  window.location.href = 'products'
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
  getProduct()
});
</script>
