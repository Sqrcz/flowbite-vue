import { defineNuxtConfig } from 'nuxt/config'

// Resolves 'flowbite-vue/nuxt' via Node's self-referencing-package lookup,
// against the built dist/ output — run `npm run build:package` first if
// booting this fixture directly (e.g. `nuxi dev`) instead of via `npm run test:nuxt`.
export default defineNuxtConfig({
  modules: ['flowbite-vue/nuxt'],
  compatibilityDate: '2026-07-22',
  devtools: { enabled: false },
  telemetry: false,
})
