<template>
    <div class="p-2 border-b border-gray-200 bg-primary-0  pl-2">
        <div class="flex gap-2">
            <img class="w-10 h-10 rounded-full" src="../../assets/vue.svg" alt="Rounded avatar">
            <div>
                <p>{{ review.order.user.first_name + ' ' + review.order.user.last_name }}</p>
                <div class="flex items-center">
                    <fwb-rating  size="md" :rating="review.order.rating.rating" />
                </div>
            </div>
        </div>
        <div>
            <p class="font-roboto text-secondary-0 mt-2 ml-12">{{ review.order.rating.message }}</p>
        </div>
    </div>
</template>

<script setup>
import { FwbRating } from 'flowbite-vue'
const props = defineProps(['review']);

</script>