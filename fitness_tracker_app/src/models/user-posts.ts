import type { Summary } from './summary'

export interface Post {
  content: string
  author: string
  summary: Summary
  date: string
}
