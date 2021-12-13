import { NnInputSubmit } from 'tpe/elements/nn-input-submit-class'
import { NnInputButtonMaterial } from './nn-input-button-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputSubmitMaterial extends Shared(NnInputSubmit) {
  static get styles () {
    return [
      super.styles,
      NnInputButtonMaterial.styles,
      css`
      `
    ]
  }

  constructor () {
    super()
    this.inputType = 'submit'
  }
}

tpeRegistry.register('nn-input-submit', NnInputSubmitMaterial)
