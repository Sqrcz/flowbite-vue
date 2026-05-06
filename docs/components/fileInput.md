<script setup>
import FwbFileInputExample from './fileInput/examples/FwbFileInputExample.vue'
import FwbFileInputExampleHelper from './fileInput/examples/FwbFileInputExampleHelper.vue'
import FwbFileInputExampleSize from './fileInput/examples/FwbFileInputExampleSize.vue'
import FwbFileInputExampleStyling from './fileInput/examples/FwbFileInputExampleStyling.vue'
import FwbFileInputExampleDropZone from './fileInput/examples/FwbFileInputExampleDropZone.vue'
import FwbFileInputExampleDropZonePlaceholder from './fileInput/examples/FwbFileInputExampleDropZonePlaceholder.vue'
import FwbFileInputExampleDropZoneMultiple from './fileInput/examples/FwbFileInputExampleDropZoneMultiple.vue'
import FwbFileInputExampleMultiple from './fileInput/examples/FwbFileInputExampleMultiple.vue'
</script>

# Vue FileInput - Flowbite

#### Get started with the file input component to let the user to upload one or more files from their device storage based on multiple styles and sizes

:::tip
Original reference: [https://flowbite.com/docs/forms/file-input/](https://flowbite.com/docs/forms/file-input/)
:::

## File upload example

<fwb-file-input-example />
```vue
<template>
  <fwb-file-input v-model="file" label="Upload file" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```


## Multiple File upload

<fwb-file-input-example-multiple />
```vue
<template>
  <fwb-file-input v-model="files" label="Upload file" multiple />
  <div v-if="files.length !== 0" class="mt-4 border border-gray-300 dark:border-gray-600 p-2 rounded-md">
    <div v-for="file in files" :key="file.lastModified">
      {{ file.name }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const files = ref([])
</script>
```


## Slot - Helper

<fwb-file-input-example-helper />
```vue
<template>
  <fwb-file-input v-model="file" label="Upload file">
    <template #helper>
      SVG, PNG, JPG or GIF (MAX. 800x400px).
    </template>
  </fwb-file-input>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```


## Sizes

<fwb-file-input-example-size />
```vue
<template>
  <fwb-file-input v-model="file" label="Small size" size="sm" />
  <fwb-file-input v-model="file" label="Default size" size="md" />
  <fwb-file-input v-model="file" label="Large size" size="lg" />
  <fwb-file-input v-model="file" label="Extra large size" size="xl" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```


## Styling File Inputs

Use dedicated props to pass classes to individual elements. Use `file:` variants inside `class` to style the file selector button.

<fwb-file-input-example-styling />
```vue
<template>
  <fwb-file-input
    v-model="file"
    class="border-gray-900 rounded-none file:bg-gray-900 file:text-white hover:file:bg-gray-700"
    label="Upload file"
    label-class="text-center text-gray-900 dark:text-gray-200"
    wrapper-class="bg-gray-100 dark:bg-gray-800 p-2"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```


## Dropzone

<fwb-file-input-example-drop-zone />
```vue
<template>
  <fwb-file-input v-model="file" dropzone />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```


## Dropzone with custom placeholder

You can customize the dropzone placeholder text using the `dropzonePlaceholder` slot:

<fwb-file-input-example-drop-zone-placeholder />
```vue
<template>
  <fwb-file-input v-model="file" dropzone>
    <template #dropzonePlaceholder>
      <span class="font-semibold">Choose your file</span>
      or drop it here
    </template>
  </fwb-file-input>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```


## Dropzone multiple

<fwb-file-input-example-drop-zone-multiple />
```vue
<template>
  <fwb-file-input v-model="files" dropzone multiple />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const files = ref([])
</script>
```

## FileInput component API

### FwbFileInput Props

| Name             | Type                     | Default   | Description                                                                                      |
|------------------|--------------------------|-----------|--------------------------------------------------------------------------------------------------|
| wrapperClass     | String \| Object         | `''`      | Added to main component wrapper.                                                                 |
| labelClass       | String \| Object         | `''`      | Added to `<label>` element.                                                                      |
| class            | String \| Object         | `''`      | Added to `<input type="file">` element. Use `file:` variants to style the file selector button.  |
| validationStatus | `'success'` \| `'error'` | undefined | Sets the validation state of the input.                                                          |
