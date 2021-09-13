import { NnInputTextMaterial } from './nn-input-text-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputRangeMaterial extends Shared(NnInputTextMaterial) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-range', NnInputRangeMaterial)
