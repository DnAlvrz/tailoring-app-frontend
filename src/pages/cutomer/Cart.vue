<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <header>
            <CartNavbar/>
        </header>
        <main class="flex-1 flex md:mt-36 mt-20 mb-14 md:items-start justify-center">
            <div class="rounded-lg md:w-2/3">
                <CardCart/>
            </div>
        </main>
        <footer>
            <CartFooter/>
        </footer>
    </div>
</template>
<script setup>
import CartNavbar from '../../components/cutomer/nav/Cart.Navbar.vue';
import CardCart from '../../components/cutomer/card/Card.Cart.vue';
import CartFooter from '../../components/cutomer/footer/Cart.Footer.vue';
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
