import { api, post, remove } from "./session";

export interface Summary {
  id?: number;
  name: string;
  note: string;
  type: string;
  user_id: number;
}

export interface SummaryWeight extends Summary {
  sets: number;
  reps: number;
  weight: number;
}

export interface SummaryCardio extends Summary {
  time: number;
  distance: number;
}

export async function getOneSummary(id:number): Promise<Summary> {
  return api(`summaries/${id}`)
}

export async function getSummaryByUser(id:number): Promise<Summary[]> {
  return api(`summaries/search/${id}?`)
}

export async function PostSummary(summary:Summary) {
  return post('summaries', summary)
}

export async function deleteSummary(id: number){
  return remove(`summaries/${id}`)
}
