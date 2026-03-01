import { computed } from 'vue'

import type { InputSize } from '@/components/FwbInput/types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const textareaWrapperClasses = 'block w-full mb-4 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600'
const textareaDefaultClasses = 'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50'
const textareaLabelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
const textareaFooterClasses = 'block py-2 px-3 border-gray-200 dark:border-gray-600'

const textareaSizeClasses: Record<InputSize, string> = {
  sm: 'px-2.5 py-2 text-sm',
  md: 'px-3 py-2.5 text-sm',
  lg: 'px-3.5 py-3 text-base',
  xl: 'px-4 py-3.5 text-base',
}

export function useTextareaClasses ({ custom, size }: { custom: boolean, size: InputSize }) {
  const textareaClasses = computed(() => useMergeClasses([
    textareaDefaultClasses,
    textareaSizeClasses[size],
    custom ? 'bg-white dark:bg-gray-800 border-none' : 'border',
  ]))

  const labelClasses = computed(() => textareaLabelClasses)
  const wrapperClasses = computed(() => (custom) ? textareaWrapperClasses : '')
  const footerClasses = computed(() => textareaFooterClasses)

  return {
    textareaClasses,
    labelClasses,
    wrapperClasses,
    footerClasses,
  }
}
