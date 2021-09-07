import { NnInputDate } from 'tpe2/elements/nn-input-date-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputDateMaterial extends Shared(NnInputDate) {
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
      super.stylePatterns.inputLabel,
      super.stylePatterns.fixedLabel,
      super.stylePatterns.errorMessage,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-date', NnInputDateMaterial)
