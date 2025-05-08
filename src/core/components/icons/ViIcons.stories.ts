import type { Meta, StoryObj } from '@storybook/vue3'
import ViIcons from './ViIcons.vue'

const meta = {
	title: 'Components/Icons',
	component: ViIcons,
	tags: ['autodocs'],
	argTypes: {
		name: {
			control: { type: 'select' },
			options: ['Search', 'User', 'Lock', 'Email', 'Phone'],
		},
		size: {
			control: { type: 'select' },
			options: [16, 36, 64, 128],
		},
		strokeWidth: {
			control: { type: 'select' },
			options: [1, 2, 3, 4, 5],
		},
	},
} satisfies Meta<typeof ViIcons>

export default meta
type Story = StoryObj<typeof meta>

export const Search: Story = {
	args: {
		name: 'Search',
	},
}
