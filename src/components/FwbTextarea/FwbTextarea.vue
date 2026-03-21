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

import type { Autocomplete, FormElementSize } from '@/types/form'

interface TextareaProps {
  autocomplete?: Autocomplete
  custom?: boolean
  label?: string
  modelValue?: string
  placeholder?: string
  rows?: number
  size?: FormElementSize
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
