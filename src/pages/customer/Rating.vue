<template>
    <div class="min-h-screen bg-gray-200 flex flex-col">
        <Navbar />
        <main class="flex-1 flex md:mt-[5rem] mt-0 md:items-start justify-center">
            <div class=" flex md:w-[40%] flex-col bg-primary-0 mx-auto p-4">
                <h1 class="font-roboto p-4 text-lg font-semibold text-secondary-0">Shop Rating</h1>
                <div class="p-2">
                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="flex-shrink-0">
                            <img class="w-14 h-14" src="../../assets/cloth.jpg" alt="Jese image">
                        </div>
                        <div class="w-full flex gap-6 ps-3">
                            <div>
                                <div class="text-gray-600 line-clamp-1 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ut quas asperiores nulla eaque vel, esse voluptatibus quae neque modi est molestias voluptates assumenda et vitae amet a explicabo cupiditate?</div>
                                <div class="text-sm text-gray-300"><span>Category: </span>asdasdasdasd</div>
                            </div>
                            <button class="px-3 py-2 hover:bg-tertiary-0 font-roboto text-sm text-red-400 hover:border-none border-red-400 bg-red-100 hover:text-primary-0 self-start border">Edit</button>
                        </div>
                    </a>
                </div>
                <div class="flex border-t pt-5 ml-6 gap-3">
                    <img class="w-10 h-10 mt-1 rounded-full" src="../../assets/cloth.jpg" alt="Rounded avatar">
                    <div>
                        <span class="text-sm font-roboto text-secondary-0">Arjhon Lahudin</span>
                        <div class="flex items-center pb-3">
                            <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg class="w-3 h-3 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                        <span class="text-sm font-roboto text-gray-300">01/01/2024 19:59</span>
                    </div>
                </div>
                <div class="flex justify-end "><button class="py-2 px-10 text-sm mr-5 border hover:bg-tertiary-0 hover:text-primary-0 font-roboto text-secondary-0">OK</button></div>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script setup>

</script>

