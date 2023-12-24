<script setup>
    import axios from 'axios';
    import { onMounted, ref } from 'vue'
    import { initDropdowns, initModals } from 'flowbite'
    import Sidebar from '@/components/Sidebar.vue';
    import NavPage from '@/components/admin/pagination/Nav.Page.vue';
    import TableProductVue from '@/components/admin/tables/Table.Product.vue';
    import AddProductModal from '@/components/admin/modals/Add.Product.Modal.vue';
    import SearchBox from '@/components/admin/SearchBox.vue';
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
            isLoading.value=false;
        }
    }
    // initialize components based on data attribute selectors
    onMounted(() => {
        initDropdowns();
        initModals();
        getProducts();
    })
</script>

<template>
    <Sidebar/>
    <div class="p-4 sm:ml-64 h-screen bg-primary-0">
        <div class="p-4 mt-10 2xl:mx-20">
            <div class="p-2 my-4">
                <h1 class="text-4xl  font-bold  font-roboto text-secondary-0">Listed Products</h1>
                <span class="font-roboto text-sm text-secondary-0">14th August 2023</span>
            </div>
            <div class="pb-12 pt-2">
                <AddProductModal />
            </div>
            <div class="relative overflow-x-auto">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <SearchBox />
                    <div  v-if="!isLoading">
                        <TableProductVue :products="products" />
                    </div>
                </div>
                <NavPage/>
            </div>
        </div>
    </div>
</template>
 
