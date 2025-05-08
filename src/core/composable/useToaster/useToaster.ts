import { inject, readonly, ref, type Ref } from 'vue'
import type { Toast, ToastType } from '../../types/toast'

export const TOASTER_KEY = Symbol('toaster')

export function createToaster() {
	const toasts = ref<Toast[]>([])

	function addToast(
		message: string,
		type: ToastType = 'info',
		duration = 3000
	) {
		const id = Date.now()
		toasts.value.push({ id, message, type })

		setTimeout(() => {
			const index = toasts.value.findIndex(t => t.id === id)
			if (index !== -1) {
				toasts.value = [
					...toasts.value.slice(0, index),
					...toasts.value.slice(index + 1),
				]
			}
		}, duration)
	}

	return {
		toasts: readonly(toasts),
		addToast,
	}
}

export function useToaster() {
	const toaster = inject<{
		toasts: Readonly<Ref<Toast[]>>
		addToast: (message: string, type: ToastType, duration?: number) => void
	}>(TOASTER_KEY)
	if (!toaster) throw new Error('Toaster not provided')
	return toaster
}
