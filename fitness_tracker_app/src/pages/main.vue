<script setup lang="ts">
import WeightStats from '@/components/WeightStats.vue'
import AddExercise from '@/components/AddExercise.vue'
import CardioStats from '../components/CardioStats.vue'
import UserPosts from '@/components/UserPosts.vue'
import { currentUser } from '@/components/UserList.vue'
</script>

<template>
  <main>
    <section class="columns pt-5">
      <div class="column is-one-fifth">
        <AddExercise />
      </div>
      <div class="column is-half">
        <div class="container py-3" v-for="post in currentUser?.posts">
          <UserPosts :post="post">
            <WeightStats v-if="post.summary.type === 'weight'" :data="post.summary"> </WeightStats>
            <CardioStats v-else :data="post.summary"> </CardioStats>
          </UserPosts>
        </div>
        {{ currentUser?.posts?.[1] }}
      </div>
    </section>
  </main>
</template>
