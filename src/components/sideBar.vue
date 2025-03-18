<template>
    <div class="w-[25rem] h-screen">
        <ul class="p-5 mt-5">
            <li class="flex items-center pl-[3rem] mb-4 py-4 bg-[#577EF2] rounded-full">
                <router-link to="/" class="text-white text-[18px] font-medium">
                <v-icon name="md-dashboard-round" scale="1.5" class="text-white mr-2" />
                ផ្ទាំងគ្រប់គ្រង
                </router-link>
            </li>
            <li class="flex items-center pl-[3rem] mb-4 py-4 text-gray-500 hover:text-white hover:bg-[#577EF2] transition-all  rounded-full">
                <router-link to="/favorites" class="text-[18px] font-medium ">
                    <v-icon name="md-favorite" scale="1.5" class=" mr-2" />
                    បានចូលចិត្ត
                </router-link>
            </li>
            <li class="flex items-center pl-[3rem] mb-4 py-4 text-gray-500 hover:text-white hover:bg-[#577EF2] transition-all rounded-full">
                <router-link to="docs" class="text-[18px] font-medium" >
                    <v-icon name="hi-document-text" scale="1.5" class=" mr-2" />
                    ឯកសារ
                </router-link>
            </li>
            <li class="flex items-center pl-[3rem] mb-4 py-4 text-gray-500 hover:text-white hover:bg-[#577EF2] transition-all rounded-full">
                <router-link to="/image" class="text-[18px] font-medium">
                <v-icon name="bi-image-fill"  scale="1.5" class="mr-2" />
                រូបភាព</router-link>
            </li>
        </ul>
        <div class="justify-center flex">
            <img src="../assets/document.jpg" alt="" class="w-[80%] h-[15rem] object-cover" />
        </div>
    </div>
</template>