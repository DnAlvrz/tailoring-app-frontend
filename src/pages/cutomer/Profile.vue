<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <ProfileNav />
        <main class="flex-1 flex md:mt-[5rem] mt-[3.5rem] md:items-start justify-center">
        <div class=" flex w-full  md:2/3 max-w-7xl flex-row mx-auto">
            <SidebarAccount/>
            <CardProfile/>
        </div>
        </main>
    <Footer/>
</div>
</template>

<script setup>
import ProfileNav from '../../components/cutomer/nav/Profile.Nav.vue';
import Footer from '../../components/cutomer/footer/Footer.vue';
import CardProfile from '../../components/cutomer/card/Card.Profile.vue';
import SidebarAccount from '../../components/Sidebar/Sidebar.Account.vue';
import { onMounted } from 'vue'
import { 
 initDropdowns, 
} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
 initDropdowns();
})
</script>

