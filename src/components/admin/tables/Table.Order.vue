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
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Patrick Asmad
                </th>
                <td class="px-6 py-4">
                    Apple MacBook Pro 17
                </td>
                <td class="px-6 py-4">
                    Ayala, Zmaboanga City
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    Pending
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    09253434563
                </td>
                <td class="px-6 py-4">
                    <ApproveOrderModal/>
                    <CancelModal/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Patrick Asmad
                </th>
                <td class="px-6 py-4">
                    Apple MacBook Pro 17
                </td>
                <td class="px-6 py-4">
                    Maasin, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    Approved
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    09253434563
                </td>
                <td class="px-6 py-4">
                    <ViewOrderModal/>
                    <CancelModal/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Patrick Asmad
                </th>
                <td class="px-6 py-4">
                    Apple MacBook Pro 17
                </td>
                <td class="px-6 py-4">
                    Upper Calarian, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    Pending
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    09253434563
                </td>
                <td class="px-6 py-4">
                    <ApproveOrderModal/>
                    <CancelModal/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Patrick Asmad
                </th>
                <td class="px-6 py-4">
                    Apple MacBook Pro 17
                </td>
                <td class="px-6 py-4">
                    Sinunuc, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    Approved
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    09253434563
                </td>
                <td class="px-6 py-4">
                    <ViewOrderModal/>
                    <CancelModal/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Patrick Asmad
                </th>
                <td class="px-6 py-4">
                    Apple MacBook Pro 17
                </td>
                <td class="px-6 py-4">
                    Ayala, Zmaboanga City
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    Pending
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    09253434563
                </td>
                <td class="px-6 py-4">
                    <ApproveOrderModal/>
                    <CancelModal/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Patrick Asmad
                </th>
                <td class="px-6 py-4">
                    Apple MacBook Pro 17
                </td>
                <td class="px-6 py-4">
                    Recodo, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    Pending
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    09253434563
                </td>
                <td class="px-6 py-4">
                    <ApproveOrderModal/>
                    <CancelModal/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Patrick Asmad
                </th>
                <td class="px-6 py-4">
                    Apple MacBook Pro 17
                </td>
                <td class="px-6 py-4">
                    Sinunuc, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    Pending
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    09253434563
                </td>
                <td class="px-6 py-4">
                    <ApproveOrderModal/>
                    <CancelModal/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Patrick Asmad
                </th>
                <td class="px-6 py-4">
                    Apple MacBook Pro 17
                </td>
                <td class="px-6 py-4">
                    Ayala, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    Pending
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    09253434563
                </td>
                <td class="px-6 py-4">
                    <ApproveOrderModal/>
                    <CancelModal/>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import CancelModal from '../modals/Cancel.Modal.vue';
import ApproveOrderModal from '../modals/Approve.Order.Modal.vue';
import ViewOrderModal from '../modals/View.Order.Modal.vue';
import { onMounted } from 'vue'
 import { 
    initModals,
    } from 'flowbite'
 
 // initialize components based on data attribute selectors
 onMounted(() => {
    initModals();
 })
</script>