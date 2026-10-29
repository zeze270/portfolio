import { reactive } from 'vue'

interface Toast {
  id: number
  msg: string
}

export const toasts = reactive<Toast[]>([])
let seq = 0

export function toast(msg: string) {
  const id = ++seq
  toasts.push({ id, msg })
  setTimeout(() => {
    const i = toasts.findIndex(t => t.id === id)
    if (i >= 0) toasts.splice(i, 1)
  }, 1800)
}
