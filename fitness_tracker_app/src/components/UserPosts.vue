<script setup lang="ts">
import type { Post } from '@/models/user-posts'

const props = defineProps<{ post: Post }>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const summary = props.post.summary
</script>

<template>
  <div class="card has-background-grey-darker mx-0">
    <div class="card-content mx-0 px-0">
      <div class="container px-0 mx-0">
        <slot></slot>
      </div>
    </div>
    <div class="card-content">
      <div class="media">
        <p class="title is-3">{{ post.author }}</p>
      </div>
      <div class="content">
        <p class="title is-5">{{ post.content }}</p>
        <p class="is-size-7">Posted on:{{ new Date(post.date) }}</p>
        {{}}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
