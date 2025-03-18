<script setup lang="ts">
import type { User } from '@/models/user.ts'
import { getAll, getOne } from '@/models/user.ts'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuToggle = ref(false)
</script>

<script lang="ts">
export const currentUser = ref<User>()

function setCurrentUser(id: number) {
  currentUser.value = getOne(id)
}
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
          v-for="user in getAll().users"
          v-show="menuToggle"
        >
          <div class="dropdown-item">
            <RouterLink
              to="/main"
              @click="setCurrentUser(user.userId)"
              class="button is-capitalized has-text-centered"
              id="{{ user.userId }}"
            >
              {{ user.userName }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
