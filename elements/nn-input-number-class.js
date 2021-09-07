import { NnInputNumber } from 'tpe/elements/nn-input-number-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputNumberMaterial extends Shared(NnInputNumber) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-number', NnInputNumberMaterial)
