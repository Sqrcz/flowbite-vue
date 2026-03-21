<template>
  <div :class="wrapperClass">
    <label
      v-if="label"
      :class="labelClasses"
      :for="selectId"
    >{{ label }}</label>
    <select
      v-bind="selectAttributes"
      v-model="model"
      :autocomplete="autocomplete"
      :class="selectClasses"
      :disabled="disabled"
      :required="required"
    >
      <option
        :disabled="!clearable"
        :hidden="!clearable"
        class="text-gray-500 dark:text-gray-400"
        value=""
      >
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
    <p
      v-if="$slots.validationMessage"
      :class="validationMessageClass"
    >
      <slot name="validationMessage" />
    </p>
    <p
      v-if="$slots.helper"
      :class="helperMessageClass"
    >
      <slot name="helper" />
    </p>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

import { useSelectAttributes } from './composables/useSelectAttributes'
import { useSelectClasses } from './composables/useSelectClasses'

import type { SelectProps } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SelectProps>(), {
  class: '',
  clearable: false,
  disabled: false,
  label: '',
  labelClass: '',
  options: () => [],
  placeholder: 'Please select one',
  required: false,
  size: 'md',
  underline: false,
  validationStatus: undefined,
  wrapperClass: '',
})

const model = defineModel<string>({ default: '' })
const { selectId, selectAttributes } = useSelectAttributes()

const {
  wrapperClass,
  labelClasses,
  selectClasses,
  validationMessageClass,
  helperMessageClass,
} = useSelectClasses(toRefs(props))
</script>
