import { ref } from 'vue'
import * as myFetch from  './myFetch'
import type { User } from './users'

export function api<T>(action: string): Promise<T> {
  return myFetch.api<T>(action)
}

const session = ref({
  user: null as User | null,
  token: null as string | null,
})

export function refSession() {
  return session
}

export const isAdmin = () => session.value?.user?.role === 'admin'
//export const isL

return
