<script setup lang="ts">
interface Props {
	variant?:
		| 'primary'
		| 'destructive'
		| 'success'
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
	variant: 'primary',
	size: 'default',
	as: 'button',
})
</script>

<template>
	<component
		:is="as"
		:class="['btn', `btn--${variant}`, `btn--${size}`]"
		@click="$emit('click', $event)"
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
	border-radius: 0.6rem;
	font-size: 0.875rem;
	font-weight: 500;
	transition: all 0.5s;
	outline: none;
}

.btn:disabled {
	pointer-events: none;
	opacity: 0.5;
}

/* Variants */
.btn--primary {
	background-color: var(--vui-primary);
	color: var(--vui-primary-foreground);
}

.btn--primary:hover {
	background-color: var(--vui-primary);
	opacity: 0.75;
}

.btn--destructive {
	background-color: var(--vui-destructive);
	color: var(--vui-destructive-foreground);
}

.btn--destructive:hover {
	background-color: var(--vui-destructive);
	opacity: 0.75;
}

.btn--success {
	background-color: var(--vui-success);
	color: var(--vui-success-foreground);
}

.btn--success:hover {
	background-color: var(--vui-success);
	opacity: 0.75;
}

.btn--outline {
	background: none;
	border: 2px solid var(--vui-primary);
	color: inherit;
}

.btn--outline:hover {
	background-color: var(--vui-primary);
	color: var(--vui-primary-foreground);
}

.btn--secondary {
	background-color: var(--vui-secondary);
	color: var(--vui-secondary-foreground);
}

.btn--secondary:hover {
	background-color: var(--vui-secondary);
	opacity: 0.85;
}

.btn--ghost {
	background: none;
	color: var(--vui--foreground);
}

.btn--ghost:hover {
	background-color: var(--vui-secondary);
	opacity: 0.5;
	color: var(--vui-secondary-foreground);
}

.btn--link {
	background: none;
	color: var(--vui-secondary);
	text-underline-offset: 4px;
}

.btn--link:hover {
	background: none;
	color: var(--vui-primary);
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
