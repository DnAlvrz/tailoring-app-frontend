<template>
  <ul>
    <li><router-link :to="{name:'home'}">Home</router-link></li>
    <li><router-link :to="{name:'products'}">Product</router-link></li>
    <li><router-link :to="{name:'admin'}">Admin</router-link></li>
    <li><router-link :to="{name:'orders'}">Order</router-link></li>
  </ul>
  <router-view/> 
</template>

<script setup>
import {RouterView, RouterLink} from 'vue-router'
</script>