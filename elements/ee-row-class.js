import { EeRow } from 'tpe2/elements/ee-row'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
import { css } from 'lit'

export class EeRowMaterial extends Shared(EeRow) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-row', EeRowMaterial)
