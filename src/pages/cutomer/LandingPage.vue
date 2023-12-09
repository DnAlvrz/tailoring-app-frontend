<template>
  <div class="min-h-screen bg-gray-200 flex flex-col">
    <LandingPageNav />
  <main class="flex-1 flex md:mt-[6.5rem] mt-32 md:items-start justify-center">
    <div class=" flex md:w-2/3 flex-col bg-primary-0 items-center justify-between mx-auto p-4">
        <!-- landing page hero -->
        <CardLandPageHero/>
      <!-- lading page category -->
      <div class="w-full flex flex-col items-center 2xl:h-[80vh]">
        <h1 class="font-lato font-semibold lg:text-4xl text-2xl text-center lg:p-4 p-2 text-secondary-0">SHOP BY CATEGORY</h1>
        <div class="grid grid-cols-2 lg:gap-4">
          <a href="#" class="card-zoom">
            <div  class="card-zoom-image bg-right bg-shirt"></div>
              <h1 class="card-zoom-text">T-shirt</h1>
          </a>
          <a class="card-zoom">
              <div class="card-zoom-image bg-right bg-pants"></div>
              <h1 class="card-zoom-text">Pants</h1>
          </a>
          <a class="card-zoom">
              <div class="card-zoom-image bg-right bg-shorts"></div>
              <h1 class="card-zoom-text">Shorts</h1>
          </a>
          <a class="card-zoom">
              <div class="card-zoom-image bg-right bg-cloth"></div>
              <h1 class="card-zoom-text">Cloth</h1>
          </a>
        </div>
      </div>
      <!-- landing page products -->
      <div class="py-4">
        <div>
          <h1 class="font-lato font-semibold lg:text-2xl text-base bg-tertiary-0 text-center w-full text-primary-0">FEATURED PRODUCTS</h1>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-4 lg:grid-cols-5">
          <a href="#" class="flex lg:w-52 mt-3 flex-col overflow-hidden duration-500 hover:scale-105 hover:shadow-xlborder border-gray-100 bg-white shadow-md">
            <div class=" flex h-36 overflow-hidden" href="#">
              <img class="object-fill w-full" src="../../assets/Shorts.jpg" alt="product image" />
            </div>
            <div class=" p-5 min-h-[112px] flex flex-col justify-between">
              <div href="#">
                <h5 class="lg:text-xl font-lato text-base tracking-tight line-clamp-2 text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa velit earum tempora architecto laudantium, repellat maxime, pariatur, doloribus ut voluptatibus inventore fugiat in. Aliquam nesciunt assumenda quo accusamus nobis?</h5>
              </div>
              <div class="mt-4 flex flex-col gap-3">
                <p>
                  <span class="lg:text-3xl font-lato text-2xl font-bold text-slate-900">₱449</span>
                </p>
                <div class="flex items-center">
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="mr-2 ml-1 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="flex lg:w-52 mt-3 flex-col overflow-hidden duration-500 hover:scale-105 hover:shadow-xlborder border-gray-100 bg-white shadow-md">
            <div class=" flex h-36 overflow-hidden" href="#">
              <img class="object-fill w-full" src="../../assets/Shorts.jpg" alt="product image" />
            </div>
            <div class=" p-5 min-h-[112px] flex flex-col justify-between">
              <div href="#">
                <h5 class="lg:text-xl font-lato text-base tracking-tight line-clamp-2 text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa velit earum tempora architecto laudantium, repellat maxime, pariatur, doloribus ut voluptatibus inventore fugiat in. Aliquam nesciunt assumenda quo accusamus nobis?</h5>
              </div>
              <div class="mt-4 flex flex-col gap-3">
                <p>
                  <span class="lg:text-3xl font-lato text-2xl font-bold text-slate-900">₱449</span>
                </p>
                <div class="flex items-center">
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="mr-2 ml-1 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                </div>
              </div>
            </div>
          </a>
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
import Footer from "../../components/cutomer/footer/Footer.vue";
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
