<template>
  <div class="vp-raw">
    <fwb-file-input
      v-model="file"
      class="border-gray-900 rounded-none file:bg-gray-900 file:text-white hover:file:bg-gray-700"
      label="Upload file"
      label-class="text-center text-gray-900 dark:text-gray-200"
      wrapper-class="bg-gray-100 dark:bg-gray-800 p-2"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbFileInput } from '../../../../src/index'

const file = ref(null)
</script>
