import { computed } from 'vue'

export function useVModel<T, K extends string>(
	props: Record<string, any>,
	propName: K,
	emit: (event: `update:${K}`, value: T) => void,
	options?: {
		passive?: boolean
		defaultValue?: T
	}
) {
	const { passive = false, defaultValue } = options ?? {}

	return computed<T>({
		get() {
			const value = props[propName]
			return value !== undefined ? value : (defaultValue as T)
		},
		set(value) {
			if (!passive) {
				emit(`update:${propName}` as `update:${K}`, value)
			}
		},
	})
}
