import { EeAutocompleteItemLi } from 'tpe2/elements/ee-autocomplete-item-li'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
import { css } from 'lit'

export class EeAutocompleteItemLiMaterial extends Shared(EeAutocompleteItemLi) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-autocomplete-item-li', EeAutocompleteItemLiMaterial)
