<script setup lang="ts">
import type { Post } from '@/models/userPosts'
import CardioSummary from './CardioSummary.vue'
import WeightSummary from './WeightSummary.vue';
import { getOne, type User } from '@/models/user';
import { getOneSummary, type Summary } from '@/models/summary';
import { ref, watch, type Ref } from 'vue';

const props = defineProps<{ post: Post }>()
const postUser = ref<User>();
const summary = ref<Summary>()
const loaded = ref(false)

setup(props.post)

watch(() => props.post,(newPost) => {
      setup(newPost)
    }
 );
  function setup(post: Post) {
    getOne(post.user_Id).then((user) => {postUser.value = user})
    getSummary(summary, post.summary_Id).then(() => loaded.value = true)
  }
</script>

<script lang="ts">
async function getSummary(summary: Ref<Summary | undefined, Summary | undefined> ,id: number){
  summary.value = await getOneSummary(id)
}
</script>

<template>
  <div class="card has-background-grey-darker mx-0" v-if="loaded && postUser">
    <div class="card-content mx-0 px-0">
      <div v-if="summary" class="container px-0 mx-0">
        <WeightSummary v-if="summary?.type === 'weight'" :data="summary">
        </WeightSummary>
        <CardioSummary v-else :data="summary"> </CardioSummary>
      </div>
    </div>
    <div class="card-content">
      <div class="media">
        <p class="title is-3">{{ postUser.firstName + " " + postUser.lastName }}</p>
      </div>
      <div class="content">
        <p class="title is-5">{{ post.content }}</p>
        <p class="is-size-7">Posted on:{{ post.date }}</p>
        {{}}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
