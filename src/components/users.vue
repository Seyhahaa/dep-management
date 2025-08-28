<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
const isLoading = ref(false)
const users = ref([]);

async function getAllUser() {
  isLoading.value = true;
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_SERVER_URL}/auth/users`
    );
    users.value = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
}
onMounted(() => {
    getAllUser()
})
</script>
<template>
        <div class="p-5">
          <h1 class="text-[14px]">អ្នកប្រើប្រាស់</h1>
          <div>
            <div v-if="isLoading" class="flex items-center w-52 gap-4 mt-3">
              <div
                class="skeleton skeleton-animated h-20 rounded-full w-full"
              ></div>
              <div class="w-full">
                <p class="skeleton skeleton-animated h-4 w-28 mb-2"></p>
                <p class="skeleton skeleton-animated h-4 w-full"></p>
              </div>
            </div>
            <div
              v-else
              class="flex my-3 items-center hover:bg-slate-200 rounded-2xl p-1 transition-all cursor-pointer"
              v-for="(item, index) in users"
              :key="index"
            >
              <img :src="item?.picture" alt="" class="w-16 h-16 rounded-full" />
              <div class="ml-3">
                <h2 class="text-[#1f1e1e] font-medium text-[18px]">
                  {{ item.username }}
                </h2>
                <p class="text-[#706C6C] text-sm">{{ item.email }}</p>
              </div>
            </div>
          </div>
        </div>
</template>