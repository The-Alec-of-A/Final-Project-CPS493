<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// Import distances from my_activity.vue
import { useStats } from '../models/userStats'

const {
  todayDistance,
  weekDistance,
  allTimeDistance,
  todayDuration,
  weekDuration,
  allTimeDuration,
  subtractStats, // Import the subtractStats method
} = useStats()

// Function to handle activity deletion
function handleActivityDeletion(deletedActivity: { duration: number; distance: number }) {
  subtractStats(deletedActivity.duration, deletedActivity.distance)
}
</script>

<template>
  <div class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <article class="panel">
            <div class="card has-shadow">
              <div class="card-content">
                <div class="content has-text-centered">
                  <p style="font-size: 18px">Today</p>
                  <div class="columns">
                    <div class="column">
                      <h3>
                        <span id="today-duration">{{ todayDuration }} min</span>
                      </h3>
                      <p>Duration</p>
                    </div>
                    <div class="column">
                      <h3>
                        <span id="today-distance">{{ todayDistance }} mi</span>
                      </h3>
                      <p>Distance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <article class="panel">
            <div class="card has-shadow">
              <div class="card-content">
                <div class="content has-text-centered">
                  <p style="font-size: 18px">This week</p>
                  <div class="columns">
                    <div class="column">
                      <h3>
                        <span id="week-duration">{{ weekDuration }} min</span>
                      </h3>
                      <p>Duration</p>
                    </div>
                    <div class="column">
                      <h3>
                        <span id="week-distance">{{ weekDistance }} mi</span>
                      </h3>
                      <p>Distance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <article class="panel">
            <div class="card has-shadow">
              <div class="card-content">
                <div class="content has-text-centered">
                  <p style="font-size: 18px">All time</p>
                  <div class="columns">
                    <div class="column">
                      <h3>
                        <span id="alltime-duration">{{ allTimeDuration }} min</span>
                      </h3>
                      <p>Duration</p>
                    </div>
                    <div class="column">
                      <h3>
                        <span id="alltime-distance">{{ allTimeDistance }} mi</span>
                      </h3>
                      <p>Distance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <button
        @click="handleActivityDeletion({ duration: 30, distance: 2 })"
        class="button is-danger"
      >
        Delete Activity
      </button>
    </div>
  </div>
</template>

<style scoped>
.card.has-shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
