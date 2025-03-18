<script setup lang="ts">
import type { Summary, SummaryCardio } from '@/models/summary'

const props = defineProps<{ data: Summary }>()
</script>

<template>
  <section class="section py-2">
    <div class="card has-background-grey-dark">
      <div class="card-header has-background-grey-darker">
        <p class="card-header-title">Cardio Summary</p>
      </div>
      <div
        class="container has-text-centered is-title is-capitalized is-size-4 has-text-white has-text-weight-bold"
      >
        {{ (data as SummaryCardio).name }}
      </div>
      <div class="columns card-content">
        <div class="column">
          <div class="container">
            <h3 class="title is-3 has-text-centered">
              {{ (data as SummaryCardio).distance }} Miles
            </h3>
            <p class="subtitle is-5 has-text-centered">Total Distance</p>
          </div>
        </div>
        <div class="column">
          <div class="container">
            <h3 class="title is-3 has-text-centered">
              {{ (data as SummaryCardio).time }} minute(s)
            </h3>
            <p class="subtitle is-5 has-text-centered">Total Time</p>
          </div>
        </div>
        <div class="column">
          <div class="container">
            <h3 class="title is-3 has-text-centered">
              {{ (data as SummaryCardio).time / (data as SummaryCardio).distance }}/ Mile
            </h3>
            <p class="subtitle is-5 has-text-centered">Average Pace</p>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<style scoped></style>
