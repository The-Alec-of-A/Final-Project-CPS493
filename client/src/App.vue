<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<style>
body {
  background-color: aliceblue;
}

.body-container {
  background-color: rgb(255, 255, 255);
  height: 100vh;
  padding: 1rem;
}
</style>
