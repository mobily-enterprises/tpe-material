import { NnInputMonth } from 'tpe/elements/nn-input-month-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
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
