# Toast

A succinct message that is displayed temporarily.

## Demo

### main.ts

```ts
const app = createApp({
	setup() {
		const toaster = createToaster()
		provide(TOASTER_KEY, toaster)
	},
	render: () => h(App),
})
```

### Usage

```vue
<script setup lang="ts">
import { useToaster } from 'astral-vui'

const toaster = useToaster()

const notify = () => {
	toaster.addToast('Test toaster', 'info', 3000)
}
</script>

<template>
	<button @click="notify">Test Toaster</button>
</template>
```

### Types

```ts
type ToastType = 'success' | 'error' | 'info'
```
