import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Vui',
	description: 'UI librery for Vue.js',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: 'https://github.com/Jez-er/astral-vui/blob/main/assets/Vui.png?raw=true',
			},
		],
	],
	themeConfig: {
		logo: 'https://github.com/Jez-er/astral-vui/blob/main/assets/Vui.png?raw=true',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Docs', link: '/docs/guides/introduction.md' },
		],

		sidebar: sidebar,
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/Jez-er/astral-vui' },
		],
	},
})
