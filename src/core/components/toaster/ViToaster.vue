<script setup lang="ts">
import { CircleCheckBig, CircleX, Info } from 'lucide-vue-next'
import { inject, type Ref } from 'vue'
import { TOASTER_KEY } from '../../composable/useToaster/useToaster'
import type { Toast, ToastType } from '../../types/toast'

const toaster = inject<{ toasts: Readonly<Ref<Toast[]>> }>(TOASTER_KEY)
if (!toaster) throw new Error('Toaster not provided')

const { toasts } = toaster

function toastClasses(type: ToastType) {
	switch (type) {
		case 'success':
			return 'toast--success'
		case 'error':
			return 'toast--error'
		case 'info':
		default:
			return 'toast--info'
	}
}

function toastIconClasses(type: ToastType) {
	switch (type) {
		case 'success':
			return 'icon--success'
		case 'error':
			return 'icon--error'
		case 'info':
		default:
			return 'icon--info'
	}
}
</script>

<template>
	<div class="toast-container">
		<transition-group name="fade" tag="div">
			<div
				v-for="toast in toasts"
				:key="toast.id"
				:class="['toast', toastClasses(toast.type)]"
			>
				<div :class="['icon', toastIconClasses(toast.type)]">
					<CircleCheckBig v-if="toast.type === 'success'" />
					<CircleX v-if="toast.type === 'error'" />
					<Info v-if="toast.type === 'info'" />
				</div>
				<div class="message">
					{{ toast.message }}
				</div>
			</div>
		</transition-group>
	</div>
</template>

<style scoped>
.toast-container {
	position: fixed;
	bottom: 1rem;
	right: 1.25rem;
	z-index: 9999999;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.toast {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 1rem 0.5rem 0.5rem;
	background-color: var(--vui-background);
	color: var(--vui-background-foreground);
	border-radius: 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	border: 2px solid;
	max-width: 20vw;
	margin-bottom: 0.5rem;
}

.toast--success {
	border-color: var(--vui-success);
}

.toast--error {
	border-color: var(--vui-destructive);
}

.toast--info {
	border-color: var(--vui-primary);
}

.icon {
	display: flex;
	align-items: center;
}

.icon--success {
	color: var(--vui-success);
}

.icon--error {
	color: var(--vui-destructive);
}

.icon--info {
	color: var(--vui-primary);
}

.message {
	overflow: hidden;
	word-break: break-word;
	white-space: pre-wrap;
}

/* Optional fade transition (you can define it as needed) */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
