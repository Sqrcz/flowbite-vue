<template>
  <div class="vp-raw flex flex-col items-center gap-4">
    <fwb-pagination
      v-model="currentPage"
      :layout="'navigation'"
      :total-pages="100"
    />
    <fwb-pagination
      v-model="currentPage"
      :layout="'navigation'"
      :total-pages="100"
      large
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbPagination } from '../../../../src/index'

const currentPage = ref<number>(1)
</script>
