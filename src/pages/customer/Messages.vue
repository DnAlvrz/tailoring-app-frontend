<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <ProfileNav />
        <main class="flex-1 flex md:mt-[6rem] mt-[4rem] md:items-start justify-center">
            <div class=" flex w-full md:2/3 max-w-7xl flex-row mx-auto">
                <SidebarAccount/>
                <div class="w-full">
                    <!-- component -->
<div class="flex flex-row antialiased text-gray-800">
    <div class="md:flex flex-row hidden flex-shrink-0 bg-gray-100 p-4">
      <div class="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
        <div class="flex flex-row items-center">
          <div class="flex flex-row items-center">
            <div class="text-xl font-semibold">Messages</div>
          </div>
        </div>
        <div class="mt-5">
          <ul class="flex flex-row items-center justify-between">
            <li>
              <a href="#"
                 class="flex items-center pb-3 text-xs font-semibold relative text-indigo-800">
                <span>All Conversations</span>
                <span class="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full"></span>
              </a>
            </li>
          </ul>
        </div>
        <a href="#">
            <div class="mt-5">
          <div class="text-xs text-gray-400 font-semibold uppercase">Admin</div>
        </div>
        <div class="mt-2">
          <div class="flex flex-col -mx-4">
            <div class="relative flex flex-row items-center p-4">
              <div class="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">5 min</div>
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                A
              </div>
              <div class="flex flex-col flex-grow ml-3">
                <div class="text-sm font-medium">Admin</div>
                <div class="text-xs truncate w-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, doloribus?</div>
              </div>
            </div>
          </div>
        </div>
        </a>
      </div>
    </div>
    <div class="flex flex-col h-full w-full bg-white px-4 py-6">
      <div class="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100">
          A
        </div>
        <div class="flex flex-col ml-3">
          <div class="font-semibold text-sm">Admin</div>
          <div class="text-xs text-gray-500">Active</div>
        </div>
      </div>
      <div class="h-full overflow-hidden py-4">
        <div class="h-full overflow-y-auto">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-start-1 col-end-8 p-3 rounded-lg">
              <div class="flex flex-row items-center">
                <div
                    class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-white flex-shrink-0"
                >
                  A
                </div>
                <div
                    class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                  <div>Hey How are you today?</div>
                </div>
              </div>
            </div>
            <div class="col-start-1 col-end-8 p-3 rounded-lg">
              <div class="flex flex-row items-center">
                <div
                    class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-white flex-shrink-0"
                >
                  A
                </div>
                <div
                    class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Vel ipsa commodi illum saepe numquam maxime
                    asperiores voluptate sit, minima perspiciatis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center">
        <div class="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
          <button class="flex items-center justify-center h-10 w-10 text-gray-400 ml-1">
            <svg class="w-5 h-5"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
            </svg>
          </button>
          <div class="w-full">
            <input type="text"
                   class="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center" placeholder="Type your message....">
          </div>
          <div class="flex flex-row">
            <button class="flex items-center justify-center h-10 w-8 text-gray-400">
              <svg class="w-5 h-5"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
              </svg>
            </button>
            <button class="flex items-center justify-center h-10 w-8 text-gray-400 ml-1 mr-2">
              <svg class="w-5 h-5"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="ml-6">
          <button class="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800">
            <svg class="w-5 h-5 transform rotate-90 -mr-px"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
                </div>
            </div>
        </main>
    <Footer/>
</div>
</template>

<script setup>
import ProfileNav from '../../components/customer/nav/Profile.Nav.vue';
import Footer from '../../components/customer/footer/Footer.vue';
import SidebarAccount from '../../components/Sidebar/Sidebar.Account.vue';
import { onMounted } from 'vue'
import { 
 initDropdowns, 
} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
 initDropdowns();
})
</script>
























