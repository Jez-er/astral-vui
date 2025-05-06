<script setup lang="ts">
interface Props {
	variant?:
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| 'link'
	size?: 'default' | 'sm' | 'lg' | 'icon'
	as?: string
}

defineEmits<{
	(e: 'click', event: MouseEvent): void
}>()

withDefaults(defineProps<Props>(), {
	variant: 'default',
	size: 'default',
	as: 'button',
})
</script>

<template>
	<component
		:is="as"
		:class="['btn', `btn--${variant}`, `btn--${size}`]"
		v-bind="$attrs"
	>
		<slot />
	</component>
</template>

<style scoped>
.btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.375rem;
	font-size: 0.875rem;
	font-weight: 500;
	transition: background-color 0.2s;
	outline: none;
	ring-offset: var(--ring-offset-background);
}

.btn:focus-visible {
	outline: 2px solid var(--ring);
	outline-offset: 2px;
}

.btn:disabled {
	pointer-events: none;
	opacity: 0.5;
}

/* Variants */
.btn--default {
	background-color: var(--primary);
	color: var(--primary-foreground);
}

.btn--default:hover {
	background-color: rgba(var(--primary-rgb), 0.9);
}

.btn--destructive {
	background-color: var(--destructive);
	color: var(--destructive-foreground);
}

.btn--destructive:hover {
	background-color: rgba(var(--destructive-rgb), 0.9);
}

.btn--outline {
	background-color: var(--background);
	border: 1px solid var(--input);
	color: inherit;
}

.btn--outline:hover {
	background-color: var(--accent);
	color: var(--accent-foreground);
}

.btn--secondary {
	background-color: var(--secondary);
	color: var(--secondary-foreground);
}

.btn--secondary:hover {
	background-color: rgba(var(--secondary-rgb), 0.8);
}

.btn--ghost:hover {
	background-color: var(--accent);
	color: var(--accent-foreground);
}

.btn--link {
	color: var(--primary);
	text-underline-offset: 4px;
}

.btn--link:hover {
	text-decoration: underline;
}

/* Sizes */
.btn--default {
	height: 2.5rem;
	padding: 0.5rem 1rem;
}

.btn--sm {
	height: 2.25rem;
	padding: 0 0.75rem;
	border-radius: 0.375rem;
}

.btn--lg {
	height: 2.75rem;
	padding: 0 2rem;
	border-radius: 0.375rem;
}

.btn--icon {
	height: 2.5rem;
	width: 2.5rem;
	padding: 0;
}
</style>
