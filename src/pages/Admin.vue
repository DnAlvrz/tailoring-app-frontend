<template>
  <Sidebar/>
  <div class="p-4 sm:ml-64 h-screen bg-primary-0">
    <div class="p-4 mt-10 2xl:mx-40">
      <div class="p-2 my-4 mb-8">
        <h1 class="text-4xl  font-bold  font-roboto text-secondary-0">Dashboard</h1>
        <span class="font-roboto text-sm text-secondary-0">14th August 2023</span>
      </div>
      <div class="sm:flex sm:flex-row sm:justify-between sm:items-center mb- max-2xl:flex max-2xl:flex-col max-2xl:gap-4 max-2xl:items-center mb-20">
        <CardOrder/>
        <CardProductVue/>
        <CardUsersVue/>
      </div>
      <div class="relative overflow-x-auto">
        <h5 class="text-xl font-bold mb-6 font-roboto text-secondary-0">Recent Orders</h5>
        <TableDashboard/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Sidebar from '../components/Sidebar.vue';
import TableDashboard from '../components/admin/tables/Table.Dashboard.vue';
import CardOrder from '../components/admin/cards/Card.Order.vue';
import CardProductVue from '../components/admin/cards/Card.Product.vue';
import CardUsersVue from '../components/admin/cards/Card.Users.vue';

  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
})
</script>