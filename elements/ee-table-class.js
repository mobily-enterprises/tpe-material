import { EeTable } from 'tpe2/elements/ee-table'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
import { css } from 'lit'

export class EeTableMaterial extends Shared(EeTable) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-table', EeTableMaterial)
