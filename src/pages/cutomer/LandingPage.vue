<template>
  <div class="min-h-screen bg-gray-200 flex flex-col">
    <LandingPageNav />
  <main class="flex-1 flex md:mt-[6.5rem] mt-32 md:items-start justify-center">
    <div class=" flex md:w-2/3 flex-col bg-primary-0 items-center justify-between mx-auto p-4">
        <!-- landing page hero -->
        <CardLandPageHero/>
      <!-- lading page category -->
        <CardCategory/>

      <div class="py-4">
        <div>
          <h1 class="font-lato font-semibold lg:text-2xl text-base bg-tertiary-0 text-center w-full text-primary-0">FEATURED PRODUCTS</h1>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-4 lg:grid-cols-5">
        <!-- landing page products -->
            <CardProduct/>
            <CardProduct/>
        </div>
        <div class="flex justify-center items-center mt-10">
            <!-- see more button -->
          <button type="button" class="text-primary-0 bg-tertiary-0 hover:bg-secondary-0 font-medium lg:text-sm text-xs px-5 py-2.5 me-2 mb-2">SEE MORE</button>
        </div>
      </div>
    </div>
  </main>
  <Footer/>
  </div>
</template>

<script setup>
import LandingPageNav from "../../components/cutomer/nav/LandingPage.Nav.vue";
import CardLandPageHero from "../../components/cutomer/card/Card.LandPage.Hero.vue";
import CardCategory from "../../components/cutomer/card/Card.Category.vue";
import Footer from "../../components/cutomer/footer/Footer.vue";
import CardProduct from "../../components/cutomer/card/Card.Product.vue";
import { onMounted } from "vue";
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
  initTooltips,
} from "flowbite";

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
});
</script>
