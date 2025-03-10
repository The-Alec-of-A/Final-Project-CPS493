<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)
</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://vitejs.dev/">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" />
        </a>

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
          <RouterLink to="/my-activity" class="navbar-item">
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

<style scoped></style>
