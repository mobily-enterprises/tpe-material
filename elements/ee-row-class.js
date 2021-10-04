import { EeRow } from 'tpe/elements/ee-row-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
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
