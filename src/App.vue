<template>
  <div>
    <SidebarVue v-if="user && user.access_level === 3"/>
  </div>
   <RouterView/>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SidebarVue from './components/Sidebar.vue';

const user = ref(null);

const getUser = () => {
  user.value = JSON.parse(localStorage.getItem('user')) || null;
}

onMounted(()=> {
  getUser();
});
</script>