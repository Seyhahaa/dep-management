<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useDataStore } from '../store/getDataStore';
import axios from 'axios';
import { showErrorToast, showToast } from '../../utils/toas-notification';
import moment from 'moment';

 
const fetchData = useDataStore();
const { getPdfFile} = storeToRefs(fetchData);

const title = ref("");
const description = ref("");
const office = ref("");
const status = ref("");

const name = ref("");
const showPopup = ref(false);
const token = localStorage.getItem("token");

const selectFile = ref(null);
const isUploading = ref(false);
const onFileChange = (event) => {
  selectFile.value = event.target.files[0];
  console.log(selectFile.value);
};
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
    showErrorToast(error.response?.data || "Error uploading file");
    console.error(error.message);
  } finally {
    fetchData.getData()
    showToast("ឯកសារបានបង្ហោះដោយជោគជ័យ");
    isUploading.value = false;
    showPopup.value = false;
    clearForm()
  }
}
const clearForm =() =>{
   title.value = "";
 description.value = "";
 office.value = "";
 status.value = "";
}

const closePopup = () => {
  showPopup.value = false;
};

</script>
<template>
    <section>
      <div class="flex pl-5 pb-5">
        <div class="w-4/6 rounded-2xl mr-5 bg-white p-5 dark:bg-black">
          <h1 class="text-[14px]">ប្រភេទឯកសារ</h1>
          <div class="w-full overflow-x-auto">
            <table class="table-striped table mt-5">
              <thead class="font-bold">
                <tr>
                <th class="w-2/5 text-start  font-bold">
                  ឈ្មោះ
                  <v-icon
                    name="la-angle-down-solid"
                    scale="0.8"
                    class="ml-2 cursor-pointer"
                  ></v-icon>
                </th>
                <th class="w-1/5 text-start  font-bold">ម្ចាស់</th>
                <th class="w-1/5 text-start  font-bold">ការិយាល័យ</th>
                <th class="w-1/5 text-start  font-bold">កាលបរិច្ឋេទ</th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="(file, index) in getPdfFile" :key="index">
                <td class="">{{ file.title }}</td>
                <td class="text-green-500">{{ file.uploadBy?.username }}</td>
                <td>{{ file.office }}</td>
                <td>{{ moment(file.createdAt).format("ddd DD-MMM-YYYY") }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="w-2/6 rounded-2xl mr-5 bg-white p-5 dark:bg-black">
          <button
            @click="
              () => {
                if (!token) {
                  showErrorToast('សូមចូលប្រើប្រាស់មុនពេលបង្ហោះឯកសារ');
                  return;
                }
                showPopup = true;
              }
            "
            type="button"
            class="rounded-full py-2 px-5 bg-[#577EF2] text-white items-center flex text-[18px] font-medium mb-5 hover:bg-[#F2AE2E] transition-all"
          >
            <v-icon
              name="bi-cloud-upload-fill"
              scale="1.5"
              class="mr-2"
            ></v-icon
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
                  @click="closePopup"
                  class="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <form action="" class="mt-2">
                <div class="relative w-full gap-2">
                  <div class="w-full mb-2">
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

                  <div class="relative">
                    <select
                      name=""
                      id=""
                      class="w-full select rounded-full appearance-none z-50"
                      aria-label="select"
                      v-model="office"
                    >
                      <option disabled selected>ជ្រើសរើសការិយាល័យ</option>
                      <option value="រដ្ឋបាល">រដ្ឋបាល</option>
                      <option value="ពត៌មានវិទ្យា">ពត៌មានវិទ្យា</option>
                      <option value="តែងសេចក្តី">តែងសេចក្តី</option>
                      <option value="សន្តិសុខ">
                        សន្តិសុខ & សណ្តាប់ធ្នាប់
                      </option>
                    </select>
                  </div>
                </div>
                <textarea
                  class="textarea textarea-bordered mt-2 rounded-2xl"
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
  transition: all 1ms;

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
