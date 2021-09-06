import { EeAutocompleteItemEmail } from 'tpe2/elements/ee-autocomplete-item-email'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
import { css } from 'lit'

export class EeAutocompleteItemEmailMaterial extends Shared(EeAutocompleteItemEmail) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-autocomplete-item-email', EeAutocompleteItemEmailMaterial)
