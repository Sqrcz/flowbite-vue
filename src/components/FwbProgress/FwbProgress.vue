<template>
  <div>
    <template v-if="label || (labelProgress && labelPosition === 'outside')">
      <div class="mb-1 flex justify-between">
        <span
          :class="outsideLabelClasses"
        >{{ label }}</span>
        <span
          v-if="labelProgress && labelPosition === 'outside'"
          :class="outsideLabelClasses"
        >{{ progress }}%</span>
      </div>
    </template>
    <div
      :class="outerClasses"
    >
      <div
        :class="innerClasses"
        :style="{ width: progress + '%' }"
      >
        <template v-if="labelProgress && labelPosition === 'inside'">
          {{ progress }}%
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

import { useProgressClasses } from './composables/useProgressClasses'

import type { ProgressLabelPosition, ProgressSize, ProgressVariant } from './types'

interface IProgressProps {
  color?: ProgressVariant
  label?: string
  labelPosition?: ProgressLabelPosition
  labelProgress?: boolean
  progress?: number
  size?: ProgressSize
  innerClasses?: string | Record<string, boolean>
  outerClasses?: string | Record<string, boolean>
  outsideLabelClasses?: string | Record<string, boolean>
}

const props = withDefaults(defineProps<IProgressProps>(), {
  color: 'default',
  label: '',
  labelPosition: 'none',
  labelProgress: false,
  progress: 0,
  size: 'md',
  innerClasses: '',
  outerClasses: '',
  outsideLabelClasses: '',
})

const {
  innerClasses,
  outerClasses,
  outsideLabelClasses,
} = useProgressClasses(toRefs(props))
</script>
