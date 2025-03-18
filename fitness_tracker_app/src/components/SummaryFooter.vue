<script setup lang="ts">
import type { Post } from '@/models/user-posts'
import type { Summary } from '@/models/summary'
import { ref, defineProps } from 'vue'
import { currentUser } from './UserList.vue'

const noteVisable = ref(false)
const sharing = ref(false)

const props = defineProps<{ summary: Summary }>()

function sharePost() {
  if (currentUser?.value) {
    currentUser.value.posts.push({
      content: (document.getElementById('postContent') as HTMLInputElement).value,
      author: 'John Smith',
      summary: props.summary,
      date: new Date(),
    })
  }
  ;(document.getElementById('postContent') as HTMLInputElement).value = ''
}
</script>

<template>
  <div class="card-footer has-background-gray-darker">
    <a class="card-footer-item is-button" @click="noteVisable = !noteVisable">View Notes</a>
    <a class="card-footer-item is-button" @click="sharing = !sharing">Share</a>
  </div>
  <div class="card-footer has-background-gray-darker" v-if="noteVisable">
    <div class="card-content">
      <p class="subtitle is-5">
        {{ summary.note }}
      </p>
    </div>
  </div>
  <div class="card-footer has-background-gray-darker" v-if="sharing">
    <div class="container m-2">
      <label class="label">Post</label>
      <div class="container">
        <textarea
          class="textarea"
          placeholder="Tell us about your workout"
          id="postContent"
        ></textarea>
        <button class="button is-primary" @click="sharePost()">Submit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>
