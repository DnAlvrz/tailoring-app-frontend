<template>
    <div class="bg-primary-0 flex justify-center fixed bottom-0 right-0 left-0 shadow mt-auto">
        <div class="w-full md:w-2/3 flex flex-row justify-between items-center">
            <div class="flex gap-2 items-center p-4 ml-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-tertiary-0 bg-gray-100 border-gray-300 rounded focus:ring-transparent">
                <label for="default-checkbox" class="ms-2 text-sm font-medium font-roboto  text-secondary-0">Select All</label>
            </div>
                <div class="flex items-center justify-between">
                    <!-- PRODUCT TOTAL DEPENDING ON CHECKLIST -->
                <p class="text-sm text-secondary-0 p-2 font-roboto">Total<span class="text-lg font-roboto text-secondary-0 font-semibold p-1">₱<span>0</span></span></p>
                <button type="button" class="text-white bg-tertiary-0 hover:bg-secondary-0 p-4 font-medium text-sm focus:outline-none">Check Out <span>(0)</span></button>
            </div>
        </div>   
    </div>
</template>