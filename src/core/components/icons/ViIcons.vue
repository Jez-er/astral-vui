<script setup lang="ts">
import * as icons from 'lucide-vue-next'
import { computed } from 'vue'
import type { IconComponent, IconName } from '../../types/icons'

const props = defineProps<{
	name: IconName
	size?: number
	color?: string
	strokeWidth?: number
	defaultClass?: string
}>()

const icon = computed<IconComponent | undefined>(() => {
	const candidate = icons[props.name]
	if (
		typeof candidate === 'function' ||
		(typeof candidate === 'object' && candidate !== null)
	) {
		return candidate as IconComponent
	}
	return undefined
})
</script>

<template>
	<component
		:is="icon"
		:size="size"
		:color="color"
		:stroke-width="strokeWidth"
		:default-class="defaultClass"
	/>
</template>
