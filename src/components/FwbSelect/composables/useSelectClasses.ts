import { computed, type Ref } from 'vue'

import { type ValidationStatus, validationStatusMap } from '../types'

import type { FormElementSize } from '@/types/form'

import { useMergeClasses } from '@/composables/useMergeClasses'

// WRAPPER
const defaultWrapperClasses = ''

// LABEL
const defaultLabelClasses = 'block mb-2 text-sm font-medium'
const defaultLabelTextClasses = 'text-gray-900 dark:text-white'
const successTextClasses = 'text-green-700 dark:text-green-500'
const errorTextClasses = 'text-red-700 dark:text-red-500'

// SELECT
const defaultSelectClasses = 'fwb-select w-full appearance-none text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
const disabledSelectClasses = 'cursor-not-allowed bg-gray-100'
const borderSelectClasses = 'border border-gray-300 rounded-lg'
const underlineSelectClasses = 'bg-transparent dark:bg-transparent dark:text-gray-500 border-b-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'

const successSelectClasses = 'bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500'
const errorSelectClasses = 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'

const selectSizeClasses: Record<FormElementSize, string> = {
  sm: 'px-2.5 py-2 text-sm',
  md: 'px-3 py-2.5 text-sm',
  lg: 'px-3.5 py-3 text-base',
  xl: 'px-4 py-3.5 text-base',
}

const successUnderlineClasses = 'focus:border-green-500'
const errorUnderlineClasses = 'focus:border-red-500'

// HELPER / VALIDATION
const defaultHelperClasses = 'mt-2 text-sm text-gray-500 dark:text-gray-400'

export type UseSelectClassesProps = {
  class: Ref<string | Record<string, boolean>>
  disabled: Ref<boolean>
  labelClass: Ref<string | Record<string, boolean>>
  size: Ref<FormElementSize>
  underline: Ref<boolean>
  validationStatus: Ref<ValidationStatus | undefined>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useSelectClasses (props: UseSelectClassesProps): {
  helperMessageClass: Ref<string>
  labelClasses: Ref<string>
  selectClasses: Ref<string>
  validationMessageClass: Ref<string>
  wrapperClass: Ref<string>
} {
  const wrapperClass = computed(() => useMergeClasses([
    defaultWrapperClasses,
    props.wrapperClass.value,
  ]))

  const labelClasses = computed(() => {
    const vs = props.validationStatus.value
    return useMergeClasses([
      defaultLabelClasses,
      defaultLabelTextClasses,
      vs === validationStatusMap.Success
        ? successTextClasses
        : vs === validationStatusMap.Error ? errorTextClasses : '',
      props.labelClass.value,
    ])
  })

  const selectClasses = computed(() => {
    const vs = props.validationStatus.value
    const classByStatus = vs === validationStatusMap.Success
      ? successSelectClasses
      : vs === validationStatusMap.Error ? errorSelectClasses : ''
    const underlineByStatus = vs === validationStatusMap.Success
      ? successUnderlineClasses
      : vs === validationStatusMap.Error ? errorUnderlineClasses : ''

    return useMergeClasses([
      defaultSelectClasses,
      classByStatus,
      selectSizeClasses[props.size.value],
      props.disabled.value ? disabledSelectClasses : '',
      props.underline.value ? underlineSelectClasses : borderSelectClasses,
      props.underline.value ? underlineByStatus : '',
      props.class.value,
    ])
  })

  const validationMessageClass = computed(() => useMergeClasses([
    defaultHelperClasses,
    props.validationStatus.value === validationStatusMap.Success
      ? successTextClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorTextClasses : '',
  ]))

  const helperMessageClass = computed(() => useMergeClasses([
    defaultHelperClasses,
  ]))

  return {
    helperMessageClass,
    labelClasses,
    selectClasses,
    validationMessageClass,
    wrapperClass,
  }
}
