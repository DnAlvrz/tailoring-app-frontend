<template>
    <table class="w-full text-sm text-left text-secondary-0">
        <thead class="text-xs text-primary-0 uppercase bg-tertiary-0">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Stock
                </th>
                <th scope="col" class="px-6 py-3">
                    Availability
                </th>
                <th scope="col" class="px-6 py-3">
                    Shipping Fee
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple MacBook Pro 17
                </th>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    6
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <EditProduct/>
                    <DeleteModal/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    15
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <EditProduct/>
                    <DeleteModal/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4">
                    15
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <EditProduct/>
                    <DeleteModal/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple Watch
                </th>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    30
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <EditProduct/>
                    <DeleteModal/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    iPad
                </th>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <EditProduct/>
                    <DeleteModal/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    iPad
                </th>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    16
                </td>
                <td class="px-6 py-4">
                    13
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <EditProduct/>
                    <DeleteModal/>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import DeleteModal from '../modals/Delete.Modal.vue';
import EditProduct from '../modals/Edit.Product.vue';
</script>