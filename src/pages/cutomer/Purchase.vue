<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <ProfileNav />
        <main class="flex-1 flex md:mt-[6rem] mt-[5rem] md:items-start justify-center">
            <div class=" flex w-full  md:2/3 max-w-7xl flex-row mx-auto">
                <SidebarAccount/>
                <div class="w-full">
                    <div class="border-b bg-primary-0 border-gray-200 w-full">
                        <ul class="flex flex-row -mb-px overflow-auto" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li class="mr-2 w-full" role="presentation">
                                <button class=" text-gray-500 w-full hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-semibold font-roboto  text-center border-transparent border-b-2" id="purchase-tab" data-tabs-target="#purchase" type="button" role="tab" aria-controls="purchase" aria-selected="true">Purchase</button>
                            </li>
                            <li class="mr-2 w-full" role="presentation">
                                <button class="inline-block w-full text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-roboto font-semibold text-center border-transparent border-b-2 active" id="completed-tab" data-tabs-target="#completed" type="button" role="tab" aria-controls="completed" aria-selected="false">Completed</button>
                            </li>
                            <li class="mr-2 w-full" role="presentation">
                                <button class="inline-block w-full text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-roboto  font-semibold text-center border-transparent border-b-2" id="cancelled-tab" data-tabs-target="#cancelled" type="button" role="tab" aria-controls="cancelled" aria-selected="false">Cancelled</button>
                            </li>
                        </ul>
                    </div>
                    <div id="myTabContent">
                        <!-- Purchase tab -->
                        <div class="flex  flex-col gap-8 rounded-lg" id="purchase" role="tabpanel" aria-labelledby="purchase-tab">
                            <CardProductPurchase/>
                        </div>
                        <!-- Complete Order Tab -->
                        <div class="flex flex-col gap-8 rounded-lg" id="completed" role="tabpanel" aria-labelledby="completed-tab">
                            <CardProductPurchase/>
                            asd
                        </div>
                        <!-- Cancelled Order Tab -->
                        <div class="flex flex-col gap-8 rounded-lg" id="cancelled" role="tabpanel" aria-labelledby="cancelled-tab">
                            <CardProductPurchase/>
                            123
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
import CardProductPurchase from '../../components/cutomer/card/Card.Product.Purchase.vue';
import { onMounted } from 'vue'
import { 
 initDropdowns, 
} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
 initDropdowns();
})
</script>


