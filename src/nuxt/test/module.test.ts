import { fileURLToPath } from 'node:url'

import { $fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('flowbite-vue/nuxt', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixture', import.meta.url)),
    dev: true,
  })

  it('boots the fixture app with the module loaded', async () => {
    const html = await $fetch('/')

    expect(html).toContain('flowbite-vue nuxt fixture')
  })
})
