<template>
    <div class="flex w-full shadow border rounded-3xl">
        <!-- 1st content -->
        <div class="hidden md:flex justify-center bg-tertiary-0 rounded-l-3xl items-center">
            <img class="p-8 md:w-[20rem] lg:w-[35rem] h-auto max-w-full" src="../../../assets/Login.svg" alt="">
        </div>
        <!-- 2nd content -->
        <div class="w-full px-5 md:w-1/2 py-6 md:px-10">
            <div class="text-center mb-6">
                <h1 class="font-bold text-3xl text-secondary-0 font-roboto">REGISTER</h1>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="first_name" class="block mb-2 text-sm text-secondary-0 font-roboto font-semibold">First name</label>
                    <input v-model="user.first_name" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="John" required>
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-sm text-secondary-0 font-roboto font-semibold">Last name</label>
                    <input  v-model="user.last_name" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="Doe" required>
                </div>
                <div>
                    <label for="BD" class="block mb-2 text-sm text-secondary-0 font-roboto font-semibold">Birthdate</label>
                    <input  v-model="user.date_of_birth" type="date" id="BD" class="bg-gray-50 border border-gray-300 text-secondary-0 text-sm rounded-lg cursor-pointer focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" required>
                </div>  
                <div>
                    <label for="phone" class="block mb-2 text-sm text-secondary-0 font-roboto font-semibold">Phone number</label>
                    <input  v-model="user.phone" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="(+63)9123456789" pattern="^(09|\+639)\d{9}$" required>
                </div>
            </div>
            <div class="mb-6">
                <label for="address" class="block mb-2 text-sm text-secondary-0 font-roboto font-semibold">Address</label>
                <input  v-model="user.address" type="text" id="address" class="bg-gray-50 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="Dacon Homes Recodo, Zamboanga City" required>
            </div> 
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm text-secondary-0 font-roboto font-semibold">Email address</label>
                <input  v-model="user.email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="john.doe@gmail.com" required>
            </div> 
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm text-secondary-0 font-roboto font-semibold">Password</label>
                <input  v-model="user.password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="•••••••••" required>
            </div> 
            <div class="mb-6">
                <label for="confirm_password" class="block mb-2 text-sm text-secondary-0 font-roboto font-semibold">Confirm password</label>
                <input  v-model="user.confirm_password" type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="•••••••••" required>
            </div> 
            <div class="text-center mb-6">
                <span>Already have an account? <br> <a class="text-blue-500 hover:underline" href="/login">Log In</a></span>
            </div>
            <button @click="submit()" type="submit" class="text-white bg-tertiary-0 hover:bg-secondary-0 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center">REGISTER</button>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
const user = ref({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirm_password:""
    
})
const emit = defineEmits(['register']);

function submit() {
    emit('register', user)
}
</script>
