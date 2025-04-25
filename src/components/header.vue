<template>
  <div class="h-[6rem]">
    <div class="flex items-center justify-between mt-3 px-5">
     <div class="flex items-center">
      <img src="../assets/Logo.png" alt="" class="w-[5rem] h-[5rem] mr-1" />
      <div>
        <h1 class="text-[14px]">ក្រសួងវប្បធម៌ និងវិចិត្រសិល្បៈ</h1>
        <h1 class="text-[14px]">នាយកដ្ឋានរដ្ឋបាលទូទៅ</h1>
      </div>
    </div>
    <div class="flex mr-16">
        <div class="relative ml-8 w-[30rem] !drop-shadow-xl">
          <input
            type="text"
            id="Search"
            placeholder="ស្វែងរក..."
            class="w-full rounded-full py-2.5 pe-10 px-3 shadow-xs sm:text-sm bg-white"
          />

          <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" class="text-gray-600 hover:text-gray-700">
              <span class="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
        <!-- Office -->
        <div class="relative ml-8 w-[12rem] drop-shadow-xl">
          <select name="" id="" class="w-full rounded-full py-2.5 pe-10 p-4 shadow-xs sm:text-sm">
            <option value="">ជ្រើសរើសការិយាល័យ</option>
            <option value="">រដ្ឋបាល</option>
            <option value="">ពត៌មានវិទ្យា</option>
            <option value="">តែងសេចក្តី</option>
            <option value="">សន្តិសុខ សណ្តាប់ធ្នាប់</option>
          </select>

          <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" class="text-gray-600 hover:text-gray-700">
              <span class="sr-only">Search</span>
              <v-icon name="md-arrowdropdown-round" scale="1.5" />
            </button>
          </span>
        </div>
        <button type="button" class="rounded-full py-2 px-5 bg-[#577EF2] ml-8 text-white hover:bg-[#F2AE2E] transition-all">ស្វែងរក</button>
      </div>
      <v-icon name="md-lightmode" scale="1.5" class="text-gray-500 cursor-pointer ml-16" />
      <div>
        <button v-if="!isSignIn.isLoggedIn" type="button" class="px-4 py-3 border-2 border-blue-500 rounded-full hover:bg-[#577EF2] hover:text-white
          transition-all" aria-haspopup="dialog" aria-expanded="false" aria-controls="middle-center-modal" data-overlay="#middle-center-modal">ចូលប្រើប្រាស់</button>

          <div id="middle-center-modal" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 modal-middle hidden" role="dialog" tabindex="-1">
            <div class="modal-dialog overlay-open:opacity-100 overlay-open:duration-300">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title mx-auto">ចូលប្រើប្រាស់</h3>
                  <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#middle-center-modal">
                    <span class="icon-[tabler--x] size-4"></span>
                  </button>
                </div>
                <div class="modal-body text-center">
                  <button @click="googleLogin" class="btn btn-gradient btn-primary rounded-full">
                    <v-icon name="fc-google"/>ចូលប្រើប្រាស់ជាមួយ Google</button>
                </div>
              </div>
            </div>
          </div>
      </div>
      <!-- Profile -->
      <div class="dropdown relative inline-flex">
        <button id="dropdown-footer" class="dropdown-toggle flex items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          <div v-if="isSignIn.isLoggedIn" class="flex items-center gap-2">
            <img :src="isSignIn?.getUser?.picture" class="w-10 h-10 rounded-full" alt="">
          <h1 class="text-[14px] mr-1">{{isSignIn?.getUser?.username}}</h1>
          <span class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
          </div>
        </button>
        <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-footer">
          <li><a class="dropdown-item" href="#"><button @click="showPopup = true">ប្រវត្តិរូប</button></a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li class="dropdown-footer gap-2">
            <button class="btn btn-error btn-soft btn-block">ចាកចេញ</button>
          </li>
        </ul>
      </div>
      <!-- Profile popup -->
      <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">ប្រវត្តិរូប</h2>
            <button @click="closePopup" class="text-gray-500 hover:text-gray-700">
                    ✕
            </button>
          </div>
          
          <div class="modal-footer">
            <button type="button" class="btn btn-soft btn-secondary" data-overlay="#middle-center-modal">Close</button>
            <button @click="addFile" 
            type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
  const showPopup = ref(false)
  const closePopup=()=>{
                showPopup.value = false
        };
  const googleLogin=()=> {
            const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_APP_GOOGLE_REDIRECT_URL}&response_type=code&scope=profile%20email&access_type=offline`;
            window.open(googleAuthUrl)
        }
  const isSignIn = useAuthStore()
  const image = isSignIn?.getUser?.picture
        
</script>
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
  background-color: #4CAF50;
  color: white;
}


</style>