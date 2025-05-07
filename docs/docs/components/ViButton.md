# ViButton

Displays a button or a component that looks like a button.

## Demo

<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViButton } from 'astral-vui'
</script>

<template>
  <ViButton size='lg'>Button</ViButton>
</template>`">
  <template #preview>
    <ViButton size='lg'>Button</ViButton>
  </template>
</PreviewCode>

## Usage

<Code lang="vue" :code="`<script setup lang='ts'>
import { ViButton } from 'astral-vui'
</script>

<template>
  <ViButton>Button</ViButton>
</template>`">
</Code>

## Props

### Variant

| Value         | Description                                    |
| ------------- | ---------------------------------------------- |
| `primary`     | The main action button (default)               |
| `destructive` | Indicates a dangerous or irreversible action   |
| `success`     | Represents a successful or positive action     |
| `outline`     | Transparent background with a colored border   |
| `secondary`   | A less prominent alternative to the primary    |
| `ghost`       | Minimal styling, blends with background        |
| `link`        | Styled as a hyperlink, used for subtle actions |

### Size

| Value     | Description                                       |
| --------- | ------------------------------------------------- |
| `default` | Standard button height and padding (default)      |
| `sm`      | Smaller, compact button                           |
| `lg`      | Larger button for emphasis                        |
| `icon`    | Square button for icons only (equal height/width) |

## Examples

### Primary

<p></p>
<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViButton } from 'astral-vui'
</script>

<template>
  <ViButton variant='primary'>Primary Button</ViButton>
</template>`">
  <template #preview>
    <ViButton variant="primary"> Primary Button</ViButton>
  </template>
</PreviewCode>

### Secondary

<p></p>
<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViButton } from 'astral-vui'
</script>

<template>
  <ViButton variant='secondary'>Secondary Button</ViButton>
</template>`">
  <template #preview>
    <ViButton variant='secondary'>Secondary Button</ViButton>
  </template>
</PreviewCode>

### Outline

<p></p>
<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViButton } from 'astral-vui'
</script>

<template>
  <ViButton variant='outline'>Outline Button</ViButton>
</template>`">
  <template #preview>
    <ViButton variant='outline'>Outline Button</ViButton>
  </template>
</PreviewCode>

### Destructive

<p></p>
<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViButton } from 'astral-vui'
</script>

<template>
  <ViButton variant='destructive'>Destructive Button</ViButton>
</template>`">
  <template #preview>
    <ViButton variant='destructive'>Destructive Button</ViButton>
  </template>
</PreviewCode>

### Successful

<p></p>
<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViButton } from 'astral-vui'
</script>

<template>
  <ViButton variant='success'>Successful Button</ViButton>
</template>`">
  <template #preview>
    <ViButton variant='success'>Successful Button</ViButton>
  </template>
</PreviewCode>

### Ghost

<p></p>
<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViButton } from 'astral-vui'
</script>

<template>
  <ViButton variant='ghost'>Ghost Button</ViButton>
</template>`">
  <template #preview>
    <ViButton variant='ghost'>Ghost Button</ViButton>
  </template>
</PreviewCode>

### Link

<p></p>
<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViButton } from 'astral-vui'
</script>

<template>
  <ViButton variant='link'>Link Button</ViButton>
</template>`">
  <template #preview>
    <ViButton variant='link'>link Button</ViButton>
  </template>
</PreviewCode>

### Icon

<p></p>
<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViButton } from 'astral-vui'
</script>

<template>
  <ViButton variant='primary' size='icon'><ViIcons name='Server' strokeWidth='2' /></ViButton>
</template>`">
  <template #preview>
    <ViButton variant='primary' size="icon"><ViIcons name="Server" strokeWidth='2' /></ViButton>
  </template>
</PreviewCode>

<script setup>
import {ViButton, ViIcons} from '../../../src/core'
import PreviewCode from '../../src/PreviewCode.vue'
import Code from '../../src/Code.vue'
</script>
