import { NnInputTextMaterial } from './nn-input-text-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputWeekMaterial extends Shared(NnInputTextMaterial) {
    static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }

  constructor () {
    super()
    this.inputType = 'week'
  }
}

tpeRegistry.register('nn-input-week', NnInputWeekMaterial)