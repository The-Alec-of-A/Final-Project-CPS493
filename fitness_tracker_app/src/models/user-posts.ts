import { ref } from 'vue'
import type { Summary, SummaryWeight } from './summary'

export interface Post {
  content: string
  author: string
  summary: Summary
  date: string
}
