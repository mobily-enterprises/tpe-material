import { NnInputTel } from 'tpe2/elements/nn-input-tel-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
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
