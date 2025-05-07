<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { ViIcons } from '..'
import type { IconName } from '../../types/icons'
import { useVModel } from '../../utils/useVModel'

const props = withDefaults(
	defineProps<{
		modelValue?: string
		iconName?: IconName
		type?: 'text' | 'password' | 'email' | 'number'
		placeholder?: string
		class?: string
	}>(),
	{
		type: 'text',
	}
)

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

const modelValue = useVModel(props, 'modelValue', emit, {
	passive: false,
	defaultValue: '',
})

const isPasswordVisible = ref(false)

const inputType = computed(() =>
	props.type === 'password' && isPasswordVisible.value ? 'text' : props.type
)

const togglePasswordVisibility = () => {
	isPasswordVisible.value = !isPasswordVisible.value
}

const inputValue = ref(modelValue.value)

watch(inputValue, newValue => {
	modelValue.value = newValue
})
</script>

<template>
	<div class="input-wrapper">
		<ViIcons
			v-if="props.iconName"
			:name="props.iconName"
			:size="18"
			:strokeWidth="2"
			class="input-icon"
		/>
		<input
			v-model="inputValue"
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
			<ViIcons
				:strokeWidth="2"
				:name="isPasswordVisible ? 'EyeOff' : 'Eye'"
				:size="18"
			/>
		</button>
	</div>
</template>

<style scoped>
.input-wrapper {
	display: flex;
	align-items: center;
	padding: 0.5rem;
	background-color: var(--vui-background);
	border-radius: 0.5rem;
	gap: 0.5rem;
	width: 100%;
}

.input-icon {
	color: var(--vui-background-foreground);
}

.input-field {
	background-color: transparent;
	outline: none;
	border: none;
	color: white;
	width: 100%;
	font-size: 0.875rem;
}

.input-field:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.input-field::placeholder {
	color: var(--vui-secondary);
	opacity: 0.5;
	font-size: 0.875rem;
}

.input-field:-webkit-autofill {
	transition: background-color 9999s ease-in-out 0s,
		transparent 9999s ease-in-out 0s;
	-webkit-text-fill-color: #ffffff !important;
}

.toggle-button {
	margin-left: 0.5rem;
	color: var(--vui-background-foreground);
	opacity: 0.8;
	background: none;
	border: none;
	cursor: pointer;
	transition: all 0.4s ease;
}

.toggle-button:hover {
	opacity: 1;
}
</style>
