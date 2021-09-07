import { EeCell } from 'tpe/elements/ee-cell-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class EeCellMaterial extends Shared(EeCell) {
  static get styles () {
    return [
      super.styles,
      css`
        :host {
          display: flex;
        }

      `
    ]
  }
}

tpeRegistry.register('ee-cell', EeCellMaterial)
