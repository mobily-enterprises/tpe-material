import { EeAutocompleteItemCountry, EeAutocompleteItemCountryView } from 'tpe/elements/ee-autocomplete-item-country-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
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

export class EeAutocompleteItemCountryViewMaterial extends Shared(EeAutocompleteItemCountryView) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-autocomplete-item-country-view', EeAutocompleteItemCountryViewMaterial)
