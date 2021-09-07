import { NnInputTel } from 'tpe/elements/nn-input-tel-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputTelMaterial extends Shared(NnInputTel) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-tel', NnInputTelMaterial)
