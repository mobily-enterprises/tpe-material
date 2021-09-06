import { EeAutocompleteItemCountry } from 'tpe2/elements/ee-autocomplete-item-country'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
import { css } from 'lit'

export class EeAutocompleteItemCountryMaterial extends Shared(EeAutocompleteItemCountry) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-autocomplete-item-country', EeAutocompleteItemCountryMaterial)
