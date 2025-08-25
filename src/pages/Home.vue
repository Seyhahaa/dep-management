<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { showErrorToast, showToast } from "../../utils/toas-notification";
import { mapActions, storeToRefs } from "pinia";
import { useDataStore } from "../store/getDataStore";
import VuePdfApp from "vue3-pdf-app";
import moment from "moment";
const fetchData = useDataStore();
const { getPdfFile,isLoading, data } = storeToRefs(fetchData);
console.log(data.value)

const title = ref("");
const description = ref("");
const office = ref("");
const status = ref("");

const selectFile = ref(null);
const isUploading = ref(false);
const onFileChange = (event) => {
  selectFile.value = event.target.files[0];
  console.log(selectFile.value);
};

const name = ref("");
const showPopup = ref(false);
const token = localStorage.getItem("token");



const users = ref(null);
const closePopup = () => {
  showPopup.value = false;
};
async function getAllUser() {
    isLoading.value = true;
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_SERVER_URL}/auth/users`
    );
    users.value = response.data;
  } catch (error) {
    console.log(error);
  }
    finally {
        isLoading.value = false;
    }
}
async function addFile() {
  isUploading.value = true;
  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("file", selectFile.value);
  formData.append("description", description.value);
  formData.append("office", office.value);
  formData.append("status", status.value);
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_SERVER_URL}/docs/upload`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    showErrorToast(error.response.data.message || "Error uploading file");
    console.error("Error uploading file:", error);
  }finally{
    showToast("ឯកសារបានបង្ហោះដោយជោគជ័យ");
    isUploading.value = false;
    showPopup.value = false;
  }
}
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
const handleThumbnailRendered = () => {
      // Optional: Perform actions after the thumbnail is rendered
      console.log('PDF thumbnail rendered successfully!');
    };
