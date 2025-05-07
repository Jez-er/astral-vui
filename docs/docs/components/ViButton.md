# ViButton

Displays a button or a component that looks like a button.

## Demo

<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViButton } from 'astral-vui'
</script>

<template>
  <ViButton>Button</ViButton>
</template>`">
  <template #preview>
    <ViButton>Button</ViButton>
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

## Examples

### Primary

::: tip Primary

<p></p>
<ViButton style="padding: 10px 25px">Button</ViButton>
<p></p>
:::

### Secondary

::: tip Primary

<p></p>
<ViButton variant="secondary" style="padding: 10px 25px">Button</ViButton>
<p></p>
:::

<script setup>
import {ViButton} from '../../../src/core'
import PreviewCode from '../../src/PreviewCode.vue'
import Code from '../../src/Code.vue'
</script>
