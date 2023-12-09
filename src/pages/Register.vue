<template>
    <div class="min-h-screen bg-primary-0 flex flex-col">
    <LoginRegisterNav/>
      <main class="flex-1 flex items-center md:items-start justify-center">
        <div class="p-8 md:w-auto max-md:max-w-lg w-full">
            <CardRegister/>
        </div>
      </main>
    <Footer/>
    </div>
  </template>
  
  <script setup>
  import LoginRegisterNav from '../components/cutomer/nav/Login.Register.Nav.vue';
  import Footer from '../components/cutomer/footer/Footer.vue';
  import CardRegister from '../components/cutomer/card/Card.Register.vue';
  </script>