import { EeAutocomplete } from 'tpe2/elements/ee-autocomplete-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
import { css } from 'lit'

export class EeAutocompleteMaterial extends Shared(EeAutocomplete) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-autocomplete', EeAutocompleteMaterial)
