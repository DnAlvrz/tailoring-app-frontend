<template>
  <header>
    <LandingPageNav />
  </header>
  <main class="mt-20">
    <div class="max-w-screen-xl bg-primary-0 flex flex-col items-center justify-between mx-auto p-4">
      <div class="p-4">
        <h1 class="font-roboto font-semibold text-3xl text-center p-4 text-secondary-0">WELCOME TO OUR STORE</h1>
        <p class="font-roboto text-lg text-center">
          Elevate your style with precision and panache. From T-shirts that
          embrace comfort to shorts and pants tailored for every occasion, our
          system weaves a story of bespoke sophistication. Choose fabrics that
          reflect your individuality, and let every stitch narrate your unique
          journey. In our world of tailoring, your wardrobe becomes a canvas,
          and each garment is a brushstroke of personalized elegance.
        </p>
      </div>
      
      <div>
        <h1 class="font-roboto font-semibold text-lg text-center p-4 text-secondary-0">SHOP BY CATEGORY</h1>
        

<div class="sm:grid grid-cols-4 gap-4">

  <div class="card-zoom">
    <a href="#" class="card-zoom-image bg-right bg-shirt"></a>
      <h1 class="card-zoom-text cursor-pointer">T-shirt</h1>
  </div>
  <div class="card-zoom">
      <div class="card-zoom-image bg-right bg-pants"></div>
      <h1 class="card-zoom-text">Pants</h1>
  </div>
  <div class="card-zoom">
      <div class="card-zoom-image bg-right bg-shorts"></div>
      <h1 class="card-zoom-text">Shorts</h1>
  </div>
  <div class="card-zoom">
      <div class="card-zoom-image bg-right bg-cloth"></div>
      <h1 class="card-zoom-text">Cloth</h1>
  </div>

    </div>

      </div>
    </div>
  </main>
</template>

<script setup>
import LandingPageNav from "../../components/cutomer/nav/LandingPage.Nav.vue";
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
