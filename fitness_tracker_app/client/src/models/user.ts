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
    image: string
    friendsIds: number[]
    role?: string
}

export async function getAll(): Promise<User[]> {
  return api('user')
}

export async function getOne(id: number): Promise<User> {
  return api(`user/${id}`)
}

export function search(query: string, limit = 10, offset = 0) {
  return api(`users/search/${query}?offset=${offset}&limit=${limit}`)
}

export async function updateUser(user: User): Promise<User> {
  return api(`users/${user.id}`).then(() => user)
}

export async function deleteUser(id: number): Promise<void> {
  return api(`users/${id}`).then(() => undefined)
}

export async function postUser(newUser: User) {
    return post('users/',newUser)
}

export async function getFriendsOfUser(id: number): Promise<User[]> {
    const user = await getOne(id)
    const friends = await Promise.all(
        user.friendsIds.map(friendId => getOne(friendId))
    )
    return friends
}

export async function getUsersWithFriend(id: number): Promise<User[]> {
    return api(`users/search/${id}?`)
}

export async function updateFriends(id:number, friendId: number) {
    const currentList = (await getOne(id)).friendsIds
    currentList.push(friendId)
    return update(`users/${id}`, {"friends_Ids": currentList})
}

export function getImageUrl(user: User): string {
  return new URL(`@/assets/${user.image}`, import.meta.url).toString();
}
