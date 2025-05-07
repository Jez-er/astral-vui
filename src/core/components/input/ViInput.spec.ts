import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ViInput from './ViInput.vue'

describe('ViInput.vue', () => {
	it('renders input with default type "text"', () => {
		const wrapper = mount(ViInput)
		const input = wrapper.find('input')
		expect(input.exists()).toBe(true)
		expect(input.attributes('type')).toBe('text')
	})

	it('accepts and binds v-model', async () => {
		const wrapper = mount(ViInput, {
			props: {
				modelValue: 'test value',
			},
		})
		const input = wrapper.find('input')
		expect(input.element.value).toBe('test value')

		await input.setValue('updated')
		const emitted = wrapper.emitted('update:modelValue')
		expect(emitted).toBeTruthy()
		expect(emitted![0]).toEqual(['updated'])
	})

	it('renders placeholder', () => {
		const wrapper = mount(ViInput, {
			props: { placeholder: 'Enter something' },
		})
		const input = wrapper.find('input')
		expect(input.attributes('placeholder')).toBe('Enter something')
	})

	it('shows icon when iconName is provided', () => {
		const wrapper = mount(ViInput, {
			props: { iconName: 'Search' },
		})
		const icon = wrapper.findComponent({ name: 'ViIcons' })
		expect(icon.exists()).toBe(true)
		expect(icon.props('name')).toBe('Search')
	})

	it('toggles password visibility when type is "password"', async () => {
		const wrapper = mount(ViInput, {
			props: {
				type: 'password',
			},
		})

		const toggleButton = wrapper.find('button')
		expect(toggleButton.exists()).toBe(true)

		expect(wrapper.find('input').attributes('type')).toBe('password')

		await toggleButton.trigger('click')
		expect(wrapper.find('input').attributes('type')).toBe('text')

		await toggleButton.trigger('click')
		expect(wrapper.find('input').attributes('type')).toBe('password')
	})

	it('does not show toggle button when type is not password', () => {
		const wrapper = mount(ViInput, {
			props: {
				type: 'email',
			},
		})
		const toggleButton = wrapper.find('button')
		expect(toggleButton.exists()).toBe(false)
	})
})
