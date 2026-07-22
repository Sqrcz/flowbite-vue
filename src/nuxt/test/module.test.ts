import { readFileSync } from 'node:fs'
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

  it('auto-imports a component with no manual import statement', async () => {
    const html = await $fetch('/')

    expect(html).toContain('<button')
    expect(html).toContain('Click me')
  })

  it('auto-imports a second, independent component with no manual import statement', async () => {
    const html = await $fetch('/')

    expect(html).toContain('data-accordion-id')
    expect(html).toContain('accordion body')
  })

  it('gives each component its own build chunk, not one shared bundle', () => {
    // Regression guard for the ticket 11 requirement that addComponent relies
    // on Nuxt's own per-component lazy loading, not a single shared chunk.
    const buttonChunk = fileURLToPath(new URL('../../../dist/components/FwbButton.js', import.meta.url))
    const accordionChunk = fileURLToPath(new URL('../../../dist/components/FwbAccordion.js', import.meta.url))

    expect(readFileSync(buttonChunk, 'utf-8')).not.toEqual(readFileSync(accordionChunk, 'utf-8'))
  })
})
