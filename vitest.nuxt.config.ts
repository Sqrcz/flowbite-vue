import { defineConfig } from 'vitest/config'

// Separate from vitest.config.ts: this suite boots a real Nuxt fixture app
// per test file, which is much slower than the plain component unit tests,
// so it's kept out of the fast `npm test` loop behind its own script.
export default defineConfig({
  test: {
    include: ['src/nuxt/test/**/*.test.ts'],
    testTimeout: 60_000,
    hookTimeout: 60_000,
  },
})
