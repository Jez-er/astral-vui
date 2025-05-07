import type { Meta, StoryObj } from '@storybook/vue3'
import ViInput from './ViInput.vue'

const meta = {
	title: 'Components/Input',
	component: ViInput,
	tags: ['autodocs'],
	argTypes: {
		iconName: {
			control: { type: 'select' },
			options: ['none', 'Search', 'User', 'Lock', 'Email', 'Phone'],
		},
		type: {
			control: { type: 'select' },
			options: ['text', 'password', 'email', 'number'],
		},
	},
} satisfies Meta<typeof ViInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
