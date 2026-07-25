/**
 * Extracts `(name, filePath)` pairs from `src/index.ts`'s
 * `export { default as FwbX } from '@/components/.../FwbX.vue'` lines.
 *
 * Plain JS (not TS): this file is `node`-executed directly by
 * `scripts/generate-nuxt-components.mjs` at this repo's own build time, with
 * no transpile step, so it must run on every supported Node version as-is.
 */

const EXPORT_LINE = /^export\s*\{\s*default\s+as\s+(\w+)\s*\}\s*from\s*'@\/([^']+)'\s*$/gm

/** Internal helpers exported for template use, not meant to be auto-imported. */
export const EXCLUDED_COMPONENTS = ['FwbSlotListener']

/**
 * @param {string} indexSource contents of `src/index.ts`
 * @param {{ exclude?: string[] }} [options]
 * @returns {{ name: string, filePath: string }[]} sorted by name, `filePath` relative to `src/`
 */
export function parseIndexExports (indexSource, options = {}) {
  const exclude = new Set(options.exclude ?? EXCLUDED_COMPONENTS)
  const entries = []

  for (const match of indexSource.matchAll(EXPORT_LINE)) {
    const [, name, filePath] = match

    if (!name.startsWith('Fwb') || exclude.has(name)) continue

    entries.push({ name, filePath })
  }

  return entries.sort((a, b) => a.name.localeCompare(b.name))
}
