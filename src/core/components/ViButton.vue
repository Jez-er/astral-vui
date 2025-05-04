<template>
	<button
		class="btn"
		:class="[variant, { disabled }]"
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
</script>

<style scoped>
.btn {
	border-radius: 0.5rem;
	font-weight: 600;
	transition: filter 0.2s ease, opacity 0.2s ease;
	cursor: pointer;
}

.btn:not(.disabled):hover {
	filter: brightness(1.1);
}

.btn.disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.btn.primary {
	background-color: #2563eb;
	color: white;
}

.btn.secondary {
	background-color: #e5e7eb;
	color: #1f2937;
}

.btn.danger {
	background-color: #dc2626;
}
</style>
