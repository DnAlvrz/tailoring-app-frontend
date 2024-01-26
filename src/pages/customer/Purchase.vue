<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <ProfileNav />
        <main class="flex-1 flex md:mt-[6rem] mt-[5rem] md:items-start justify-center">
            <div class=" flex w-full  md:2/3 max-w-7xl flex-row mx-auto">
                <SidebarAccount/>
                <div class="w-full">
                    <fwb-tabs v-model="activeTab" class="p-5">
                        <fwb-tab name="All" title="All">
                            <CardProductPurchase :order="order" v-for="order in orders"/>
                        </fwb-tab>
                        <fwb-tab name="Pending" title="Pending">
                            <CardProductPurchase v-for="order in pending"/>
                        </fwb-tab>
                        <fwb-tab name="Ready" title="Ready">
                            <CardProductPurchase v-for="order in ready"/>
                        </fwb-tab>
                        <fwb-tab name="Completed" title="Completed">
                            <CardProductPurchase v-for="order in completed"/>
                        </fwb-tab>
                    </fwb-tabs>
                </div>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script setup>
import axios from 'axios';
import ProfileNav from '@/components/Navbar.vue';
import Footer from '@/components/customer/footer/Footer.vue';
import SidebarAccount from '@/components/Sidebar/Sidebar.Account.vue';
import CardProductPurchase from '@/components/customer/card/Card.Product.Purchase.vue';
import { onMounted, ref} from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'
const activeTab = ref('first')
const isLoading = ref(true);
const orders = ref([]);
const pending = ref([]);
const ready = ref([]);
const completed = ref([]);

const getOrders = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    try {
        isLoading.value = true;
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            }
        };
        const res = await axios.get(`${backendUrl}/user/${user.id}/orders`, config)
        orders.value = res.data.orders
        pending.value = orders.value.filter(order => order.status === 'pending')
        ready.value = orders.value.filter(order => order.status === 'ready for pickup')
        completed.value = orders.value.filter(order => order.status === 'delivered')
        console.log(orders.value)
    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false;
    }
}


// initialize components based on data attribute selectors
onMounted(() => {
initModals();
 getOrders();
})
</script>


