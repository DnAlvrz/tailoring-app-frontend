<template>
    <header>
        <LandingPageNav />
        
    </header>
</template>

<script setup>
import LandingPageNav from '../../components/cutomer/nav/LandingPage.Nav.vue';
import { onMounted } from 'vue'
 import { 
     initAccordions, 
     initCarousels, 
     initCollapses, 
     initDials, 
     initDismisses, 
     initDrawers, 
     initDropdowns, 
     initModals, 
     initPopovers, 
     initTabs, 
     initTooltips } from 'flowbite'
 
 // initialize components based on data attribute selectors
 onMounted(() => {
     initAccordions();
     initCarousels();
     initCollapses();
     initDials();
     initDismisses();
     initDrawers();
     initDropdowns();
     initModals();
     initPopovers();
     initTabs();
     initTooltips();
 })
</script>