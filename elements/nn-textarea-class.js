import { AddHasValueAttributeMixin } from '../mixins/AddHasValueAttributeMixin'
import { NnTextarea } from 'tpe2/elements/nn-textarea-class'
import tpeRegistry from 'tpe2/tpeRegistry'
import { Shared } from '../mixins/shared.js'
import { css } from 'lit'

export class NnTextareaMaterial extends Shared(AddHasValueAttributeMixin(NnTextarea)) {

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
      super.stylePatterns.floatingLabel,
      super.stylePatterns.errorMessage,
      super.stylePatterns.requiredLabelAsterisk,
      css`
        :host {
          --mat-form-element-height: 80px;
        }
        /* Following material design guidelines, non-resizeable textarea */
        textarea#native {
          font-family: var(--mat-font-family);
          padding-top: 12px;
          min-height: 80px;
          height: unset;
          padding-top: 30px;
          width: -webkit-fill-available;
          resize: none;
        }
      `
    ]
  }
}

tpeRegistry.register('nn-textarea', NnTextareaMaterial)