import vue from '@vitejs/plugin-vue'
import path from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
		environment: 'node',
		exclude: [...configDefaults.exclude, 'e2e/**'],
	},
	plugins: [
		vue(),
		dts({
			include: ['src/core'],
			tsconfigPath: './tsconfig.app.json',
			insertTypesEntry: true,
		}),
		cssInjectedByJsPlugin({
			injectCode: cssCode => {
				return `try {
					if (typeof document !== 'undefined') {
						var style = document.createElement('style');
						style.innerHTML = ${cssCode};
						document.head.appendChild(style);
					}
				} catch(e) {
					console.error('vite-plugin-css-injected-by-js', e);
				}`
			},
		}),
	],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, '../../src/core/components'),
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/core/index.ts'),
			name: 'astral-vui',
			formats: ['es', 'cjs'],
			fileName: format => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
				assetFileNames: assetInfo => {
					if (assetInfo.name === 'style.css') return 'index.css'
					return assetInfo.name!
				},
			},
		},
		cssCodeSplit: false,
		sourcemap: true,
	},
})
