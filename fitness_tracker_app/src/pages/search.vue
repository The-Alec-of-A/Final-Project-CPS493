<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>

<template>
  <div class="search-container">
    <input type="text" class="search-bar" placeholder="Search person's name..." />
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 20px; /* Added padding to create space from the top */
}

.search-bar {
  width: 50%;
  height: 50px;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
}
</style>
