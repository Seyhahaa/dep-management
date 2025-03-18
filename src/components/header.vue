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
      <div class="flex items-center ml-6">
        <img src="../assets/user-avatar.png" class="w-10 h-10 rounded-full" alt="">
        <h2 class="text-[16px] ml-2 font-medium">សុខ សំណាង</h2>
      </div>
    </div>
  </div>
</template>
