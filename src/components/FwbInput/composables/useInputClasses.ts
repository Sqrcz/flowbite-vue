import { computed, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { type FormElementSize, type ValidationStatus, validationStatusMap } from '@/types/form'

const defaultWrapperClasses = ''
const defaultLabelClasses = 'block mb-2 font-medium text-gray-900 dark:text-white text-sm'
const defaultInputWrapperClasses = 'relative flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-300 has-[input:focus]:border-blue-500 dark:border-gray-600 dark:has-[input:focus]:border-blue-500 rounded-lg shadow-xs has-[input:focus]:ring-1 has-[input:focus]:ring-blue-500 dark:has-[input:focus]:ring-blue-500 text-gray-900 dark:text-white'
const defaultInputClasses = 'block bg-transparent p-0 border-0 focus:border-0 focus:outline-none dark:focus:outline-none ring-0 focus:ring-0 dark:focus:ring-0 ring-offset-0 focus:ring-offset-0 w-full text-inherit placeholder:text-gray-400 dark:placeholder:text-gray-400 grow'
const defaultHelperClasses = 'mt-2 text-gray-500 dark:text-gray-400 text-sm'

const disabledInputWrapperClasses = 'bg-gray-100'
const disabledInputClasses = 'cursor-not-allowed'

const inputSizeClasses: Record<FormElementSize, string> = {
  sm: 'px-2.5 py-2 text-sm',
  md: 'px-3 py-2.5 text-sm',
  lg: 'px-3.5 py-3 text-base',
  xl: 'px-4 py-3.5 text-base',
}

const errorInputWrapperClasses = 'bg-red-50 border-rose-200 has-[input:focus]:border-rose-500 dark:border-rose-500 has-[input:focus]:ring-rose-500 text-rose-900 dark:text-rose-500 placeholder-rose-700 dark:placeholder-rose-500'
const errorTextClasses = 'text-rose-900 dark:text-rose-500'
const successInputWrapperClasses = 'bg-green-50 border-emerald-200 has-[input:focus]:border-emerald-500 dark:border-emerald-500 has-[input:focus]:ring-emerald-500 text-emerald-900 dark:text-emerald-400 placeholder-emerald-700 dark:placeholder-emerald-500'
const successTextClasses = 'text-emerald-900 dark:text-emerald-500'
const errorInputClasses = 'text-rose-900 placeholder-rose-900 dark:placeholder-rose-500'
const successInputClasses = 'text-emerald-900 dark:text-emerald-400 placeholder-emerald-900 dark:placeholder-emerald-500'

export type UseInputClassesProps = {
  class: Ref<string | Record<string, boolean>>
  disabled: Ref<boolean>
  inputClass: Ref<string | Record<string, boolean>>
  labelClass: Ref<string | Record<string, boolean>>
  size: Ref<FormElementSize>
  validationStatus: Ref<ValidationStatus | undefined>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useInputClasses (props: UseInputClassesProps): {
  helperMessageClass: Ref<string>
  inputClass: Ref<string>
  inputWrapperClass: Ref<string>
  labelClass: Ref<string>
  validationMessageClass: Ref<string>
  wrapperClass: Ref<string>
} {
  const wrapperClass = computed(() => useMergeClasses([
    defaultWrapperClasses,
    props.wrapperClass.value,
  ]))

  const labelClass = computed(() => useMergeClasses([
    defaultLabelClasses,
    props.labelClass.value,
    props.validationStatus.value === validationStatusMap.Success
      ? successTextClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorTextClasses : '',
  ]))

  const inputWrapperClass = computed(() => useMergeClasses([
    defaultInputWrapperClasses,
    props.class.value,
    props.validationStatus.value === validationStatusMap.Success
      ? successInputWrapperClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorInputWrapperClasses : '',
    props.disabled.value ? disabledInputWrapperClasses : '',
  ]))

  const inputClass = computed(() => useMergeClasses([
    defaultInputClasses,
    inputSizeClasses[props.size.value],
    props.validationStatus.value === validationStatusMap.Success
      ? successInputClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorInputClasses : '',
    props.inputClass.value,
    props.disabled.value ? disabledInputClasses : '',
  ]))

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
    inputClass,
    inputWrapperClass,
    labelClass,
    validationMessageClass,
    wrapperClass,
  }
}
