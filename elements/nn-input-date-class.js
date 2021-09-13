import { NnInputTextMaterial } from './nn-input-text-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputDateMaterial extends Shared(NnInputTextMaterial) {
  constructor () {
    super()
    this.inputType = 'data'
  }
}

tpeRegistry.register('nn-input-date', NnInputDateMaterial)
