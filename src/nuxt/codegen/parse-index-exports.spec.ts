import { describe, expect, it } from 'vitest'

import { parseIndexExports } from './parse-index-exports.mjs'

const fixtureIndex = `
export { default as FwbAccordion } from '@/components/FwbAccordion/FwbAccordion.vue'
export { default as FwbButton } from '@/components/FwbButton/FwbButton.vue'

// utilities
export { default as FlowbiteThemable } from '@/components/utils/FlowbiteThemable/FlowbiteThemable.vue'
export { default as FwbSlotListener } from '@/components/utils/FwbSlotListener/FwbSlotListener.vue'

export * from './composables'
`

describe('parseIndexExports', () => {
  it('extracts Fwb-prefixed component exports with their source path relative to src/', () => {
    expect(parseIndexExports(fixtureIndex)).toEqual([
      { name: 'FwbAccordion', filePath: 'components/FwbAccordion/FwbAccordion.vue' },
      { name: 'FwbButton', filePath: 'components/FwbButton/FwbButton.vue' },
    ])
  })

  it('excludes FwbSlotListener by default', () => {
    const names = parseIndexExports(fixtureIndex).map(entry => entry.name)

    expect(names).not.toContain('FwbSlotListener')
  })

  it('excludes non-Fwb-prefixed exports (e.g. FlowbiteThemable)', () => {
    const names = parseIndexExports(fixtureIndex).map(entry => entry.name)

    expect(names).not.toContain('FlowbiteThemable')
  })

  it('ignores lines that are not a default-export re-export (e.g. `export * from`)', () => {
    const withOnlyStarExport = 'export * from \'./composables\''

    expect(parseIndexExports(withOnlyStarExport)).toEqual([])
  })

  it('respects a custom exclude list', () => {
    const names = parseIndexExports(fixtureIndex, { exclude: ['FwbButton'] }).map(entry => entry.name)

    expect(names).toContain('FwbAccordion')
    expect(names).not.toContain('FwbButton')
  })
})
