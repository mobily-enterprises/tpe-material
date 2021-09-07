import { NnInputMonth } from 'tpe2/elements/nn-input-month-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe2/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputMonthMaterial extends Shared(NnInputMonth) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-month', NnInputMonthMaterial)
