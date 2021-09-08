import { NnInputRange } from 'tpe/elements/nn-input-range-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputRangeMaterial extends Shared(NnInputRange) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-range', NnInputRangeMaterial)
