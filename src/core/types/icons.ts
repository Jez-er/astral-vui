import type { icons } from 'lucide-vue-next'
import type { Component } from 'vue'

export type IconComponent = Component
export type IconName = Extract<keyof typeof icons, string>
