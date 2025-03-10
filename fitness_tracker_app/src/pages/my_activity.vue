<script setup lang="ts">
import { ref } from 'vue'

const todayDistance = ref(0)
const todayDuration = ref('0:0')
const todayPace = ref('NaN mph')
const todayCalories = ref(0)

const weekDistance = ref(0)
const weekDuration = ref('0:0')
const weekPace = ref('NaN mph')
const weekCalories = ref(0)

const allTimeDistance = ref(0)
const allTimeDuration = ref('0:0')
const allTimePace = ref('NaN mph')
const allTimeCalories = ref(0)
</script>

<template>
  <div class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <article class="panel">
            <div class="card">
              <div class="card-content">
                <div class="content has-text-centered">
                  <p style="font-size: 18px">Today</p>
                  <p>
                    <span id="today-distance">{{ todayDistance }} mi</span> |
                    <span id="today-duration">{{ todayDuration }}</span>
                  </p>
                  <p>Distance | Duration</p>
                  <p>
                    <span id="today-pace">{{ todayPace }}</span> |
                    <span id="today-calories">{{ todayCalories }}</span>
                  </p>
                  <p>Avg Pace | Calories</p>
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
            <div class="card">
              <div class="card-content">
                <div class="content has-text-centered">
                  <p style="font-size: 18px">This week</p>
                  <p>
                    <span id="week-distance">{{ weekDistance }} mi</span> |
                    <span id="week-duration">{{ weekDuration }}</span>
                  </p>
                  <p>Distance | Duration</p>
                  <p>
                    <span id="week-pace">{{ weekPace }}</span> |
                    <span id="week-calories">{{ weekCalories }}</span>
                  </p>
                  <p>Avg Pace | Calories</p>
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
            <div class="card">
              <div class="card-content">
                <div class="content has-text-centered">
                  <p style="font-size: 18px">All time</p>
                  <p>
                    <span id="alltime-distance">{{ allTimeDistance }} mi</span> |
                    <span id="alltime-duration">{{ allTimeDuration }}</span>
                  </p>
                  <p>Distance | Duration</p>
                  <p>
                    <span id="alltime-pace">{{ allTimePace }}</span> |
                    <span id="alltime-calories">{{ allTimeCalories }}</span>
                  </p>
                  <p>Avg Pace | Calories</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
