<template>
    <div class="flex w-full shadow border rounded-3xl">
        <!-- 1st content -->
        <div class="hidden md:flex justify-center bg-tertiary-0 rounded-l-3xl items-center">
            <img class="p-8 md:w-[25rem] lg:w-[40rem] max-w-full" src="../../../assets/Login.svg" alt="">
        </div>
        <!-- 2nd content -->
        <div class="w-full px-5 md:w-1/2 py-6 md:px-10">
            <div class="text-center mb-10">
                <h1 class="font-bold text-3xl text-secondary-0 font-roboto">LOGIN</h1>
            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-secondary-0">Email address</label>
                <input  v-model="credentials.username" type="email" id="email" class="bg-gray-50 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="john.doe@gmail.com" required>
            </div> 
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-secondary-0">Password</label>
                <input v-model="credentials.password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-secondary-0 text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="•••••••••" required>
            </div>
            <!-- <div class="mb-6 text-center p-4 border-b text-blue-500 hover:underline">
                <a href="">Forgot Password?</a>
            </div> -->
            <div class="text-center mb-6">
                <span>Doesn't have an account? <br> <a class="text-blue-500 hover:underline" href="/register">Sign Up</a></span>
            </div>
            <button @click="login()" class="text-white bg-tertiary-0 hover:bg-secondary-0 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center">LOGIN</button>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['login']);

const credentials = ref({   
    username: "",
    password: ""
});

function login() {
    emit('login', credentials.value)
}
</script>