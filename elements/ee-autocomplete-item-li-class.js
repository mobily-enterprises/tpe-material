import { EeAutocompleteItemLi, EeAutocompleteItemLiView } from 'tpe/elements/ee-autocomplete-item-li-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
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

export class EeAutocompleteItemLiViewMaterial extends Shared(EeAutocompleteItemLiView) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-autocomplete-item-li-view', EeAutocompleteItemLiViewMaterial)
