<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <ProfileNav />
        <main class="flex-1 flex md:mt-[6rem] mt-[5rem] md:items-start justify-center">
        <div class=" flex w-full  md:2/3 max-w-7xl flex-row mx-auto">
            <SidebarAccount/>
            <div class="w-full">
    <!-- This is an example component -->
    <div class="">

<div class="border-b bg-primary-0 border-gray-200 w-full">
    <ul class="flex flex-row -mb-px overflow-auto" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li class="mr-2 w-full" role="presentation">
            <button class=" text-gray-500 w-full hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2" id="purchase-tab" data-tabs-target="#purchase" type="button" role="tab" aria-controls="purchase" aria-selected="true">Purchase</button>
        </li>
        <li class="mr-2 w-full" role="presentation">
            <button class="inline-block w-full text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 active" id="completed-tab" data-tabs-target="#completed" type="button" role="tab" aria-controls="completed" aria-selected="false">Completed</button>
        </li>
        <li class="mr-2 w-full" role="presentation">
            <button class="inline-block w-full text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2" id="cancelled-tab" data-tabs-target="#cancelled" type="button" role="tab" aria-controls="cancelled" aria-selected="false">Cancelled</button>
        </li>
    </ul>
</div>
<div id="myTabContent">
    <!-- Purchase tab -->
    <div class="flex flex-col gap-8 rounded-lg" id="purchase" role="tabpanel" aria-labelledby="purchase-tab">
        <a class="shadow w-full border bg-primary-0" href="">
            <div class="p-4 border-b">
                <div class="flex flex-row">
                    <div class="flex flex-row">
                        <img class="w-20 h-20 md:w-52 md:h-24" src="../../assets/cloth.jpg" alt="">
                        <div class="p-2">
                            <h5 class="font-roboto text-secondary-0 line-clamp-1 text-base uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minima omnis nulla odio officiis, atque autem quo consequatur doloribus. Ea expedita adipisci eos ipsa saepe doloremque aperiam ratione velit veritatis.</h5>
                            <p class="text-gray-400 font-roboto text-sm">Category: <span>Shorts</span></p>
                            <span class="text-gray-600 font-roboto text-md">x1</span>
                        </div>
                    </div>
                    <div class="grid place-content-center p-4">
                        <span class="font-roboto text-secondary-0">$199</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-end p-4">
                <p class="text-base font-roboto text-secondary-0">Order Total: <span class="text-2xl">$299</span></p>
            </div>
        </a>
    </div>
    <!-- Complete Order Tab -->
    <div class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800" id="completed" role="tabpanel" aria-labelledby="completed-tab">

    </div>
    <!-- Cancelled Order Tab -->
    <div class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="cancelled" role="tabpanel" aria-labelledby="cancelled-tab">

    </div>
</div>
</div>
</div>
        </div>
        </main>
    <Footer/>
</div>
</template>

<script setup>
import ProfileNav from '../../components/cutomer/nav/Profile.Nav.vue';
import Footer from '../../components/cutomer/footer/Footer.vue';
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


