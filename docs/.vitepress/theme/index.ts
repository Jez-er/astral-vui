import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { createToaster } from '../../../src/core'
import './components.css'
import './override.css'
import './style.css'

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		})
	},
	enhanceApp({ app, router, siteData }) {
		const toaster = createToaster()

		app.provide('toaster', toaster)
	},
} satisfies Theme
