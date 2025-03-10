<script setup>
import { useNow } from '@vueuse/core'
import { useRouter } from 'vue-router'

const username = ref('')
const usernameExists = ref(false)
const router = useRouter()

function checkUsername() {
  const existingUsernames = ['user1', 'user2', 'user3']
  usernameExists.value = existingUsernames.includes(username.value)
}

function goToSignUp() {
  router.push('/sign-up')
}
</script>

<template>
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username" @blur="checkUsername" />
    <span v-if="usernameExists" class="warning">Username already exists, please try again.</span>
    <button @click="goToSignUp">Sign Up</button>
  </div>
</template>

<style scoped>
.warning {
  color: red;
}
</style>
