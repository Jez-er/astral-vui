import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Vui',
	description: ' UI librery for Vue.js by Astral Team ',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Docs', link: '/docs/components/ViButton.md' },
		],

		sidebar: sidebar,

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' },
		],
	},
})
