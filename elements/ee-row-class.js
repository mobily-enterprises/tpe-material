import { EeRow } from 'tpe2/elements/ee-row-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
import { css } from 'lit'

export class EeRowMaterial extends Shared(EeRow) {
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

tpeRegistry.register('ee-row', EeRowMaterial)
