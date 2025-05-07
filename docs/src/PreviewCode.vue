<template>
	<div class="preview-code">
		<div class="tabs">
			<button @click="tab = 'preview'" :class="{ active: tab === 'preview' }">
				Preview
			</button>
			<button @click="tab = 'code'" :class="{ active: tab === 'code' }">
				Code
			</button>
		</div>
		<div class="content">
			<div v-if="tab === 'preview'" class="preview">
				<slot name="preview" />
			</div>
			<div v-if="tab === 'code'" class="code" v-html="highlightedCode" />
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

const tab = ref<'preview' | 'code'>('preview')
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
.preview {
	width: 100%;
	height: 20vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.preview-code {
	min-height: 20vh;
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
	padding: 0 0;
}
.code pre {
	margin: 0;
}
</style>
