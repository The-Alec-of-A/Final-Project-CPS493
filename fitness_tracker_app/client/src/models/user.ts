/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from 'vue'
import { api, post, remove, update } from './session'
const emit = defineEmits(['add-username'])
const username = ref('')
const existingUsernames = ref(['user1', 'user2', 'user3']) // Example existing usernames
const usernameExists = ref(false)

export interface User {
    id?: number
    firstName: string
    lastName: string
    email: string
    age: number
    gender: string
    height: number
    weight: number
    role: string
    image: string
    friendsIds: number[]
}

export function getAll() {
  return api('user')
}

export function getOne(id: number): Promise<User> {
  return api(`user/${id}`)
}

export function updateUser(user: User): Promise<User> {
  return api(`users/${user.id}`).then(() => user)
}

export function deleteUser(id: number): Promise<void> {
  return api(`users/${id}`).then(() => undefined)
}

export function getImageUrl(user: User): string {
  return new URL(`@/assets/${user.image}`, import.meta.url).toString();
}

