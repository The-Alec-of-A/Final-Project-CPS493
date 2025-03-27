<script setup lang="ts">
import { ref } from 'vue'
import { handleSubmit } from '../models/user'

const username = ref('')
const existingUsernames = ref(['user1', 'user2', 'user3']) // Example existing usernames
const usernameExists = ref(false)

function checkUsername() {
  usernameExists.value = existingUsernames.value.includes(username.value)
}
</script>

<template>
  <div class="container">
    <div class="form-group">
      <span v-if="usernameExists" class="warning"
        >Username already exists. Please try again.<br
      /></span>
      <label for="username">Enter username: </label>
      <input type="text" id="username" v-model="username" @input="checkUsername" />
    </div>
    <button class="submit-button" @click="handleSubmit">Submit</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.form-group {
  text-align: center;
}

.warning {
  color: red;
}

.submit-button {
  background-color: rgb(6, 134, 181);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 100px;
}
</style>
