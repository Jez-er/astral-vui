import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { createToaster } from './useToaster'

describe('createToaster', () => {
	it('adds multiple toasts and removes them correctly', async () => {
		vi.useFakeTimers()
		const toaster = createToaster()

		toaster.addToast('First', 'info', 2000)
		toaster.addToast('Second', 'error', 4000)
		expect(toaster.toasts.value.length).toBe(2)

		vi.advanceTimersByTime(2000)

		await nextTick()

		expect(toaster.toasts.value.length).toBe(1)
		expect(toaster.toasts.value[0].message).toBe('Second')

		vi.advanceTimersByTime(2000)

		await nextTick()

		expect(toaster.toasts.value.length).toBe(0)

		vi.useRealTimers()
	})
})
