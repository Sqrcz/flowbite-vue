<template>
  <div class="vp-raw">
    <fwb-textarea
      v-model="message"
      class="border border-gray-900 rounded-none"
      textarea-class="italic text-gray-700 dark:text-gray-200"
      label-class="text-center text-gray-900 dark:text-gray-200"
      label="Your message"
      placeholder="Write your message..."
      wrapper-class="bg-gray-100 dark:bg-gray-800 p-2"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbTextarea } from '../../../../src/index'

const message = ref('')
</script>
