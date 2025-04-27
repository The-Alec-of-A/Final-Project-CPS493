import { ref } from 'vue'

export interface Notification {
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

const notifications = ref<Notification[]>([])

export const refNotification = () => notifications

export function addNotification(notification: Notification) {
  notifications.value.push(notification)
}

export function removeNotification(index: number) {
  notifications.value.splice(index, 1)
}
