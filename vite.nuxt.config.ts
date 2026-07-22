import { resolve } from 'path'

import { defineConfig } from 'vite'

// Separate build for the Nuxt module entry point: it runs in Node during the
// consumer's own Nuxt build, so it needs `es`/`cjs` output only, never the
// browser-global `umd` format the main `./vite.config.ts` build produces.
export default defineConfig({
  build: {
    target: 'esnext',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, './src/nuxt/module.ts'),
      name: 'flowbite-vue-nuxt',
      formats: ['es', 'cjs'],
      fileName: 'nuxt',
    },
    rollupOptions: {
      external: ['vue', '@nuxt/kit'],
    },
  },
})
