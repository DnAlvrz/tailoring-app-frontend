
<template>
  <div class="min-h-screen bg-primary-0 flex flex-col">
    <LoginRegisterNav/>
    <main class="flex-1 flex md:mt-16 items-center md:items-start justify-center">
      <div class="p-8 md:w-auto max-md:max-w-lg w-full">
        <CardLogin @login="login" />
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import axios from 'axios';
import {ref} from 'vue';
import LoginRegisterNav from '@/components/customer/nav/Login.Register.Nav.vue';
import Footer from '@/components/customer/footer/Footer.vue';
import CardLogin from '@/components/auth/card/Card.Login.vue';

const isLoading = ref(false)

const login = async (credentials) => {
  try {
    isLoading.value = true;
    const data = {
        grant_type: 'password',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
        ...credentials
    }
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_AUTH}`, data);
    if (response.status === 200 && response.data  && response.data.access_token) {
    
      const config = {
        headers: {
          Authorization: `Bearer ${response.data.access_token}` 
        }
      }

      const userData = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user`, config);

      localStorage.setItem('user',JSON.stringify({
        id: userData.data.id,
        name: userData.data.first_name +" " +userData.data.last_name,
        token: response.data.access_token,
        access_level: userData.data.access_level ? userData.data.access_level : 2
      }));  
    }
  } catch (error) {
    console.log(error)
  }
  finally {
    isLoading.value = false;
  }

}

</script>