<template>
  <div id="app">
      <Header />
      <div class="flex pr-5">
        <SideBar />
        <router-view class="bg-[#F2F2F2] w-screen max-h-screen rounded-3xl"/>
      </div>
  </div>
</template>
<script setup>
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue'
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