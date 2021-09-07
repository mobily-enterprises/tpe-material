import { NnInputSubmit } from 'tpe2/elements/nn-input-submit-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputSubmitMaterial extends Shared(NnInputSubmit) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-submit', NnInputSubmitMaterial)
