<template>
  <header>
    <LandingPageNav />
  </header>
  <main>
    <div class="max-w-screen-xl bg-primary-0 flex flex-col items-center justify-between mx-auto p-4">
      <div>
        <h1 class="font-roboto font-semibold text-lg text-center p-4 text-secondary-0">WELCOME TO OUR STORE</h1>
        <p class="font-roboto text-center">
          Elevate your style with precision and panache. From T-shirts that
          embrace comfort to shorts and pants tailored for every occasion, our
          system weaves a story of bespoke sophistication. Choose fabrics that
          reflect your individuality, and let every stitch narrate your unique
          journey. In our world of tailoring, your wardrobe becomes a canvas,
          and each garment is a brushstroke of personalized elegance.
        </p>
      </div>
      <div>
        <h1>SHOP BY CATEGORY</h1>
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
