import { fileURLToPath } from 'url'

import { $fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

// A separate fixture + test file, not another `it()` in module.test.ts: each
// @nuxt/test-utils `setup()` boots its own Nuxt instance from a fixed
// `nuxt.config.ts`, so proving the `flowbiteVue.css: false` opt-out needs a
// second fixture with that option set, not a runtime toggle on the first.
describe('flowbite-vue/nuxt with css: false', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixture-css-disabled', import.meta.url)),
    dev: true,
  })

  it('does not inject flowbite-vue\'s stylesheet when opted out', async () => {
    const html = await $fetch('/')

    expect(html).not.toMatch(/dist\/index\.css/)
  })
})
