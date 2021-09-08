import { EeAutocompleteInputSpans } from 'tpe/elements/ee-autocomplete-input-spans-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class EeAutocompleteInputSpansMaterial extends Shared(EeAutocompleteInputSpans) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-autocomplete-input-spans', EeAutocompleteInputSpansMaterial)

