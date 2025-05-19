import { ref } from 'vue'

const todayDistance = ref(0)
const weekDistance = ref(0)
const allTimeDistance = ref(0)
const todayDuration = ref(0)
const weekDuration = ref(0)
const allTimeDuration = ref(0)

export function useStats() {
  function addDistance(distance: number) {
    todayDistance.value += distance
    weekDistance.value += distance
    allTimeDistance.value += distance
  }
  function addTime(duration: number) {
    todayDuration.value += duration
    weekDuration.value += duration
    allTimeDuration.value += duration
  }

  function subtractStats(duration: number, distance: number) {
    todayDistance.value -= distance
    weekDistance.value -= distance
    allTimeDistance.value -= distance
    todayDuration.value -= duration
    weekDuration.value -= duration
    allTimeDuration.value -= duration
  }

  return {
    todayDistance,
    weekDistance,
    allTimeDistance,
    addDistance,
    todayDuration,
    weekDuration,
    allTimeDuration,
    addTime,
    subtractStats,
  }
}
