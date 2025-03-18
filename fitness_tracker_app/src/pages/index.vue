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
            <div class="card has-shadow">
              <div class="card-content">
                <div class="content has-text-centered">
                  <p style="font-size: 18px">Today</p>
                  <h3>
                    <span id="today-distance">{{ todayDistance }} mi</span>
                    <span id="today-duration" style="margin-left: 40px">{{ todayDuration }}</span>
                  </h3>
                  <h3>Distance <span style="margin-left: 40px">Duration</span></h3>
                  <h3>
                    <span id="today-pace">{{ todayPace }}</span>
                    <span id="today-calories" style="margin-left: 40px">{{ todayCalories }}</span>
                  </h3>
                  <h3>Avg Pace <span style="margin-left: 40px">Calories</span></h3>
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
                    <span id="week-duration" style="margin-left: 40px">{{ weekDuration }}</span>
                  </h3>
                  <h3>Distance <span style="margin-left: 40px">Duration</span></h3>
                  <h3>
                    <span id="week-pace">{{ weekPace }}</span>
                    <span id="week-calories" style="margin-left: 40px">{{ weekCalories }}</span>
                  </h3>
                  <h3>Avg Pace <span style="margin-left: 40px">Calories</span></h3>
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
                    <span id="alltime-duration" style="margin-left: 40px">{{
                      allTimeDuration
                    }}</span>
                  </h3>
                  <h3>Distance <span style="margin-left: 40px">Duration</span></h3>
                  <h3>
                    <span id="alltime-pace">{{ allTimePace }}</span>
                    <span id="alltime-calories" style="margin-left: 40px">{{
                      allTimeCalories
                    }}</span>
                  </h3>
                  <h3>Avg Pace <span style="margin-left: 40px">Calories</span></h3>
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
