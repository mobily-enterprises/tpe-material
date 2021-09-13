import { NnInputTextMaterial } from './nn-input-text-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'

export class NnInputColorMaterial extends Shared(NnInputTextMaterial) {
  constructor() {
    super()
    this.inputType = 'color'
  }
}


tpeRegistry.register('nn-input-color', NnInputColorMaterial)