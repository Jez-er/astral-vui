import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ViButton from './ViButton.vue'

describe('Button.vue', () => {
	it('renders slot content', () => {
		const wrapper = mount(ViButton, {
			slots: {
				default: 'Click me',
			},
		})
		expect(wrapper.text()).toContain('Click me')
	})

	it('has default classes for primary and default size', () => {
		const wrapper = mount(ViButton)
		const el = wrapper.get('button')
		expect(el.classes()).toContain('btn')
		expect(el.classes()).toContain('btn--primary')
		expect(el.classes()).toContain('btn--default')
	})

	it('renders with different variants', () => {
		const variants = [
			'primary',
			'destructive',
			'success',
			'outline',
			'secondary',
			'ghost',
			'link',
		] as const

		for (const variant of variants) {
			const wrapper = mount(ViButton, {
				props: { variant },
			})
			expect(wrapper.classes()).toContain(`btn--${variant}`)
		}
	})

	it('renders with different sizes', () => {
		const sizes = ['default', 'sm', 'lg', 'icon'] as const

		for (const size of sizes) {
			const wrapper = mount(ViButton, {
				props: { size },
			})
			expect(wrapper.classes()).toContain(`btn--${size}`)
		}
	})

	it('emits click event', async () => {
		const wrapper = mount(ViButton)
		await wrapper.trigger('click')
		expect(wrapper.emitted('click')).toBeTruthy()
		expect(wrapper.emitted('click')![0]).toHaveLength(1)
	})

	it('can render as another element via "as" prop', () => {
		const wrapper = mount(ViButton, {
			props: {
				as: 'a',
			},
			attrs: {
				href: '#',
			},
		})
		expect(wrapper.element.tagName).toBe('A')
	})
})
