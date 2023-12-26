@ -1,53 +1,17 @@
<template>
  <div class="min-h-screen bg-primary-0 flex flex-col">
    <LoginRegisterNav/>
    <main class="flex-1 flex md:mt-16 items-center md:items-start justify-center">
      <div class="p-8 md:w-auto max-md:max-w-lg w-full">
        <CardLogin/>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import LoginRegisterNav from '../components/customer/nav/Login.Register.Nav.vue';
import Footer from '../components/customer/footer/Footer.vue';
import CardLogin from '../components/customer/card/Card.Login.vue';
</script>