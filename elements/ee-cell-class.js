import { EeCell } from 'tpe2/elements/ee-cell-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
import { css } from 'lit'

export class EeCellMaterial extends Shared(EeCell) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-cell', EeCellMaterial)
