<script setup lang="ts">
import type { User } from '@/models/user'
import { getAll } from '@/models/user'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { setCurrentUser } from '@/models/session'

const menuToggle = ref(false)
const users = ref<User[]>()

const fetchData = async () => {
  getAll().then((list) => {
    users.value = list;
  })
}

onMounted(fetchData)
</script>

<template>
  <section>
    <div class="dropdown is-active is-flex is-justify-content-center">
      <div class="dropdown-trigger">
        <button class="button is-large" @click="menuToggle = !menuToggle">
          <span>Users</span>
        </button>
      </div>
      <div class="dropdown-menu has-buttons are-large">
        <div
          class="dropdown-content is-align-content-center"
          v-for="user in users"
          v-show="menuToggle"
        >
          <div class="dropdown-item">
            <RouterLink
              :to="`/Home`"
              @click="setCurrentUser(user)"
              class="button is-capitalized has-text-centered"
              id="{{ user.userId }}"
            >
              {{ user.firstName + " " + user.lastName}}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
