<script setup>
const menuName = [
    {'name':'ផ្ទាំងគ្រប់គ្រង', 'icon':'md-dashboard-round'},
    {"name":"បានចូលចិត្ត", "icon": "md-favorite"},
    {"name":"ឯកសារ", "icon": "hi-document-text"},
    {"name":"រូបភាព", "icon": "bi-image-fill"},
    {"name":"ការកំណត់", "icon": "ri-settings-2-line"}]; 
</script>

<template>
    <div class="h-screen fixed mt-2">
        <div class="flex items-center">
            <img src="../assets/Logo.png" alt="" class="w-[5rem] h-[5rem] mx-1" />
            <div>
                <h1 class="text-[14px]">ក្រសួងវប្បធម៌ និងវិចិត្រសិល្បៈ</h1>
                <h1 class="text-[14px]">នាយកដ្ឋានរដ្ឋបាល</h1>
            </div>
        </div>
        <ul class="p-5 mt-5">
            <li class="flex items-center mb-4  text-gray-500 hover:text-white hover:bg-[#577EF2] transition-all  rounded-full">
                <router-link to="/" class=" text-[18px] font-medium p-4 pl-[3rem]">
                <v-icon name="md-dashboard-round" scale="1.5" class=" mr-2" />
                ផ្ទាំងគ្រប់គ្រង
                </router-link>
            </li>
            <li class="flex items-center  mb-4 text-gray-500 hover:text-white hover:bg-[#577EF2] transition-all  rounded-full">
                <router-link to="/favorites" class="text-[18px] font-medium p-4 pl-[3rem] ">
                    <v-icon name="md-favorite" scale="1.5" class=" mr-2 " />
                    បានចូលចិត្ត
                </router-link>
            </li>
            <li class="flex items-center mb-4  text-gray-500 hover:text-white hover:bg-[#577EF2] transition-all rounded-full">
                <router-link to="docs" class="text-[18px] font-medium p-4 pl-[3rem]" >
                    <v-icon name="hi-document-text" scale="1.5" class=" mr-2" />
                    ឯកសារ
                </router-link>
            </li>
            <li class="flex items-center mb-4  text-gray-500 hover:text-white hover:bg-[#577EF2] transition-all rounded-full">
                <router-link to="/image" class="text-[18px] font-medium p-4 pl-[3rem]">
                <v-icon name="bi-image-fill"  scale="1.5" class="mr-2" />
                រូបភាព</router-link>
            </li>
            <li class="flex items-center mb-4  text-gray-500 hover:text-white hover:bg-[#577EF2] transition-all rounded-full">
                <router-link to="/settings" class="text-[18px] font-medium p-4 pl-[3rem]">
                <v-icon name="ri-settings-2-line" scale="1.5" class="mr-2" />
                ការកំណត់</router-link>
            </li>
        </ul>
        <div class="justify-center flex">
            <img src="../assets/document.jpg" alt="" class="w-[80%] h-[15rem] object-cover" />
        </div>
    </div>
</template>