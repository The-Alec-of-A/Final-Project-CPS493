<script setup lang="ts"></script>

<template>
  <div class="button-container">
    <button class="add-button">+ Add Activity</button>
    <button class="delete-button">- Delete Activity</button>
    <button class="edit-button">Edit Activity</button>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.add-button {
  background-color: rgb(6, 134, 181);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin-right: 20px;
}

.delete-button {
  background-color: rgb(6, 134, 181);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin-right: 20px;
}

.edit-button {
  background-color: rgb(6, 134, 181);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}
</style>
