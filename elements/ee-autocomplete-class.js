import { EeAutocomplete } from 'tpe/elements/ee-autocomplete-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
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
