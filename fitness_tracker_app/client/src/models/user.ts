/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from './myFetch'
import { ref } from 'vue'
import users from '@/data/users.json'

const emit = defineEmits(['add-username'])
const username = ref('')
const existingUsernames = ref(['user1', 'user2', 'user3']) // Example existing usernames
const usernameExists = ref(false)

export interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    age: number
    gender: string
    height: number
    weight: number
    role: string
    image: string
}

export function getAll() {
  return api('user')
}

export function get(id: number): Promise<User> {
  return api(`user/${id}`)
}

export function update(user: User): Promise<User> {
  return api(`users/${user.id}`).then(() => user)
}

export function remove(id: number): Promise<void> {
  return api(`users/${id}`).then(() => undefined)
}

export function getImageUrl(user: User): string {
  return new URL(`@/assets/${user.image}`, import.meta.url).toString();
}

export function handleSubmit() {
  if (!usernameExists.value && username.value.trim()) {
    // Emit event with new username
    emit('add-username', username.value)
    existingUsernames.value.push(username.value) // Add new username to the list
    username.value = '' // Clear the input
  }
}
