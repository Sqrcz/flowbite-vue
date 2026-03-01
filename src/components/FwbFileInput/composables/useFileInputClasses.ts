import { computed } from 'vue'

import type { InputSize } from '@/components/FwbInput/types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const fileInpLabelClasses = 'block mb-2 font-medium text-gray-900 dark:text-white text-sm'

const fileInpDefaultClasses = 'bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none w-full text-gray-900 dark:text-gray-400 cursor-pointer dark:placeholder-gray-400 placeholder-gray-200'
const fileInputButtonDefaultClasses = 'hover:file:bg-gray-100 dark:hover:file:bg-gray-600 dark:file:bg-gray-700 file:bg-gray-200 hover:file:border-gray-300 dark:hover:file:border-gray-500 dark:file:border-gray-600 file:border-0 file:border-gray-300 file:border-r file:rounded-none dark:file:text-white file:text-gray-900 file:transition-colors file:duration-150 file:cursor-pointer'

const fileInpDropzoneClasses = 'flex flex-col justify-center items-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border-2 border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 border-dashed rounded-lg w-full h-64 cursor-pointer'
const fileDropzoneWrapClasses = 'flex flex-col justify-center items-center pt-5 pb-6'
const fileDropzoneDefaultTextClasses = '-mb-2! text-gray-500 dark:text-gray-400 text-sm'

const inputSizeClasses: Record<InputSize, string> = {
  sm: 'file:mr-2.5 p-0 file:px-2.5 file:py-2 text-sm file:text-sm',
  md: 'file:mr-3 p-0 file:px-3 file:py-2.5 text-sm file:text-sm',
  lg: 'file:mr-3.5 p-0 file:px-3.5 file:py-3 text-base file:text-base',
  xl: 'file:mr-4 p-0 file:px-4 file:py-3.5 text-base file:text-base',
}

export function useFileInputClasses ({ size }: { size: InputSize }) {
  const fileInpClasses = computed(() => useMergeClasses([
    fileInpDefaultClasses,
    fileInputButtonDefaultClasses,
    inputSizeClasses[size],
  ]))

  const labelClasses = computed(() => fileInpLabelClasses)
  const dropzoneLabelClasses = computed(() => fileInpDropzoneClasses)
  const dropzoneWrapClasses = computed(() => fileDropzoneWrapClasses)
  const dropzoneTextClasses = computed(() => fileDropzoneDefaultTextClasses)

  return {
    fileInpClasses,
    labelClasses,
    dropzoneLabelClasses,
    dropzoneWrapClasses,
    dropzoneTextClasses,
  }
}
