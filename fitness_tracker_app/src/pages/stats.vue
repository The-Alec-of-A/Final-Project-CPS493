<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// Import distances from my_activity.vue
import { useStats } from '../models/useStats'

const { todayDistance, weekDistance, allTimeDistance } = useStats()
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
                  <h3>
                    <span id="today-distance">{{ todayDistance }} mi</span>
                  </h3>
                  <h3>Distance</h3>
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
                  <h3>
                    <span id="week-distance">{{ weekDistance }} mi</span>
                  </h3>
                  <h3>Distance</h3>
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
                  <h3>
                    <span id="alltime-distance">{{ allTimeDistance }} mi</span>
                  </h3>
                  <h3>Distance</h3>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card.has-shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
