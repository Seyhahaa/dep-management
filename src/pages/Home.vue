
<template>
        <div class="flex flex-col">
                <div class="flex p-5">
                        <div class="w-4/6 max-h-max rounded-2xl mr-5 bg-white p-5 ">
                                <h1 class="text-[14px]">ទើបបង្ហោះថ្មីៗ</h1>
                                <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
                                        <div class="overflow-hidden rounded-2xl" v-for="item in data" :key="item.id">
                                                <a href="#" class="group relative rounded-2xl block bg-black h-[13rem] ">
                                                        <img
                                                        alt=""
                                                        :src="item.url"
                                                        class="absolute inset-0 w-full object-cover group-hover:opacity-50"
                                                        />
                                                        
                                                        <div class="relative p-4 sm:p-2 lg:p-3">
                                                        
                                                        <div class=" ">
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
                        <div class="w-2/6 h-[70vh] rounded-2xl bg-white p-5">
                                <h1 class="text-[14px]">អ្នកប្រើប្រាស់</h1>
                                <div>
                                        <div class="flex my-3 items-center hover:bg-slate-200 rounded-2xl p-2 transition-all cursor-pointer" v-for="item in user" :key="item.id">
                                                <img :src="item.profile" alt="" class="w-16 h-16 rounded-full" />
                                                <div class="ml-3">
                                                        <h2 class="text-[#1f1e1e] font-medium text-[18px]">{{ item.name }}</h2>
                                                        <p class="text-[#706C6C]">{{ item.email }}</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        
                </div>
                <div class="flex pl-5">
                        <div class="w-4/6 max-h-max rounded-2xl mr-5 bg-white p-5 ">
                                <h1 class="text-[14px]">ឯកសារផ្សេងៗ</h1>
                                <div class="">
                                        <table class="w-full mt-5">
                                                <tr>
                                                        <th class="w-2/5 text-start">ឈ្មោះ
                                                                <v-icon name="la-angle-down-solid" scale="0.8" class="ml-2 cursor-pointer"></v-icon>
                                                        </th>
                                                        <th class="w-1/5 text-start">ម្ចាស់</th>
                                                        <th class="w-1/5 text-start">ការិយាល័យ</th>
                                                        <th class="w-1/5 text-start">កាលបរិច្ឋេទ</th>
                                                </tr>
                                        </table>
                                </div>
                        </div>
                        <div class="w-2/6 max-h-max rounded-2xl mr-5 bg-white p-5 ">
                                <button type="button" class="rounded-full py-2 px-5 bg-[#577EF2] text-white items-center flex text-[18px] font-medium mb-5
                                hover:bg-[#F2AE2E] transition-all" aria-haspopup="dialog" aria-expanded="false" aria-controls="middle-center-modal" data-overlay="#middle-center-modal">
                                        <v-icon name="bi-cloud-upload-fill" scale="1.5" class="mr-2"></v-icon>
                                        បង្ហោះ</button>
                                <hr />
                                <!-- popUp -->
                                <div id="middle-center-modal" class="overlay modal overlay-open:opacity-100 modal-middle hidden" role="dialog" tabindex="-1">
                                        <div class="modal-dialog overlay-open:opacity-100">
                                                <div class="modal-content">
                                                        <div class="modal-header">
                                                                <h3 class="modal-title">បញ្ចូលឯកសារថ្មី</h3>
                                                                <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#middle-center-modal">
                                                                <span class="icon-[tabler--x] size-4"></span>
                                                                </button>
                                                        </div>
                                                        <div class="modal-body">
                                                                <form action="" class="mt-2">                                                                      
                                                                        <div class="relative w-[100%] flex gap-3">
                                                                                <div class="w-full">
                                                                                        <input type="text" placeholder="ឈ្មោះឯកសារ" class="input input-floating peer rounded-full" id="floatingInput" />
                                                                                         <label class="input-floating-label" for="floatingInput">ឈ្មោះឯកសារ</label>
                                                                                </div>
                                                                                <select class="select max-w-[11.3rem] appearance-none rounded-full" aria-label="select">
                                                                                        <option disabled selected>ជ្រើសរើសការិយាល័យ</option>
                                                                                        <option value="">រដ្ឋបាល</option>
                                                                                        <option value="">ពត៌មានវិទ្យា</option>
                                                                                        <option value="">តែងសេចក្តី</option>
                                                                                        <option value="">សន្តិសុខ សណ្តាប់ធ្នាប់</option>
                                                                                </select>
                                                                        </div>
                                                                        <div class="flex items-center gap-2 max-sm:flex-wrap mt-5">
                                                                                <div class="size-14 rounded-full">
                                                                                        <input type="file" class="file:btn file:btn-primary block text-sm file:me-3 file:rounded-full file:uppercase" aria-label="file-input" />
                                                                                </div>
                                                                        </div>
                                                                        <div class="flex  mt-5 gap-7">
                                                                                <div class="flex items-center gap-1">
                                                                                        <input type="radio" name="radio-2" class="radio radio-primary" id="radioType1" />
                                                                                        <label class="label label-text text-base" for="radioType1">សាធារណៈ</label>
                                                                                </div>
                                                                                <div class="flex items-center gap-1">
                                                                                        <input type="radio" name="radio-2" class="radio radio-primary" id="radioType2" checked />
                                                                                        <label class="label label-text text-base" for="radioType2">ផ្ទាល់ខ្លួន</label>
                                                                                </div>
                                                                        </div>
                                                                </form>
                                                        </div>
                                                        <div class="modal-footer">
                                                                <button type="button" class="btn btn-soft btn-secondary" data-overlay="#middle-center-modal">Close</button>
                                                                <button type="button" class="btn btn-primary">Save changes</button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <div class="flex justify-between">
                                        <div class="flex items-center mt-5 gap-3">
                                                <v-icon name="io-documents-sharp" scale="2" class="text-[#577EF2]" />
                                                <div>
                                                        <h2 class="">0 MB</h2>
                                                        <h2 class="text-[#706C6C]">ឯកសារទាំងអស់</h2>
                                                </div>
                                        </div>
                                        <div class="flex items-center mt-5 gap-3 ">
                                                <v-icon name="io-images-sharp" scale="2" class="text-[#41D9AE]" />
                                                <div>
                                                        <h2 class="">0 MB</h2>
                                                        <h2 class="text-[#706C6C]">រូបភាពទាំងអស់</h2>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
        const data = [{
                url: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
                url: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
                url: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
                url: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
                url: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
                url: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
                url: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
                url: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        }
]
const user = [
        { name: 'Bunna seyha', email: 'Jbseyha@gmail.com', phone: '', profile:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"},
        { name: 'devine haney', email: 'DavienHaney@gmail.com', phone: '', profile:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'},
        { name: 'Jessica Ryan', email: 'Jessica@gmail.com', phone: '', profile:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'},
        { name: 'John Doe', email: 'John@gmail.com', phone: '', profile:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'},
        { name: 'Sarah Smith', email: 'Smith@gmail.com', phone: '', profile:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'},
]
</script>
