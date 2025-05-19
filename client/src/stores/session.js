import { writable } from 'svelte/store'

function createSessionStore() {
  const { subscribe, set, update } = writable({
    isAuthenticated: false,
    user: null,
    role: 'guest', // default role
    token: null,
  })

  return {
    subscribe,
    setSession: (userData) => {
      set({
        isAuthenticated: true,
        user: userData,
        role: userData.role || 'user',
        token: userData.token,
      })
    },
    clearSession: () => {
      set({
        isAuthenticated: false,
        user: null,
        role: 'guest',
        token: null,
      })
    },
    updateRole: (newRole) => {
      update((session) => ({
        ...session,
        role: newRole,
      }))
    },
    hasRole: (role) => {
      let currentSession
      subscribe((session) => {
        currentSession = session
      })()
      return currentSession.role === role
    },
  }
}

export const session = createSessionStore()
