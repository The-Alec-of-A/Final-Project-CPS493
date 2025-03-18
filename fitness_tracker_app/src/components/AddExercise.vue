<script setup lang="ts">
import { ref } from 'vue'
import { currentUser } from './UserList.vue'

const current = ref('weight')

function showCardio() {
  const weight = document.getElementById('weight')
  const cardio = document.getElementById('cardio')
  if (weight) {
    weight.classList.add('is-hidden')
    current.value = 'cardio'
  }
  if (cardio) {
    cardio.classList.remove('is-hidden')
  }
}

function showWeight() {
  const weight = document.getElementById('weight')
  const cardio = document.getElementById('cardio')
  if (weight) {
    weight.classList.remove('is-hidden')
  }
  if (cardio) {
    cardio.classList.add('is-hidden')
    current.value = 'weight'
  }
}

const showInputs = ref(false)
</script>

<template>
  <div class="box mr-0 has-background-grey-darker">
    <h1 class="title is-4">
      Add an Exercise
      <a role="button" class="button is-primary" @click="showInputs = !showInputs">
        <span class="icon is-small">
          <i class="fa-solid fa-arrows-up-down"></i>
        </span>
      </a>
    </h1>

    <div class="columns" :class="{ 'is-hidden': !showInputs }">
      <div class="column">
        <div class="tabs">
          <ul>
            <li @click="showWeight" :class="{ 'is-active': current == 'weight' }"><a>Weight</a></li>
            <li @click="showCardio" :class="{ 'is-active': current == 'cardio' }"><a>Cardio</a></li>
          </ul>
        </div>
        <div id="weight" class="tab-content">
          <div class="field">
            <label class="label">Exercise Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Exercise Name" id="weightName" />
            </div>
          </div>
          <div class="field">
            <label class="label">Weight</label>
            <div class="control is-flex">
              <input class="input" type="number" placeholder="Weight" id="pounds" />
              <span class="has-text-right pt-2">lbs</span>
            </div>
          </div>
          <div class="container is-flex">
            <div class="field">
              <label class="label">Sets</label>
              <div class="control is-flex">
                <input class="input" type="number" placeholder="Sets" id="sets" />
              </div>
            </div>
            <div class="field">
              <label class="label">Reps</label>
              <div class="control is-flex">
                <input class="input" type="number" placeholder="Reps" id="reps" />
              </div>
            </div>

            <div class="field">
              <label class="label">Notes</label>
              <div class="control">
                <textarea class="textarea" placeholder="Notes" id="weightNote"></textarea>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-primary" @click="createSummaryWeight()">Save</button>
              </div>
            </div>
          </div>

          <div class="is-hidden tab-content" id="cardio">
            <div class="field">
              <label class="label">Exercise Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Exercise Name" id="cardioName" />
              </div>
            </div>
            <div class="field">
              <label class="label">Distance</label>
              <div class="control">
                <div class="is-flex is-align-items-center">
                  <input class="input" type="number" placeholder="Distance" id="distance" />
                  <input class="input" type="number" placeholder="Distance" id="distance" />
                  <span class="has-text-right">Miles</span>
                </div>
              </div>
              <div class="field">
                <label class="label">Time</label>
                <div class="control is-flex is-align-items-center">
                  <input class="input" type="number" placeholder="Hours" id="hour" />
                  <input class="input" type="number" placeholder="Minutes" id="minute" />
                </div>
              </div>
              <div class="field">
                <label class="label">Notes</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Notes" id="cardioNote"></textarea>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-primary" @click="createSummaryCardio()">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
function clearContent() {
  for (const element of document.querySelectorAll('input, textarea')) {
    ;(element as HTMLInputElement).value = ''
  }
}

function createSummaryWeight() {
  const weightName = document.getElementById('weightName') as HTMLInputElement
  const pounds = document.getElementById('pounds') as HTMLInputElement
  const sets = document.getElementById('sets') as HTMLInputElement
  const reps = document.getElementById('reps') as HTMLInputElement
  const notes = document.getElementById('weightNote') as HTMLInputElement

  if (weightName && sets && reps && pounds && notes) {
    const summary = {
      name: weightName.value as string,
      sets: Number(sets.value),
      reps: Number(reps.value),
      weight: Number(pounds.value),
      note: notes.value,
      type: 'weight',
    }
    currentUser.value?.summaries.push(summary)
    clearContent()
  }
}

function createSummaryCardio() {
  const cardioName = document.getElementById('cardioName') as HTMLInputElement
  const distance = document.getElementById('distance') as HTMLInputElement
  const time = [
    document.getElementById('hour') as HTMLInputElement,
    document.getElementById('minute') as HTMLInputElement,
  ]
  const notes = document.getElementById('cardioNote') as HTMLInputElement

  if (cardioName && distance && time && notes) {
    const summary = {
      name: cardioName.value,
      time: Number(time[0].value) * 60 + Number(time[1].value),
      distance: Number(distance.value),
      note: notes.value,
    }
    currentUser.value?.summaries.push(summary)
    clearContent()
  }
}
</script>
<style scoped></style>
