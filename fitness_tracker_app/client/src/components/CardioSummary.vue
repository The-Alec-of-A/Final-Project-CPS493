<script setup lang="ts">
import { currentUser } from '@/models/session';
import {deleteSummary, type Summary, type SummaryCardio } from '@/models/summary'
const props = defineProps<{ data: Summary }>()

function remove(){
  deleteSummary(Number(props.data.id))
}
</script>

<template>
  <section class="section py-2">
    <div class="card has-background-grey-dark">
      <div class="card-header has-background-grey-darker">
        <p class="card-header-title">Cardio Summary</p>
        <button v-if="currentUser.user_id as number == props.data.user_id" class="delete is-right-aligned" @click="remove()"></button>
      </div>
      <div
        class="container has-text-centered is-title is-capitalized is-size-4 has-text-white has-text-weight-bold"
      >
        {{ (data as SummaryCardio).name }}
      </div>
      <div class="columns card-content">
        <div class="column">
          <div class="container" v-if="(data as SummaryCardio).distance">
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
          <div class="container" v-if="(data as SummaryCardio).distance">
            <h3 class="title is-3 has-text-centered">
              {{ ((data as SummaryCardio).time / (data as SummaryCardio).distance).toFixed(2) }}' / Mile
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
