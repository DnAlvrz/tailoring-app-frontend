<template>
    <div class="lg:block hidden w-full md:w-56">
        <div class="flex pt-10 p-2 items-center">
            <img src="../../assets/Shorts.jpg" alt="userphoto" class="w-12 h-12 rounded-full">
            <div v-if="user" class="pl-2">
                <h2 class="text-base font-semibold">{{ user.name }}</h2>
            </div>
        </div>
        <div>
            <ul class="pt-2 pb-4 text-sm">
                <!-- <li>
                    <a rel="noopener noreferrer" href="#" class="flex md:border-none border-gray-300 border-t justify-between px-2 items-center">
                    <div class="flex items-center p-2 space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                            <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                        </svg>
                        <span>My Profile</span>
                    </div>
                    <div class="md:hidden">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" style="color: #14181f;" />
                    </div>
                    </a>
                </li> -->
                <li>
                <a rel="noopener noreferrer" href="/user/purchase" class="flex md:border-none border-gray-300 border-t justify-between px-2 items-center">
                    <div class="flex items-center p-2 space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                        </svg>
                        <span>My Purchase</span>
                    </div>
                    <div class="md:hidden">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" style="color: #14181f;" />
                    </div>
                    </a>
                </li>
                <!-- <li>
                    <a rel="noopener noreferrer" href="#" class="flex md:border-none border-gray-300 border-y justify-between px-2 items-center">
                        <div class="flex items-center p-2 space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                                <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                            </svg>
                            <span>Messanges</span>
                            <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-primary-0 bg-tertiary-0 rounded-full">2</span>
                        </div>
                        <div class="md:hidden">
                            <font-awesome-icon icon="fa-solid fa-chevron-right" style="color: #14181f;" />
                        </div>
                    </a>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    const user = ref(null);

    const getUser = () => {
        user.value = localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user')) : null;
    }

    onMounted(() => {
        getUser();
    })
</script>