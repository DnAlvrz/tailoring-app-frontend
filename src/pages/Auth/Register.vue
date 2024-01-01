<template>
  <div class="min-h-screen bg-primary-0 flex flex-col">
    <LoginRegisterNav />
    <main class="flex-1 flex items-center md:items-start justify-center">
      <div class="p-8 md:w-auto max-md:max-w-lg w-full">
        <CardRegister @register="register" />
      </div>
    </main>
    <Footer />
  </div>
</template>
  
<script setup>
import {ref} from 'vue'
import axios from 'axios';
import LoginRegisterNav from '@/components/customer/nav/Login.Register.Nav.vue';
import Footer from '@/components/customer/footer/Footer.vue';
import CardRegister from '@/components/auth/card/Card.Register.vue';
const backendUrl = ref(import.meta.env.VITE_BACKEND_URL);

const register = async (user) => {
  console.log(user.value);
  const response = await axios.post(`${backendUrl.value}/auth/register`, user.value);
  console.log(response)
}

</script>