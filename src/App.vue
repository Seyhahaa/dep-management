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