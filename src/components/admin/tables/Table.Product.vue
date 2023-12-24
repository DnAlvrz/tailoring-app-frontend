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
                    category
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in props.products" :key="product.id" class="bg-white border-b hover:bg-gray-50" >
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {{ product.name}}
                </th>
                <td class="px-6 py-4">
                    {{ product.price }}
                </td>
                <td class="px-6 py-4">
                    {{ product.quantity }}
                </td>
                <td class="px-6 py-4">
                    cloths
                </td>
                <td class="px-6 py-4">
                    <EditProduct/>
                    <DeleteModal :product-id="product.id"/>
                </td>
            </tr>

        </tbody>
    </table>
</template>

<script setup>
import DeleteModal from '../modals/Delete.Modal.vue';
import EditProduct from '../modals/Edit.Product.vue';
const props = defineProps(['products'])
</script>