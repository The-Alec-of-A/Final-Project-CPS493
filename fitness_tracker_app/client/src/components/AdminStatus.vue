<script setup lang="ts">
import { deleteUser, getAll, getOne, type User } from '@/models/user'
import { onMounted, ref} from 'vue'
import WeightSummary from './WeightSummary.vue'
import CardioSummary from './CardioSummary.vue'
import SocialPost from './SocialPosts.vue'
import { getPostByUser, type Post } from '@/models/posts'
import { getSummaryByUser, type Summary } from '@/models/summary'
import { currentUser } from '@/models/session'

const selectedUser = ref<User>();

if(currentUser.value){
  selectedUser.value = currentUser.value
}

const showPosts = ref(false);
const showFriends = ref(false)
const showSummeries = ref(false);
const userFriendList = ref<User[]>([])
const userPosts = ref<Post[]>([])
const allUsers = ref<User[]>([])
const userSummaries = ref<Summary[]>([])

const fetchData = async () => {
  const userList = await getAll()

  allUsers.value = userList
}

onMounted(fetchData)

function viewPosts(userId: number){
  showSummeries.value = false
  showFriends.value = false
  showPosts.value = true

  changeSelectedUser(userId).then((userSelection) => {
    selectedUser.value = userSelection
  })

  getUsersPosts(userId).then((posts) => {
    userPosts.value = posts
  })
}

function viewFriends(userId: number){
  showPosts.value = false
  showSummeries.value = false
  showFriends.value = true

  changeSelectedUser(userId).then((userSelection) => selectedUser.value = userSelection)

  getUsersFriends(userId).then((friends) => userFriendList.value = friends)
}

function viewSummeries(userId: number){
  showPosts.value = false
  showFriends.value = false
  showSummeries.value = true

  changeSelectedUser(userId).then((userSelection) => {
    selectedUser.value = userSelection
  })

  getUsersSummaries(userId).then((summaries) => {
    userSummaries.value = summaries
  })
}

function deleteAccount(id:number) {
  for(let user of allUsers.value){
    if(user.user_id == id){
      allUsers.value.splice(allUsers.value.indexOf(user),1)
    }
  }
  deleteUser(id)
}
</script>

<script lang="ts">

async function changeSelectedUser(id: number): Promise<User> {
  return await getOne(id)
}

async function getUsersPosts(id:number): Promise<Post[]> {
  return await getPostByUser(id)
}

async function getUsersFriends(id:number): Promise<User[]> {
  let friends: User[] = []
  let current: User = await getOne(id)
  for(let friendID of current.friends_Ids){
    const friend = await getOne(friendID)

    friends.push(friend)
  }
  return friends
}

async function getUsersSummaries(id:number): Promise<Summary[]> {
  let summaries: Summary[] = []
  return await await getSummaryByUser(id);

}
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Users</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUsers">
          <td>{{ user.first_Name + " " + user.last_Name }}</td>
          <td>
            <div class="buttons">
              <button class="button is-danger" @click="deleteAccount(user.user_id as number)">delete</button>
              <a class="button is-primary" @click="viewPosts(user.user_id as number)">View Posts</a>
              <a class="button is-primary" @click="viewFriends(user.user_id as number)">View Friends</a>
              <a class="button is-primary" @click="viewSummeries(user.user_id as number)">View Summaries</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="container pt-5" v-if="showPosts" v-for="post in userPosts">
    <SocialPost :post="post" />
  </div>
  <div class="container pt-5" v-if="showFriends">
    <table class="table">
      <thead>
        <tr>
          <td>Name</td>
          <td>User Data</td>
        </tr>
      </thead>
      <tbody>
      <tr v-for="friend in userFriendList">
        <td>{{ friend.first_Name + " " + friend.last_Name }}</td>
        <td>{{ friend }}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="container pt-5 " v-if="showSummeries" v-for="summary in userSummaries">
    <WeightSummary v-if="summary.type === 'weight' || summary.type === 'strength'" :data="summary" />
    <CardioSummary v-else :data="summary" />
  </div>
</template>

<style scoped></style>
