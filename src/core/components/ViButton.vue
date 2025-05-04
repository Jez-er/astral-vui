<template>
	<button
		:class="[
			baseClasses,
			variantClasses[variant],
			disabled ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110',
		]"
		:disabled="disabled"
		@click="handleClick"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
const props = defineProps({
	variant: {
		type: String,
		default: 'primary',
	},
	disabled: {
		type: Boolean,
		default: false,
	},
})

const emit = defineEmits(['click'])

function handleClick(event: MouseEvent) {
	if (!props.disabled) emit('click', event)
}

const baseClasses = 'px-4 py-2 rounded-lg font-semibold transition duration-200'

const variantClasses: Record<string, string> = {
	primary: 'bg-blue-600 text-white',
	secondary: 'bg-gray-200 text-gray-800',
	danger: 'bg-red-600 text-white',
}
</script>
