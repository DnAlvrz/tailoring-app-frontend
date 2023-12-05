<template>
   <nav class="fixed top-0 z-50 w-full bg-primary-0 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
         <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
               <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-secondary-0 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
               </button>
               <a href="#" class="flex items-center gap-2 ml-2 md:mr-24">
                  <svg class="w-6 h-6 text-secondary-0 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                     <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z"/>
                  </svg>
                  <span class="self-center text-lg font-roboto text-secondary-0 tracking-wide font-semibold sm:text-2xl whitespace-nowrap">Tailoring System</span>
               </a>
            </div>
            <div class="flex items-center">
               <div class="flex items-center ml-3">
                  <div>
                     <button type="button" class="flex text-sm bg-tertiary-0 rounded-full focus:ring-4 focus:ring-tertiary-0" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                     </button>
                  </div>
                  <div class="z-50 hidden my-4 text-base list-none bg-primary-0 divide-y divide-gray-100 rounded shadow" id="dropdown-user">
                     <div class="px-4 py-3" role="none">
                        <p class="text-base font-semibold font-roboto text-secondary-0" role="none">
                        Archie Amparado
                        </p>
                        <p class="text-sm font-normal font-roboto text-secondary-0 truncate" role="none">
                        archie.amparado@flowbite.com
                        </p>
                     </div>
                     <ul class="py-1" role="none">
                        <li>
                        <a href="#" class="block px-4 py-2 text-sm text-secondary-0 hover:text-primary-0 font-roboto hover:bg-tertiary-0" role="menuitem">Sign out</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </nav>

   <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-primary-0 border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full px-3 p-[1.20rem] pb-4 overflow-y-auto bg-primary-0">
         <ul class="space-y-2 font-roboto font-semibold">
            <li>
               <Router-link to="/">
                  <a class="flex items-center p-2 text-secondary-0 rounded-lg focus:bg-tertiary-0 focus:text-primary-0 hover:bg-tertiary-0 hover:text-primary-0 group">
                  <svg class="w-5 h-5 text-secondary-0 transition duration-75 group-hover:text-primary-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                     <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                     <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                  </svg>
                  <span class="ml-3">Dashboard</span>
               </a>
               </Router-link>
            </li>
            <li>
               <RouterLink to="/users">
                  <a href="" class="flex items-center p-2 text-secondary-0 rounded-lg focus:bg-tertiary-0 focus:text-primary-0 hover:bg-tertiary-0 hover:text-primary-0 group">
                  <svg class="flex-shrink-0 w-5 h-5 text-secondary-0 transition duration-75 group-hover:text-primary-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                     <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
               </a>
               </RouterLink>
            </li>
            <li>
               <RouterLink to="/products">
                  <a href="" class="flex items-center p-2 text-secondary-0 rounded-lg hover:bg-tertiary-0 hover:text-primary-0 group">
                     <svg class="flex-shrink-0 w-5 h-5 text-secondary-0 transition duration-75 group-hover:text-primary-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                     </svg>
                     <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
                  </a>
               </RouterLink>
            </li>
            <li>
               <Router-link to="/orders">
                  <a class="flex items-center p-2 text-secondary-0 rounded-lg hover:bg-tertiary-0 hover:text-primary-0 group">
                  <svg class="flex-shrink-0 w-5 h-5 text-secondary-0 transition duration-75 group-hover:text-primary-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Orders</span>
               </a>
               </Router-link>
            </li>
            <li>
               <RouterLink to="/inbox">
                  <a class="flex items-center p-2 text-secondary-0 rounded-lg hover:bg-tertiary-0 hover:text-primary-0 group">
                  <svg class="flex-shrink-0 w-5 h-5 text-secondary-0 transition duration-75 group-hover:text-primary-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                     <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                  <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-primary-0 bg-secondary-0 rounded-full">3</span>
               </a>
               </RouterLink>
            </li>
         </ul>
      </div>
   </aside>
   <RouterView/>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { onMounted } from 'vue'
import { 
    initDrawers, 
    initDropdowns, 
   } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initDrawers();
    initDropdowns();
})

</script>