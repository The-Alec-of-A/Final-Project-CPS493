import { ref } from 'vue'

const todayDistance = ref(0)
const weekDistance = ref(0)
const allTimeDistance = ref(0)

export function useStats() {
  function addDistance(distance: number) {
    todayDistance.value += distance
    weekDistance.value += distance
    allTimeDistance.value += distance
  }

  return {
    todayDistance,
    weekDistance,
    allTimeDistance,
    addDistance,
  }
}
