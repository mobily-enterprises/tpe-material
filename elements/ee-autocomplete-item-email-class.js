import { EeAutocompleteItemEmail, EeAutocompleteItemEmailView } from 'tpe2/elements/ee-autocomplete-item-email-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe2/lib/tpeRegistry'
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

export class EeAutocompleteItemEmailViewMaterial extends Shared(EeAutocompleteItemEmailView) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-autocomplete-item-email-view', EeAutocompleteItemEmailViewMaterial)
