<template>
	<div class="preview-code">
		<div class="content">
			<div class="code" v-html="highlightedCode" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { createHighlighter } from 'shiki'
import { onMounted, ref } from 'vue'

const props = defineProps<{
	code: string
	lang?: string
}>()

const highlightedCode = ref('')

onMounted(async () => {
	const highlighter = await createHighlighter({
		themes: ['houston'],
		langs: ['vue', 'ts', 'tsx', 'js'],
	})

	highlightedCode.value = highlighter.codeToHtml(props.code.trim(), {
		lang: props.lang || 'vue',
		themes: {
			light: 'houston',
			dark: 'houston',
		},
	})
})
</script>

<style scoped>
.preview-code {
	border: 1px solid #333;
	border-radius: 8px;
	background: #17191e;
	padding: 1rem;
}
.tabs {
	display: flex;
	gap: 1rem;
	margin-bottom: 0.5rem;
}
button {
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	padding: 0.25rem 0.5rem;
	font-weight: bold;
}
button.active {
	border-bottom: 2px solid #42b983;
}
.code {
	overflow-x: auto;
	padding: 0.5rem 0;
}
.code pre {
	margin: 0;
}
</style>
