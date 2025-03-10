<script setup>
import { ref } from 'vue'

const username = ref('')
const usernameExists = ref(false)

function checkUsername() {
  const existingUsernames = ['user1', 'user2', 'user3']
  usernameExists.value = existingUsernames.includes(username.value)
}
</script>

<template>
  <div class="container">
    <div class="form-group">
      <label for="username">Enter username: </label>
      <input type="text" id="username" v-model="username" @blur="checkUsername" />
      <span v-if="usernameExists" class="warning">Username already exists, please try again.</span>
    </div>
    <button class="submit-button">Submit</button>
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
