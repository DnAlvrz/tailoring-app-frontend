<template>
    <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-primary-0 uppercase bg-tertiary-0">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Customer name
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Address
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Contanct No.
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b hover:bg-gray-50" v-for="order in orders" :key="order.id">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {{ order.user.first_name + " "  + order.user.last_name }}
                </th>
                <td class="px-6 py-4">
                    <ul>
                        <li v-for="product in order.product_orders">{{ product.name }}</li>
                    </ul>
                </td>
                <td class="px-6 py-4">
                    {{ order.address }}
                </td>
                <td class="px-6 py-4">
                    ${{ order.totalAmount }}
                </td>
                <td class="px-6 py-4">
                    {{order.status}}
                </td>
                <td class="px-6 py-4">
                     <ul>
                        <li v-for="product in order.product_orders">{{ product.name }} - {{ product.quantity }}</li>
                    </ul>
                </td>
                <td class="px-6 py-4">
                    {{ order.contactNumber }}
                </td>
                <td class="px-6 py-4">
                    <ApproveOrderModal :order="order.id" v-if="order.status === 'pending'"/>
                    <ViewOrderModal :order="order" v-else/>
                    <CancelModal  :order="order.id" v-if="order.status !== 'cancelled'"/>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { onMounted } from 'vue'
import { initModals } from 'flowbite'
import CancelModal from '@/components/admin/modals/Cancel.Modal.vue';
import ApproveOrderModal from '@/components/admin/modals/Approve.Order.Modal.vue';
import ViewOrderModal from '@/components/admin/modals/View.Order.Modal.vue';

const props = defineProps(['orders']);
 
 // initialize components based on data attribute selectors
 onMounted(() => {
    initModals();
 })
</script>