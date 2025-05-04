<script setup lang="ts">
import { computed, ref } from 'vue'
import { ViIcons } from '.'
import type { IconName } from '../types/icons'

const props = defineProps<{
	modelValue?: string
	iconName?: IconName
	type?: 'text' | 'password' | 'email' | 'number'
	placeholder?: string
	class?: string
}>()

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

const isPasswordVisible = ref(false)
const inputType = computed(() =>
	props.type === 'password' && isPasswordVisible.value ? 'text' : props.type
)

const togglePasswordVisibility = () => {
	isPasswordVisible.value = !isPasswordVisible.value
}

const handleInput = (event: Event) => {
	const target = event.target as HTMLInputElement | null
	if (target) {
		emit('update:modelValue', target.value)
	}
}
</script>

<template>
	<div class="input-wrapper">
		<ViIcons
			v-if="props.iconName"
			:name="props.iconName"
			:size="18"
			class="input-icon"
		/>
		<input
			:value="modelValue"
			@input="handleInput"
			v-bind="$attrs"
			:type="inputType"
			:placeholder="props.placeholder"
			class="input-field"
		/>

		<button
			v-if="props.type === 'password'"
			@click="togglePasswordVisibility"
			type="button"
			class="toggle-button"
		>
			<ViIcons :name="isPasswordVisible ? 'EyeOff' : 'Eye'" :size="18" />
		</button>
	</div>
</template>

<style scoped>
.input-wrapper {
	display: flex;
	align-items: center;
	padding: 0.5rem;
	background-color: #171717; /* neutral-900 */
	border-radius: 0.5rem;
	gap: 0.5rem;
	width: 100%;
}

.input-icon {
	color: #9ca3af; /* gray-400 */
}

.input-field {
	background-color: transparent;
	outline: none;
	border: none;
	color: white;
	width: 100%;
	font-size: 0.875rem; /* text-sm */
}

.input-field::placeholder {
	color: #9ca3af;
	font-size: 0.875rem;
}

.input-field:-webkit-autofill {
	transition: background-color 9999s ease-in-out 0s,
		transparent 9999s ease-in-out 0s;
	-webkit-text-fill-color: #ffffff !important;
}

.toggle-button {
	margin-left: 0.5rem;
	color: #9ca3af; /* gray-400 */
	background: none;
	border: none;
	cursor: pointer;
	transition: color 0.2s ease;
}

.toggle-button:hover {
	color: white;
}
</style>
