import type { Meta, StoryObj } from '@storybook/vue3'
import { TOASTER_KEY } from '../../composable/useToaster/useToaster'
import ViToaster from './ViToaster.vue'

const meta: Meta<typeof ViToaster> = {
	title: 'Components/Toaster',
	component: ViToaster,
}
export default meta

type Story = StoryObj<typeof ViToaster>

export const Success: Story = {
	render: () => ({
		components: { ViToaster },
		template: '<ViToaster />',
		provide() {
			return {
				[TOASTER_KEY]: {
					toasts: [{ message: 'Success', type: 'success' }],
					removeToast: () => {},
				},
			}
		},
	}),
}

export const Error: Story = {
	render: () => ({
		components: { ViToaster },
		template: '<ViToaster />',
		provide() {
			return {
				[TOASTER_KEY]: {
					toasts: [{ message: 'Error', type: 'error' }],
					removeToast: () => {},
				},
			}
		},
	}),
}

export const Info: Story = {
	render: () => ({
		components: { ViToaster },
		template: '<ViToaster />',
		provide() {
			return {
				[TOASTER_KEY]: {
					toasts: [{ message: 'Info', type: 'info' }],
					removeToast: () => {},
				},
			}
		},
	}),
}
