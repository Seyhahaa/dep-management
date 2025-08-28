<script> 

</script>
<template>
  <div class="flex dark:bg-black">
      <!-- <Header /> -->
       <div class="w-1/6 " >

         <SideBar />
       </div>
      <div class="w-5/6 p-5">
        <div class="flex flex-col gap-5">
            <Header />
            <div class="flex flex-col bg-[#F2F2F2]">
              <div class="flex p-5">
                <router-view class="w-3/4 rounded-3xl bg-white  mr-5 dark:bg-black  p-5"/>
                <users class="w-1/4 rounded-2xl bg-white dark:bg-black"/>
              </div>
              <div>
                <file />
              </div>
            </div>
          </div>
      </div>
  </div>
</template>
<script setup>
import file from './components/file.vue'
import users from './components/users.vue'
import Header from './components/Header.vue'
import SideBar from './components/sideBar.vue'
</script>

<!-- <script setup lang="ts">
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/vue'
</script> -->

<!-- <template>
  <header>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>
</template> -->

<!-- 
<script setup lang="ts">
import { useConvexMutation, useConvexQuery } from "@convex-vue/core";
import { api } from "../convex/_generated/api";
import { ref } from "vue";

const {data, isLoading} = useConvexQuery(api.tasks.get, {});
const newTaskText = ref("");
const date = ref("");
const completed = ref('');
const createTask = useConvexMutation(api.tasks.createTask);
const deleteTask = useConvexMutation(api.tasks.deleteTask);



const addTask = async () => {
  if (newTaskText.value.trim() === "") return;
  const isComplete = completed.value === 'true' ? true : false;
  await createTask.mutate({ text: newTaskText.value, isCompleted: isComplete, deadline: date.value });
  newTaskText.value = "";
};
const removeTask = async (taskId) => {
  await deleteTask.mutate({ id:taskId });
};
</script>

<template>
  <div class="p-5 flex flex-col w-2/5 gap-5 justify-center mx-auto">
    <input class="border border-gray-500" v-model="newTaskText" placeholder="New task..." />
    <input type="dateTime-local" class="border border-gray-500" v-model="date" placeholder="Date Time" />
    <div>
      <div class="flex items-center gap-1">
          <input type="radio" name="radio-2" value="true" v-model="completed" class="radio radio-primary" id="radioType1" />
          <label class="label label-text text-base" for="radioType1">Completed</label>
        </div>
        <div class="flex items-center gap-1">
          <input type="radio" name="radio-2" value="false" v-model="completed" class="radio radio-primary" id="radioType2" checked />
          <label class="label label-text text-base" for="radioType2">Uncomplete</label>
        </div>
    </div>
    <button class="p-3 bg-cyan-500 rounded-lg" @click="addTask">Add Task</button>
    <div>
      <p v-if="isLoading" class="mx-auto justify-center flex">
        <img src="../public/Animation - 1742980197974.gif" alt="">
      </p>
      <table v-else class="w-full"> 
        <tr>
          <th>Task</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr> 
        <tr v-for="task in data" :key="task.id" class="text-center">
          <td>{{ task.text }}</td>
          <td>{{ task.deadline }}</td>
          <td>{{ task.isCompleted ? "✅" : "❌" }}</td>
          <td>
            <button class="p-2 mr-2 bg-cyan-500 rounded-lg" @click="">Edit</button>
            <button class="p-2 bg-red-500 rounded-lg" @click="removeTask(task._id)">Delete</button>
          </td>
        </tr>
      </table>
    </div>
  </div>

</template> -->