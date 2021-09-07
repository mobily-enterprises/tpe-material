import { NnInputSubmit } from 'tpe/elements/nn-input-submit-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
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
