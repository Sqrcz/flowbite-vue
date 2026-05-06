<script setup>
import FwbTextareaExample from './textarea/examples/FwbTextareaExample.vue'
import FwbTextareaExampleComment from './textarea/examples/FwbTextareaExampleComment.vue'
import FwbTextareaExampleDisabled from './textarea/examples/FwbTextareaExampleDisabled.vue'
import FwbTextareaExampleStyling from './textarea/examples/FwbTextareaExampleStyling.vue'
</script>

# Vue Textarea - Flowbite

#### Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants

---

:::tip
Original reference: [https://flowbite.com/docs/forms/textarea/](https://flowbite.com/docs/forms/textarea/)
:::

## Textarea example

Get started with the default example of a textarea component below.

<fwb-textarea-example />
```vue
<template>
  <fwb-textarea
    v-model="message"
    :rows="4"
    label="Your message"
    placeholder="Write your message..."
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbTextarea } from 'flowbite-vue'

const message = ref('')
</script>
```

## Comment box

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

<fwb-textarea-example-comment />
```vue
<template>
  <div>
    <form>
      <fwb-textarea
        v-model="message"
        :rows="3"
        label="Your message"
        placeholder="Write your message..."
      >
        <template #footer>
          <div class="flex items-center justify-between">
            <fwb-button type="submit">
              Post comment
            </fwb-button>
          </div>
        </template>
      </fwb-textarea>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbButton, FwbTextarea } from 'flowbite-vue'

const message = ref('')
</script>
```

## Disabled / Readonly Textarea / Max-Min Length

<fwb-textarea-example-disabled />
```vue
<template>
  <div>
    <fwb-textarea
      v-model="message"
      label="Textarea with minlength 10 and maxlength 20"
      minlength="10"
      maxlength="20"
      required
    />
    <fwb-textarea
      v-model="message"
      label="Your message"
      placeholder="Write your message..."
      disabled
    />
    <fwb-textarea
      v-model="message"
      label="Your message"
      placeholder="Write your message..."
      readonly
    />
  </div>
</template>
```

## Styling Textareas

Use dedicated props to pass classes to individual elements.

<fwb-textarea-example-styling />
```vue
<template>
  <fwb-textarea
    v-model="message"
    class="border border-gray-900 rounded-none"
    textarea-class="italic text-gray-700 dark:text-gray-200"
    label-class="text-center text-gray-900 dark:text-gray-200"
    label="Your message"
    placeholder="Write your message..."
    wrapper-class="bg-gray-100 dark:bg-gray-800 p-2"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbTextarea } from 'flowbite-vue'

const message = ref('')
</script>
```

## Textarea component API

### FwbTextarea Props
| Name             | Type                     | Default   | Description                                   |
| ---------------- | ------------------------ | --------- | --------------------------------------------- |
| autocomplete     | String \| Autocomplete   | undefined | Sets the autocomplete for forms.              |
| wrapperClass     | String \| Object         | `''`      | Added to main component wrapper.              |
| labelClass       | String \| Object         | `''`      | Added to `<label>` element.                   |
| class            | String \| Object         | `''`      | Added to wrapper around `<textarea>` element. |
| textareaClass    | String \| Object         | `''`      | Added to `<textarea>` element.                |
| validationStatus | `'success'` \| `'error'` | undefined | Sets the validation state of the textarea.    |
