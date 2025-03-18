<script setup lang="ts">
import type { Summary, SummaryWeight } from '@/models/summary'

const props = defineProps<{
  data: Summary
}>()
</script>

<template>
  <section class="section py-2">
    <div class="card has-background-grey-dark">
      <div class="card-header has-background-grey-darker">
        <p class="card-header-title">Exercise Summary</p>
      </div>
      <div
        class="container has-text-centered is-title is-capitalized is-size-4 has-text-white has-text-weight-bold"
      >
        {{ (data as SummaryWeight).name }}
      </div>
      <div class="columns card-content">
        <div class="column">
          <div class="container">
            <h3 class="title is-4 has-text-centered">
              {{ (data as SummaryWeight).reps }} Reps X <br />
              {{ (data as SummaryWeight).sets }} Sets
            </h3>
            <p class="subtitle is-5 has-text-centered">Work Done</p>
          </div>
        </div>
        <div class="column">
          <div class="container">
            <h3 class="title is-3 has-text-centered">{{ (data as SummaryWeight).weight }} lbs</h3>
            <p class="subtitle is-5 has-text-centered">Weight</p>
          </div>
        </div>
        <div class="column">
          <div class="container">
            <h3 class="title is-3 has-text-centered">
              {{
                (data as SummaryWeight).reps *
                (data as SummaryWeight).sets *
                (data as SummaryWeight).weight
              }}
              lbs
            </h3>
            <p class="subtitle is-5 has-text-centered">Total Weight</p>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<style scoped></style>
