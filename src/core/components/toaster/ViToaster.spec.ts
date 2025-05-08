import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { TOASTER_KEY } from '../../composable/useToaster/useToaster'
import type { Toast } from '../../types/toast'
import ViToaster from './ViToaster.vue'

describe('ViToaster.vue', () => {
	const createWrapper = (toasts: Toast[] = []): ReturnType<typeof mount> => {
		return mount(ViToaster, {
			global: {
				provide: {
					[TOASTER_KEY]: {
						toasts: ref(toasts),
						removeToast: vi.fn(),
					},
				},
			},
		})
	}

	it('renders all provided toasts', () => {
		const wrapper = createWrapper([
			{ id: 1, message: 'Toast 1', type: 'success' },
			{ id: 2, message: 'Toast 2', type: 'error' },
		])
		expect(wrapper.text()).toContain('Toast 1')
		expect(wrapper.text()).toContain('Toast 2')
	})

	it('renders correct messages', () => {
		const wrapper = createWrapper([
			{ id: 1, message: 'Success!', type: 'success' },
		])
		expect(wrapper.text()).toContain('Success!')
	})

	it('applies correct classes for success toast', () => {
		const wrapper = createWrapper([
			{ id: 1, message: 'Success!', type: 'success' },
		])
		expect(wrapper.find('.toast--success').exists()).toBe(true)
	})

	it('applies correct classes for error toast', () => {
		const wrapper = createWrapper([{ id: 2, message: 'Error!', type: 'error' }])
		expect(wrapper.find('.toast--error').exists()).toBe(true)
	})

	it('applies correct classes for info toast', () => {
		const wrapper = createWrapper([{ id: 3, message: 'Info!', type: 'info' }])
		expect(wrapper.find('.toast--info').exists()).toBe(true)
	})

	it('throws if toaster is not provided', () => {
		expect(() => mount(ViToaster)).toThrow('Toaster not provided')
	})
})
