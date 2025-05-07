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
				'primary',
				'destructive',
				'success',
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
		variant: 'primary',
		as: 'button',
		onClick: action('button-click'),
	},
} satisfies Meta<typeof ViButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		default: 'Primary Button',
		variant: 'primary',
	},
}

export const Secondary: Story = {
	args: {
		default: 'Secondary Button',
		variant: 'secondary',
	},
}

export const Destructive: Story = {
	args: {
		default: 'Destructive Button',
		variant: 'destructive',
	},
}

export const Ghost: Story = {
	args: {
		default: 'Ghost Button',
		variant: 'ghost',
	},
}

export const Link: Story = {
	args: {
		default: 'Link Button',
		variant: 'link',
	},
}

export const Success: Story = {
	args: {
		default: 'Success Button',
		variant: 'success',
	},
}

export const Outline: Story = {
	args: {
		default: 'Outline Button',
		variant: 'outline',
	},
}
