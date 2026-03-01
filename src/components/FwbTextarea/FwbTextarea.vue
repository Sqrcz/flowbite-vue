<template>
  <label>
    <span
      v-if="label"
      :class="labelClasses"
    >{{ label }}</span>
    <span :class="wrapperClasses">
      <textarea
        v-model="model"
        v-bind="$attrs"
        :class="textareaClasses"
        :rows="rows"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
      />
      <span
        v-if="$slots.footer"
        :class="footerClasses"
      >
        <slot name="footer" />
      </span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useTextareaClasses } from './composables/useTextareaClasses'

import type { CommonAutoFill, InputSize } from './../FwbInput/types'

interface TextareaProps {
  autocomplete?: CommonAutoFill
  custom?: boolean
  label?: string
  modelValue?: string
  placeholder?: string
  rows?: number
  size?: InputSize
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TextareaProps>(), {
  autocomplete: 'off',
  custom: false,
  label: '',
  modelValue: '',
  placeholder: 'Write your message here...',
  rows: 4,
  size: 'md',
})

const emit = defineEmits(['update:modelValue'])
const model = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    emit('update:modelValue', val)
  },
})

const { textareaClasses, labelClasses, wrapperClasses, footerClasses } = useTextareaClasses(props)
</script>
