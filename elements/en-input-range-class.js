import { EnInputRange } from 'tpe/elements/en-input-range-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class EnInputRangeMaterial extends Shared(EnInputRange) {
  // Style depends on CSS being able to find label as sibling of the #native element.
  // CSS can select next siblings, but not previous.  This guarantees label is rendered after #native in the shadowDOM
  static get properties () {
    return {
      labelPosition: { type: String, attribute: false },
      validationMessage: { type: String, attribute: false }
    }
  }

  constructor () {
    super()
    this.labelPosition = 'after'
    this.validationMessagePosition = 'after'
  }

  static get styles () {
    return [
      super.styles,
      super.stylePatterns.inputField,
      super.stylePatterns.errorMessage,
      css`
        ::slotted(#range-amount) {}
      `
    ]
  }
}


tpeRegistry.register('en-input-range', EnInputRangeMaterial)
