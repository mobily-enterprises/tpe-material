import { NnInputTextMaterial } from './nn-input-text-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputMonthMaterial extends Shared(NnInputTextMaterial) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }

  constructor () {
    super()
    this.inputType = 'month'
  }
}

tpeRegistry.register('nn-input-month', NnInputMonthMaterial)
