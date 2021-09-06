import { NnInputRange } from 'tpe2/elements/nn-input-range-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
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
