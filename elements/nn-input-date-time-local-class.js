import { NnInputTextMaterial } from './nn-input-text-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputDateTimeLocalMaterial extends Shared(NnInputTextMaterial) {
  constructor () {
    super()
    this.inputType = 'datetime-local'
  }
}

tpeRegistry.register('nn-input-date-time-local', NnInputDateTimeLocalMaterial)
