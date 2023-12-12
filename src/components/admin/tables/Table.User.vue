<template>
    <table class="w-full text-sm text-left rtl:text-right font-roboto text-gray-500">
        <thead class="text-xs text-primary-0 uppercase bg-tertiary-0">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Address
                </th>
                <th scope="col" class="px-6 py-3">
                    Contact No.
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="../../assets/vue.svg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Neil Sims</div>
                        <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4">
                    Recodo, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    09262623456
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <ViewUser/>
                    <DeleteUserModalVue/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Bonnie Green</div>
                        <div class="font-normal text-gray-500">bonnie@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Recodo, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    09262623456
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <ViewUser/>
                    <DeleteUserModalVue/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Jese Leos</div>
                        <div class="font-normal text-gray-500">jese@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Ayala, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    09262623456
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <ViewUser/>
                    <DeleteUserModalVue/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Thomas Lean</div>
                        <div class="font-normal text-gray-500">thomes@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Upper Calarian, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    09262623456
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <ViewUser/>
                    <DeleteUserModalVue/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Thomas Lean</div>
                        <div class="font-normal text-gray-500">thomes@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Upper Calarian, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    09262623456
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <ViewUser/>
                    <DeleteUserModalVue/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Thomas Lean</div>
                        <div class="font-normal text-gray-500">thomes@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Upper Calarian, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    09262623456
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <ViewUser/>
                    <DeleteUserModalVue/>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Thomas Lean</div>
                        <div class="font-normal text-gray-500">thomes@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Upper Calarian, Zamboanga City
                </td>
                <td class="px-6 py-4">
                    09262623456
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <ViewUser/>
                    <DeleteUserModalVue/>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import DeleteUserModalVue from '../modals/Delete.User.Modal.vue';
import ViewUser from '../modals/View.User.Modal.vue';
import { onMounted } from 'vue'
 import { 
    initModals,
    } from 'flowbite'
 
 // initialize components based on data attribute selectors
 onMounted(() => {
    initModals();
 })
</script>