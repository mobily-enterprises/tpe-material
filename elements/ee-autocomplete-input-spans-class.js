import { EeAutocompleteInputSpans } from 'tpe2/elements/ee-autocomplete-input-spans-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe2/lib/tpeRegistry'
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

