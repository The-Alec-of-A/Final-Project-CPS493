<script setup lang="ts">
import { ref } from 'vue'
import { useStats } from '../models/useStats' // Assuming a composable for stats management

const showAddActivityPanel = ref(false)
const activityType = ref('')
const activityMinutes = ref('')
const activityDistance = ref('')
const activities = ref<
  { type: string; minutes: string; distance: string; markedForDeletion: boolean }[]
>([]) // Store all activities
const { addDistance } = useStats() // Function to update stats

function submitActivity() {
  const activityData = {
    type: activityType.value,
    minutes: activityMinutes.value,
    distance: activityDistance.value,
    markedForDeletion: false, // Default to not marked for deletion
  }
  console.log('Activity Submitted:', activityData)

  activities.value.push(activityData) // Add to activities list

  if (activityDistance.value) {
    addDistance(parseFloat(activityDistance.value)) // Update stats with distance
  }

  // Reset fields and close panel
  activityType.value = ''
  activityMinutes.value = ''
  activityDistance.value = ''
  showAddActivityPanel.value = false
}

function editActivity(index: number) {
  const activity = activities.value[index]
  activityType.value = activity.type
  activityMinutes.value = activity.minutes
  activityDistance.value = activity.distance
  showAddActivityPanel.value = true

  // Remove the activity being edited
  activities.value.splice(index, 1)
}

function deleteActivity() {
  activities.value = activities.value.filter((activity) => !activity.markedForDeletion) // Remove marked activities
}
</script>

<template>
  <div class="button-container">
    <button class="add-button" @click="showAddActivityPanel = true">+ Add Activity</button>
    <button class="delete-button" @click="deleteActivity">- Delete Activity</button>
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
      Distance (if applicable)(in miles):
      <input type="number" v-model="activityDistance" />
    </label>
    <div class="panel-buttons">
      <button @click="submitActivity">Submit</button>
      <button @click="showAddActivityPanel = false">Cancel</button>
    </div>
  </div>

  <div v-for="(activity, index) in activities" :key="index" class="submitted-activity-panel">
    <h3>Submitted Activity</h3>
    <p><strong>Type:</strong> {{ activity.type }}</p>
    <p><strong>Minutes:</strong> {{ activity.minutes }}</p>
    <p><strong>Distance:</strong> {{ activity.distance }} miles</p>
    <div class="submitted-activity-actions">
      <button @click="editActivity(index)">Edit</button>
      <label> <input type="checkbox" v-model="activity.markedForDeletion" /> Delete </label>
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

.submitted-activity-panel {
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  padding: 20px;
  margin-top: 20px;
  width: 300px;
}

.submitted-activity-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.submitted-activity-actions button {
  background-color: rgb(6, 134, 181);
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.submitted-activity-actions label {
  display: flex;
  align-items: center;
  font-size: 14px;
}
</style>
