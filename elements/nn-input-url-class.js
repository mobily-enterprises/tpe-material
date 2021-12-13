import { NnInputTextMaterial } from './nn-input-text-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputUrlMaterial extends Shared(NnInputTextMaterial) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }

  constructor () {
    super()
    this.inputType = 'url'
  }
}

tpeRegistry.register('nn-input-url', NnInputUrlMaterial)
