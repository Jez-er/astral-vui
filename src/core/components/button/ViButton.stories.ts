import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/vue3'
import ViButton from './ViButton.vue'

const meta = {
	title: 'Components/Button',
	component: ViButton,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'icon'],
		},
		variant: {
			control: 'select',
			options: [
				'default',
				'destructive',
				'outline',
				'secondary',
				'ghost',
				'link',
			],
		},
		onClick: { action: 'clicked' },
	},
	args: {
		size: 'default',
		variant: 'default',
		as: 'button',
		onClick: action('button-click'),
	},
} satisfies Meta<typeof ViButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		// Текст кнопки через default slot
		default: 'Primary Button',
	},
}
