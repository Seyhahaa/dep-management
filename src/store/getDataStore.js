import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import "vue-toast-notification/dist/theme-sugar.css";

export const useDataStore = defineStore("data-store", () => {
  const data = ref([]);
  const isLoading = ref(false);
  const getPdfFile = ref([]);

    async function getData() {
      isLoading.value = true;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_SERVER_URL}/docs/all`
        );
        data.value = response.data;
        getPdfFile.value = response.data.filter(
        (item) => item.fileType === "application/pdf"
        
      );
      
      console.log(getPdfFile.value)
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    }
    return {
    data, getData, isLoading, getPdfFile
    }
});
