<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { OAutocomplete } from '@oruga-ui/oruga-next'
import  { fetchUsers } from '@/models/typeahead'

const usernames = ref(['John Smith', 'Jane Doe', 'Alec Arza'])
const isDropdownActive = ref(false)
const isActive = ref(false)
const selectedUsername = ref('')
const searchQuery = ref('')
const options = ref<string[]>([])

// Method to handle username selection
const selectUsername = (username: string) => {
  selectedUsername.value = username
  isDropdownActive.value = false
}

// Method to handle logging out
const logout = () => {
  selectedUsername.value = ''
}

// Close dropdown when clicking outside
const closeDropdown = (event: Event) => {
  const dropdown = document.querySelector('.dropdown')
  if (dropdown && !dropdown.contains(event.target as Node)) {
    isDropdownActive.value = false
  }
}

onMounted(async () => {
  document.addEventListener('click', closeDropdown)
  const users = await fetchUsers()
  options.value = Array.isArray(users) ? users : []
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <RouterLink class="navbar-item" to="/">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" />
        </RouterLink>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          :aria-expanded="isActive ? 'true' : 'false'"
          :class="{ 'is-active': isActive }"
          @click="isActive = !isActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <RouterLink to="/my_activity" class="navbar-item">
            <span class="icon">
              <i class="fas fa-running"></i>
            </span>
            My Activity
          </RouterLink>
          <RouterLink to="/stats" class="navbar-item">
            <span class="icon">
              <i class="fas fa-chart-line"></i>
            </span>
            Statistics
          </RouterLink>
          <a class="navbar-item" href="#friends-activity">
            <span class="icon">
              <i class="fas fa-users"></i>
            </span>
            Friend's Activity
          </a>
          <RouterLink to="/search" class="navbar-item">
            <span class="icon">
              <i class="fas fa-search"></i>
            </span>
            People Search
          </RouterLink>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#admin">Admin</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="#admin">Users</a>
            </div>
          </div>
        </div>

        <div class="navbar-end" style="display: flex; align-items: center">
          <div class="field is-grouped">
            <span v-if="selectedUsername" class="selected-username">
              {{ selectedUsername }}
            </span>
            <RouterLink
              to="/sign-up"
              class="button"
              style="background: transparent; border: none; box-shadow: none; color: black"
            >
              Sign Up
            </RouterLink>
            <div
              class="dropdown"
              :class="{ 'is-active': isDropdownActive }"
              v-if="!selectedUsername"
            >
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  @click="isDropdownActive = !isDropdownActive"
                >
                  <span>Log in</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a
                    v-for="username in usernames"
                    :key="username"
                    href="#"
                    class="dropdown-item"
                    @click="selectUsername(username)"
                  >
                    {{ username }}
                  </a>
                </div>
              </div>
            </div>
            <button
              v-if="selectedUsername"
              class="button"
              @click="logout"
              style="background: transparent; border: none; box-shadow: none; color: black"
            >
              Log Out
            </button>
            <p class="control">
              <a
                class="bd-tw-button button"
                data-social-network="Twitter"
                data-social-action="tweet"
                data-social-target="https://bulma.io"
                target="_blank"
                href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
              >
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                <span> Tweet </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown.is-active .dropdown-content {
  display: block;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-weight: normal;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.button:hover {
  outline: 2px solid darkblue;
}

.navbar-item span {
  display: flex;
  align-items: center;
  height: 100%;
}

.selected-username {
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  height: 100%;
}

.profile-picture {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
