<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { showErrorToast, showToast } from "../../utils/toas-notification";
import { storeToRefs } from "pinia";
import { useDataStore } from "../store/getDataStore";

const fetchData = useDataStore();
const { isLoading, data, favorite } = storeToRefs(fetchData);

function toggleFavorite(id) {
  const newData = data.value.map((item) => {
    if (item._id === id) {
      item.isFavorite = !item.isFavorite;
    }
    return item;
  });
  //data.value = newData;
  axios
    .put(`${import.meta.env.VITE_APP_SERVER_URL}/docs/toggle-favorite/${id}`)
    .then(() => {
      showToast("ការផ្លាស់ប្តូរបានរក្សាទុកដោយជោគជ័យ");
    })
    .catch((error) => {
      console.error("Error updating favorite status:", error);
      showErrorToast("មានបញ្ហាក្នុងការកែប្រែស្ថានភាព");
    });
    
}
onMounted(() => {
  fetchData.getData();
});
</script>
<template>
  <section>
    <div class="">
      <h1 class="text-[14px]">ទើបបង្ហោះថ្មីៗ</h1>
      <div v-if="isLoading" class="flex gap-5">
        <div class="skeleton skeleton-animated h-[13rem] w-full"></div>
        <div class="skeleton skeleton-animated h-[13rem] w-full"></div>
        <div class="skeleton skeleton-animated h-[13rem] w-full"></div>
        <div class="skeleton skeleton-animated h-[13rem] w-full"></div>
      </div>
      <div v-else-if="favorite?.length === 0"><p class="text-2xl mt-3 text-slate-400">មិនទាន់មានទិន្នន័យ...!</p></div>
      <div
        v-else
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-3"
      >
        <div
          class="overflow-hidden rounded-2xl"
          v-for="(item, index) in favorite"
          :key="index"
        >
          <a
            href="#"
            class="group relative rounded-2xl block bg-black h-[13rem]"
          >
            <div></div>
            <img
              alt=""
              :src="item.location"
              class="absolute inset-0 w-full object-cover group-hover:opacity-50"
            />

            <div class="relative p-4 sm:p-2 lg:p-3">
              <div class=" ">
                <div
                  class="translate-x-25 translate-y-[-40px] transform transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <v-icon
                    @click="toggleFavorite(item._id)"
                    :name="item.isFavorite ? 'la-heart-solid' : 'la-heart'"
                    scale="1.5"
                    class="text-yellow-500 z-50"
                  />
                </div>
                <div
                  class="translate-y-80 transform opacity-0 transition-all group-hover:translate-y-36 group-hover:opacity-100"
                >
                  <p class="text-sm text-white">
                    {{ item.title }}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
