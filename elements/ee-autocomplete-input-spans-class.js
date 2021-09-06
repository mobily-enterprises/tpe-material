import { NnAutocompleteInputSpans } from 'tpe2/elements/nn-autocomplete-input-spans-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
import { css } from 'lit'

export class NnAutocompleteInputSpansMaterial extends Shared(NnAutocompleteInputSpans) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-autocomplete-input-spans', NnAutocompleteInputSpansMaterial)

