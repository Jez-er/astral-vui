# ViInput

Displays a form input field or a component that looks like an input field.

## Demo

<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViInput } from 'astral-vui'
</script>

<template>
  <ViInput iconName='Server' placeholder='Example input' />
</template>`">
  <template #preview>
    <ViInput iconName="Server" placeholder="Example input" />
  </template>
</PreviewCode>

## Usage

<Code lang="vue" :code="`<script setup lang='ts'>
import { ViInput } from 'astral-vui'
</script>

<template>
  <ViInput iconName='Server' placeholder='Example input' />
</template>`">
</Code>

::: warning
iconName must be from [Lucide Icon](https://lucide.dev/)
:::

## Examples

### Default

<p></p>
<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViInput } from 'astral-vui'
</script>

<template>
  <ViInput placeholder='Your login..' />
</template>`">
  <template #preview>
    <ViInput placeholder='Your login..' />
  </template>
</PreviewCode>

### Disabled

<p></p>
<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViInput } from 'astral-vui'
</script>

<template>
  <ViInput placeholder='Your login..' :disabled='true' />
</template>`">
  <template #preview>
    <ViInput placeholder='Your login..' :disabled='true' />
  </template>
</PreviewCode>

### With Icon

<p></p>
<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViInput } from 'astral-vui'
</script>

<template>
  <ViInput iconName='User' placeholder='Your login..' />
</template>`">
  <template #preview>
    <ViInput iconName='User' placeholder='Your login..' />
  </template>
</PreviewCode>

### Password

<p></p>
<PreviewCode lang="vue" :code="`<script setup lang='ts'>
import { ViInput } from 'astral-vui'
</script>

<template>
  <ViInput type='password' iconName='Lock' placeholder='Your password..' />
</template>`">
  <template #preview>
    <ViInput type='password' iconName='Lock' placeholder='Your password..' />
  </template>
</PreviewCode>

::: warning
iconName must be from [Lucide Icon](https://lucide.dev/)
:::

## Data & Validation

::: info
You can use [Nebula Form](https://nebulaform.vercel.app/) to validate your data.
:::

### Form template

<Code lang="vue" :code="`<template>

  <form @submit='onSubmit' class='flex flex-col gap-2'>
    <ViInput icon-name='User' v-bind='register(&quot;email&quot;)' placeholder='Email' />
    <span v-if='errors.email'>{{ errors.email }}</span>

    <ViInput
      v-bind='register(&quot;password&quot;)'
      icon-name='Lock'
      type='password'
      placeholder='Password'
    />
    <span v-if='errors.password'>{{ errors.password }}</span>

    <ViInput
      icon-name='Calendar1'
      v-bind='register(&quot;age&quot;)'
      placeholder='Age'
      type='number'
    />
    <span v-if='errors.age'>{{ errors.age }}</span>

    <ViButton type='submit' variant='primary'>Submit</ViButton>

  </form>
</template>

<script setup lang='ts'>
import { ViButton, ViInput } from 'astral-vui'
import { useForm } from 'nebula-form'

const { register, handleSubmit, errors, reset } = useForm<{
  email: string
  password: string
  age: number
}>()

const onSubmit = handleSubmit(data => {
  console.log('Form Submitted:', data)
  reset()
})
</script>`" />

<script setup>
import {ViInput} from '../../../src/core'
import PreviewCode from '../../src/PreviewCode.vue'
import Code from '../../src/Code.vue'
</script>
