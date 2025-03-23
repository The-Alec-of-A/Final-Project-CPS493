<script setup lang="ts">
import { ref } from 'vue'

const showAddActivityPanel = ref(false)
const activityType = ref('')
const activityMinutes = ref('')
const activityDistance = ref('')

function submitActivity() {
  console.log('Activity Submitted:', {
    type: activityType.value,
    minutes: activityMinutes.value,
    distance: activityDistance.value,
  })
  // Reset fields and close panel
  activityType.value = ''
  activityMinutes.value = ''
  activityDistance.value = ''
  showAddActivityPanel.value = false
}
</script>

<template>
  <div class="button-container">
    <button class="add-button" @click="showAddActivityPanel = true">+ Add Activity</button>
    <button class="delete-button">- Delete Activity</button>
    <button class="edit-button">Edit Activity</button>
  </div>

  <div v-if="showAddActivityPanel" class="add-activity-panel">
    <h3>Add Activity</h3>
    <label>
      Activity Type:
      <input type="text" v-model="activityType" />
    </label>
    <label>
      Minutes:
      <input type="number" v-model="activityMinutes" />
    </label>
    <label>
      Distance (if applicable):
      <input type="number" v-model="activityDistance" />
    </label>
    <div class="panel-buttons">
      <button @click="submitActivity">Submit</button>
      <button @click="showAddActivityPanel = false">Cancel</button>
    </div>
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

.add-activity-panel {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.add-activity-panel label {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.panel-buttons {
  display: flex;
  justify-content: space-between;
}

.panel-buttons button {
  background-color: rgb(6, 134, 181);
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
