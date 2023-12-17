<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <CartNavbar/>
        <main class="flex-1 flex md:mt-[6rem] mt-[5rem] md:items-start justify-center">
            <div class="rounded-lg md:w-2/3">
                <CardCart/>
            </div>
        </main>
        <CartFooter/>
    </div>
</template>
<script setup>
import CartNavbar from '../../components/customer/nav/Cart.Navbar.vue';
import CardCart from '../../components/customer/card/Card.Cart.vue';
import CartFooter from '../../components/customer/footer/Cart.Footer.vue';
 import { onMounted } from 'vue'
 import { 
    initDropdowns, 
     initModals,
 } from 'flowbite'
 
 // initialize components based on data attribute selectors
 onMounted(() => {
     initDropdowns();
     initModals();
 })
</script>
