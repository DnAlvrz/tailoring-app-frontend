<template>
  <Navbar/>
 <div class="mt-[9rem] lg:mt-[8rem]">
    <div class="max-w-screen-xl flex flex-row gap-2 mx-auto p-4">
        <div class="hidden lg:block">
            <div class="h-full p-3 space-y-2 w-56">
		        <div class="flex items-center p-2 space-x-4">
			        <img src="../../assets/vue.svg" alt="userphoto" class="w-12 h-12 rounded-full">
			        <div>
				        <h2 class="text-lg font-semibold">Username</h2>
                        <span class="flex items-center space-x-1">
                            <a rel="noopener noreferrer" href="#" class="text-xs hover:underline">Edit profile</a>
                        </span>
                    </div>
		        </div>
                <div class="divide-y dark:divide-gray-700">
                    <ul class="pt-2 pb-4 space-y-1 text-sm">
                        <li class="dark:bg-gray-800 dark:text-gray-50">
                            <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-gray-400">
                                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                </svg>
                                <span>My Profile</span>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-gray-400">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                                <span>My Purchase</span>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-gray-400">
                                    <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                                    <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                                </svg>
                                <span>Messanges</span>
                            </a>
                        </li>
                    </ul>
                </div>
	        </div>
        </div>

    <div class="w-full p-4">
        <!-- This is an example component -->
        <div class="">
    
    <div class="border-b border-gray-200 w-full mb-4">
        <ul class="flex flex-row -mb-px overflow-auto" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <li class="mr-2 w-full" role="presentation">
                <button class=" text-gray-500 w-full hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2" id="purchase-tab" data-tabs-target="#purchase" type="button" role="tab" aria-controls="purchase" aria-selected="true">Purchase</button>
            </li>
            <li class="mr-2 w-full" role="presentation">
                <button class="inline-block w-full text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 active" id="completed-tab" data-tabs-target="#completed" type="button" role="tab" aria-controls="completed" aria-selected="false">Completed</button>
            </li>
            <li class="mr-2 w-full" role="presentation">
                <button class="inline-block w-full text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2" id="cancelled-tab" data-tabs-target="#cancelled" type="button" role="tab" aria-controls="cancelled" aria-selected="false">Cancelled</button>
            </li>
            <li class="w-ful" role="presentation">
                <button class="inline-block w-full text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2" id="return-tab" data-tabs-target="#return" type="button" role="tab" aria-controls="return" aria-selected="false">Return/Refund</button>
            </li>
        </ul>
    </div>
    <div id="myTabContent">
        <div class="flex flex-col gap-8 p-4 rounded-lg" id="purchase" role="tabpanel" aria-labelledby="purchase-tab">
            <a class="shadow border" href="">
                <div class="p-4 border-b">
                    <div class="flex flex-row">
                        <div class="flex flex-row">
                            <div class="flex items-center">
                                <img class="w-28 h-28" src="../../assets/cloth.jpg" alt="">
                            </div>
                            <div class="p-2 w-[43.5rem]">
                                <h5 class="font-roboto text-secondary-0 line-clamp-2 text-base font-medium uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minima omnis nulla odio officiis, atque autem quo consequatur doloribus. Ea expedita adipisci eos ipsa saepe doloremque aperiam ratione velit veritatis.</h5>
                                <p class="text-gray-400 font-roboto text-sm">Category: <span>Shorts</span></p>
                                <span class="text-gray-600 font-roboto text-md">x1</span>
                            </div>
                        </div>
                        <div class="w-[7rem] grid place-content-center p-4">
                            <span class="font-roboto text-secondary-0">$199</span>
                        </div>
                    </div>
                </div>
                <div class="p-4 border-b ">
                    <div class="flex flex-row">
                        <div class="flex flex-row">
                            <div class="flex items-center">
                                <img class="w-28 h-28" src="../../assets/cloth.jpg" alt="">
                            </div>
                            <div class="p-2 w-[43.5rem]">
                                <h5 class="font-roboto text-secondary-0 line-clamp-2 text-base font-medium uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minima omnis nulla odio officiis, atque autem quo consequatur doloribus. Ea expedita adipisci eos ipsa saepe doloremque aperiam ratione velit veritatis.</h5>
                                <p class="text-gray-400 font-roboto text-sm">Category: <span>Shorts</span></p>
                                <span class="text-gray-600 font-roboto text-md">x1</span>
                            </div>
                        </div>
                        <div class="w-[7rem] grid place-content-center p-4">
                            <span class="font-roboto text-secondary-0">$199</span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end p-4">
                        <p class="text-base font-roboto text-secondary-0">Order Total: <span class="text-2xl">$299</span></p>
                    </div>
                
            </a>
            <a class="shadow border" href="">
                <div class="p-4 border-y">
                    <div class="flex flex-row">
                        <div class="flex flex-row">
                            <div class="flex items-center">
                                <img class="w-28 h-28" src="../../assets/cloth.jpg" alt="">
                            </div>
                            <div class="p-2 w-[43.5rem]">
                                <h5 class="font-roboto text-secondary-0 line-clamp-2 text-base font-medium uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minima omnis nulla odio officiis, atque autem quo consequatur doloribus. Ea expedita adipisci eos ipsa saepe doloremque aperiam ratione velit veritatis.</h5>
                                <p class="text-gray-400 font-roboto text-sm">Category: <span>Shorts</span></p>
                                <span class="text-gray-600 font-roboto text-md">x1</span>
                            </div>
                        </div>

                    <div class="w-[7rem] grid place-content-center p-4">
                        <span class="font-roboto text-secondary-0">$199</span>
                    </div>
                </div>
                </div>
                <div class="flex justify-end p-4">
                        <p>Order Total: <span>$299</span></p>
                    </div>
                
            </a>
            
            
        </div>
        <div class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800" id="completed" role="tabpanel" aria-labelledby="completed-tab">
            <p class="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="cancelled" role="tabpanel" aria-labelledby="cancelled-tab">
            <p class="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="return" role="tabpanel" aria-labelledby="return-tab">
            <p class="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
    </div>
</div>
    </div>


  </div>
    </div>
</template>

<script setup>
import Navbar from '../../components/Navbar.vue';
</script>