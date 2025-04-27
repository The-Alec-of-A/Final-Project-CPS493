<script setup lang="ts">
import { refNotification, removeNotification } from '@/models/notifs'

const notifications = refNotification()
</script>

<template>
  <div>
    <div
      v-for="(message, index) in notifications"
      :key="index"
      class="notification is-success is-light"
      :class="`is-${message.type}`"
    >
      <button class="delete" @click="removeNotification(index)"></button>
      {{ message.message }}
    </div>
  </div>
</template>

<style scoped></style>
