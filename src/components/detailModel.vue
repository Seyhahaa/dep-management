<script setup>
import baseModel from './base/baseModel.vue'
import { ref, vShow } from "vue";
const props = defineProps(['show','item'])
const emit = defineEmits(['toggleDetailModel'])

</script>
<template>
    <baseModel v-show="show" >
        <template #header>
            <div class="flex justify-between w-full">
                <h1>{{ item?.title }}</h1>
                <button type="button" @click="emit('toggleDetailModel')">✕</button>
            </div>
        </template>
        <template #body>
           <img :src="item?.location" alt="">
           <p class="mt-4">{{ item?.description }}</p>
        </template>
        <template #footer>
            
        </template>
    </baseModel>
</template>
