import { ref } from 'vue'
import type { Post } from './user-posts'
import type { Summary } from './summary'
import users from '@/data/users.json'

const emit = defineEmits(['add-username'])
const username = ref('')
const existingUsernames = ref(['user1', 'user2', 'user3']) // Example existing usernames
const usernameExists = ref(false)

export interface User {
  userId: number
  userName: string
  posts: any[]
  summaries: any[]
  friendsIds: any[]
}

export function getAll() {
  return users
}

export function getOne(id: number) {
  return users.users[id]
}

export function handleSubmit() {
  if (!usernameExists.value && username.value.trim()) {
    // Emit event with new username
    emit('add-username', username.value)
    existingUsernames.value.push(username.value) // Add new username to the list
    username.value = '' // Clear the input
  }
}
