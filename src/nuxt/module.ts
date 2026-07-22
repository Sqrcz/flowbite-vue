import { addComponent, createResolver, defineNuxtModule } from '@nuxt/kit'

import { nuxtComponents } from './generated-components'

export default defineNuxtModule({
  meta: {
    name: 'flowbite-vue',
    configKey: 'flowbiteVue',
  },
  setup () {
    const resolver = createResolver(import.meta.url)

    for (const { name, filePath: sourcePath } of nuxtComponents) {
      addComponent({
        name,
        // Each component's own built chunk (`vite.nuxt.config.ts` gives every
        // component its own lib entry), not raw `src/*.vue`: raw source uses
        // flowbite-vue's own internal `@/...` path alias, which has no
        // meaning in a consumer's Vite config and would collide with Nuxt's
        // own `@` (srcDir) alias if injected globally. The built chunk
        // already has that alias resolved, and gives Nuxt a genuinely
        // separate lazy-loaded module per component.
        filePath: resolver.resolve(`./components/${name}.js`),
        declarationPath: resolver.resolve(`../src/${sourcePath}`),
      })
    }

    // Composable/CSS registration land in follow-up tickets.
  },
})
