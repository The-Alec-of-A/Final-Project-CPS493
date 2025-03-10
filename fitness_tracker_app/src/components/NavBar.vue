<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)
const isDropdownActive = ref(false)
const usernames = null
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
          aria-expanded="false"
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
          <a class="navbar-item" href="#statistics">
            <span class="icon">
              <i class="fas fa-chart-line"></i>
            </span>
            Statistics
          </a>
          <a class="navbar-item" href="#friends-activity">
            <span class="icon">
              <i class="fas fa-users"></i>
            </span>
            Friend's Activity
          </a>
          <a class="navbar-item" href="#people-search">
            <span class="icon">
              <i class="fas fa-search"></i>
            </span>
            People Search
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#admin">Admin</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="#admin">Users</a>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <RouterLink
              to="/sign-up"
              class="button"
              style="background: transparent; border: none; box-shadow: none; color: black"
            >
              Sign Up
            </RouterLink>
            <div class="dropdown" :class="{ 'is-active': isDropdownActive }">
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  @click="isDropdownActive = !isDropdownActive"
                >
                  <span>Login</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a v-for="username in usernames" :key="username" href="#" class="dropdown-item">
                    {{ username }}
                  </a>
                </div>
              </div>
            </div>
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

.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
