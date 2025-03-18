export interface Summary {
  name: string
  note: string
  type: string
}

export interface SummaryWeight extends Summary {
  sets: number
  reps: number
  weight: number
}

export interface SummaryCardio extends Summary {
  time: number
  distance: number
}
