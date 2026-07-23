import { defineNuxtConfig } from 'nuxt/config'

// A second, minimal fixture for ticket 13's CSS opt-out: the main
// `../fixture` app covers the default (auto-injected) case, and duplicating
// its whole component/composable setup here just to flip one option would
// be redundant — this only needs to prove `flowbiteVue.css: false` suppresses
// the stylesheet Nuxt would otherwise auto-inject.
export default defineNuxtConfig({
  modules: ['flowbite-vue/nuxt'],
  flowbiteVue: {
    css: false,
  },
  compatibilityDate: '2026-07-22',
  devtools: { enabled: false },
  telemetry: false,
})