onMounted(() => {
  getAllUser();
  fetchData.getData();
});
</script>
<template>
  <div class="flex flex-col">
    <section>
        <div class="flex p-5">
            
            <div class=" w-3/4 rounded-2xl mr-5 dark:bg-black bg-white p-5">
                <h1 class="text-[14px]">ទើបបង្ហោះថ្មីៗ</h1>
                <div v-if="isLoading" class="flex gap-5">
                    
                    <div class="skeleton skeleton-animated h-[13rem] w-full"></div>
                    <div class="skeleton skeleton-animated  h-[13rem] w-full"></div>
                    <div class="skeleton skeleton-animated  h-[13rem] w-full"></div>
                    <div class="skeleton skeleton-animated  h-[13rem] w-full"></div>
                </div>
                <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-3">
                <div
                    class="overflow-hidden rounded-2xl"
                    v-for="(item, index) in data"
                    :key="index"
                >
                    <a
                    href="#"
                    class="group relative rounded-2xl block bg-black h-[13rem]"
                    >
                    <div>
      </div>
                    <img
                        alt=""
                        :src="item.location"
                        class="absolute inset-0 w-full object-cover group-hover:opacity-50"
                    />

                    <div class="relative p-4 sm:p-2 lg:p-3">
                        <div class=" ">
                          <div class="translate-x-25 translate-y-[-40px] transform transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            
                              <v-icon @click="toggleFavorite(item._id)"
                                :name="item.isFavorite ? 'la-heart-solid' : 'la-heart'"
                                scale="1.5"
                                class="text-yellow-500 z-50"/>
                              <!-- <v-icon v-else name="la-heart"
                                @click="toggleFavorite(item._id, 'favorite')"
                              scale="1.5"
                                class="text-yellow-500 z-50"/> -->
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
            <div class=" w-1/4 rounded-2xl bg-white p-5 dark:bg-black">
                <h1 class="text-[14px]">អ្នកប្រើប្រាស់</h1>
                <div>
                <div v-if="isLoading" class="flex items-center w-52 gap-4 mt-3">
                    <div class="skeleton skeleton-animated h-20 rounded-full w-full"></div>
                    <div class="w-full">
                        <p class="skeleton skeleton-animated h-4 w-28 mb-2"></p>
                        <p class="skeleton skeleton-animated h-4 w-full"></p>
                    </div>
                </div>
                <div v-else
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
        </div>
    </section>
    <section>
        <div class="flex pl-5 pb-5">
            <div class="w-4/6 rounded-2xl mr-5 bg-white p-5 dark:bg-black">
                <h1 class="text-[14px]">ឯកសារផ្សេងៗ</h1>
                <div class="">
                <table class="w-full mt-5">
                    <tr>
                    <th class="w-2/5 text-start">
                        ឈ្មោះ
                        <v-icon
                        name="la-angle-down-solid"
                        scale="0.8"
                        class="ml-2 cursor-pointer"
                        ></v-icon>
                    </th>
                    <th class="w-1/5 text-start">ម្ចាស់</th>
                    <th class="w-1/5 text-start">ការិយាល័យ</th>
                    <th class="w-1/5 text-start">កាលបរិច្ឋេទ</th>
                    </tr>
                    <tr v-for="(file, index) in getPdfFile" :key="index">
                      <td>{{ file.title }}</td>
                      <td>{{ file.uploadBy?.username }}</td>
                      <td>{{ file.office }}</td>
                      <td>{{ moment(file.createdAt).format('ddd DD-MMM-YYYY') }}</td>
                    </tr>
                </table>
                </div>
            </div>
            <div class="w-2/6 rounded-2xl mr-5 bg-white p-5 dark:bg-black">
                <button
                @click=" () => {
                    if(!token) {
                        showErrorToast('សូមចូលប្រើប្រាស់មុនពេលបង្ហោះឯកសារ');
                        return;
                    }
                    showPopup = true;
                } "
                type="button"
                class="rounded-full py-2 px-5 bg-[#577EF2] text-white items-center flex text-[18px] font-medium mb-5 hover:bg-[#F2AE2E] transition-all"
                >
                <v-icon name="bi-cloud-upload-fill" scale="1.5" class="mr-2"></v-icon
                >បង្ហោះ
                </button>
                <hr />
                <div
                v-if="showPopup"
                class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                    <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">បញ្ចូលឯកសារថ្មី</h2>
                    <button
                        @click="closePopup "
                        class="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                    </div>
                    <form action="" class="mt-2">
                    <div class="relative w-full flex gap-2">
                        <div class="w-full">
                        <input
                            type="text"
                            v-model="title"
                            placeholder="ឈ្មោះឯកសារ"
                            class="input input-floating peer rounded-full"
                            id="floatingInput"
                        />
                        <label class="input-floating-label" for="floatingInput"
                            >ឈ្មោះឯកសារ</label
                        >
                        </div>
                          <!-- <select id=""
                        class="w-[12rem] select rounded-full appearance-none" aria-label="select"
                        v-model="office">
                          <option disabled selected>ជ្រើសរើសការិយាល័យ</option>
                          <option value="រដ្ឋបាល">រដ្ឋបាល</option>
                          <option value="ពត៌មានវិទ្យា">ពត៌មានវិទ្យា</option>
                          <option value="តែងសេចក្តី">តែងសេចក្តី</option>
                          <option value="សន្តិសុខ-សណ្តាប់ធ្នាប់">
                              សន្តិសុខ សណ្តាប់ធ្នាប់
                          </option>
                          </select> -->
                          <div class="relative">
          <select name="" id="" class="w-[11.2rem] select rounded-full appearance-none z-50" aria-label="select" v-model="office">
            <option disabled selected>ជ្រើសរើសការិយាល័យ</option>
            <option value="រដ្ឋបាល">រដ្ឋបាល</option>
            <option value="ពត៌មានវិទ្យា">ពត៌មានវិទ្យា</option>
            <option value="តែងសេចក្តី">តែងសេចក្តី</option>
            <option value="សន្តិសុខ-&-សណ្តាប់ធ្នាប់">សន្តិសុខ & សណ្តាប់ធ្នាប់</option>
          </select>
        </div>
                    </div>
                    <textarea
                        class="textarea textarea-bordered mt-5 rounded-2xl"
                        v-model="description"
                        placeholder="អំពីឯកសាររបស់អ្នក"
                        rows="4"
                    ></textarea>
                    <div class="flex items-center gap-2 max-sm:flex-wrap mt-5">
                        <div class="size-14 rounded-full">
                        <input
                            type="file"
                            id="file"
                            class="file:btn file:btn-primary block text-sm file:me-3 file:rounded-full file:uppercase"
                            aria-label="file-input"
                            @change="onFileChange"
                        />
                        </div>
                    </div>
                    <div class="flex mt-5 gap-7">
                        <div class="flex items-center gap-1">
                        <input
                            type="radio"
                            name="radio-2"
                            value="public"
                            v-model="status"
                            class="radio radio-primary"
                            id="radioType1"
                        />
                        <label class="label label-text text-base" for="radioType1"
                            >សាធារណៈ</label
                        >
                        </div>
                        <div class="flex items-center gap-1">
                        <input
                            type="radio"
                            name="radio-2"
                            value="private"
                            v-model="status"
                            class="radio radio-primary"
                            id="radioType2"
                        />
                        <label class="label label-text text-base" for="radioType2"
                            >ផ្ទាល់ខ្លួន</label
                        >
                        </div>
                    </div>
                    </form>
                    <div class="modal-footer">
                    <button
                        @click="closePopup"
                        type="button"
                        class="btn btn-soft btn-secondary"
                        data-overlay="#middle-center-modal"
                    >
                        Close
                    </button>
                    <button @click="addFile" type="button" class="btn btn-primary">
                        {{ isUploading ? "Uploading..." : "Upload" }}
                    </button>
                    </div>
                </div>
                </div>

                <div class="flex justify-between">
                <div class="flex items-center mt-5 gap-3">
                    <v-icon
                    name="io-documents-sharp"
                    scale="2"
                    class="text-[#577EF2]"
                    />
                    <div>
                    <h2 class="">0 MB</h2>
                    <h2 class="text-[#706C6C]">ឯកសារទាំងអស់</h2>
                    </div>
                </div>
                <div class="flex items-center mt-5 gap-3">
                    <v-icon name="io-images-sharp" scale="2" class="text-[#41D9AE]" />
                    <div>
                    <h2 class="">0 MB</h2>
                    <h2 class="text-[#706C6C]">រូបភាពទាំងអស់</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-open {
  background-color: #4caf50;
  color: white;
}
</style>
