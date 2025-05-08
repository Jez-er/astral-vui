import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ViIcons from './ViIcons.vue'

vi.mock('lucide-vue-next', () => {
	const MockArrowRight = {
		name: 'MockedArrowRightIcon',
		props: ['size', 'color', 'strokeWidth', 'defaultClass'],
		template: '<div :class="defaultClass">MockedArrowRightIcon</div>',
	}

	return {
		...vi.importActual('lucide-vue-next'),
		ArrowRight: MockArrowRight,
		'non-existent-icon': undefined,
	}
})

describe('IconComponent', () => {
	it('renders the correct icon based on the "name" prop', () => {
		const wrapper = mount(ViIcons, {
			props: {
				name: 'ArrowRight',
			},
		})

		expect(wrapper.text()).toContain('MockedArrowRightIcon')
	})

	it('passes size, color, strokeWidth, and defaultClass to the icon', async () => {
		const wrapper = mount(ViIcons, {
			props: {
				name: 'ArrowRight',
				size: 24,
				color: 'red',
				strokeWidth: 2,
				defaultClass: 'icon-class',
			},
		})

		const icon = wrapper.findComponent({ name: 'MockedArrowRightIcon' })

		expect(icon.exists()).toBe(true)

		expect(icon.props().size).toBe(24)
		expect(icon.props().color).toBe('red')
		expect(icon.props().strokeWidth).toBe(2)
		expect(icon.classes()).toContain('icon-class')
	})

	it('renders nothing if the icon name is invalid', () => {
		const wrapper = mount(ViIcons, {
			props: {
				name: 'non-existent-icon',
			},
		})

		expect(wrapper.text()).toBe('')
	})
})
