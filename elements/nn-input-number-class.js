import { NnInputTextMaterial } from './nn-input-text-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputNumberMaterial extends Shared(NnInputTextMaterial) {
  constructor () {
    super()
    this.inputType = 'number'
  }
  
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }

  constructor () {
    super()
    this.inputType = 'number'
  }
}

tpeRegistry.register('nn-input-number', NnInputNumberMaterial)
