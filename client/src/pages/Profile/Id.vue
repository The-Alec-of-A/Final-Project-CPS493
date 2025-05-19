<script setup lang="ts">
import SocialPost from '@/components/SocialPosts.vue';
import { getPostByUser, type Post } from '@/models/userPosts';
import { currentUser, isLoggedIn } from '@/models/session';
import { getUsersWithFriend, getOne, updateFriends, type User } from '@/models/user';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

    const loaded = ref(true)
    const route = useRoute('/Profile/[id]')
    const showingUser = ref<User>()
    const userPosts = ref<Post[]>([])
    const userFriends = ref<User[]>([])

    fetchProfile(Number(route.params.id))

    watch(() => route.params.id,(newId) => {
      fetchProfile(Number(newId));
    })

    function fetchProfile(id: number) {
      loaded.value = false
      getOne(id).then((user) => showingUser.value = user)
      getPostByUser(id).then((posts) => userPosts.value = posts)
      getUsersWithFriend(id).then((friends) => userFriends.value = friends)
      loaded.value = true
    }

    function addfrind(){
        if(isLoggedIn()){
          console.log("adding friend")
            updateFriends(Number(currentUser.value.id), Number(route.params.id))
        }
    }
</script>

<template>
    <div class="hero-body" v-if="loaded">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <h1 class="title">
            {{ showingUser?.firstName + " " + showingUser?.lastName }}
          </h1>
          <div class="button" @click="addfrind()">
            <h2 class="subtitle button is-primary has-text-warning">
              Add friend
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="columns">
        <div class="container column is-four-fifths">
            <div class="container py-3" v-for="post in userPosts">.
                <SocialPost :post="post" />
            </div>
        </div>
        <div class=" container column is-one-fifth">
          <h2 class="title">People you may know</h2>
          <div class="m-5 friend p-0 m-0" v-for="friend in userFriends">
            <RouterLink :to="`/Profile/${friend.id}`">
            <p class="is-size-5"><FontAwesomeIcon :icon="faCircleUser" /> {{ friend.firstName + " " + friend.lastName }}</p>
          </RouterLink>
        </div>
        </div>
    </div>
</template>
