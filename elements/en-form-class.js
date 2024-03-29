import { EnForm } from 'tpe/elements/en-form-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class EnFormMaterial extends Shared(EnForm) {
  static get styles () {
    return [
      super.styles,
      css`
        :invalid {
          border: unset;
          border-bottom: var(--mat-input-border, var(--mat-theme-border));
        }

        ::slotted(*) fieldset {
          border-radius: 5px;
          border-style: solid;
          padding: 16px;
        }

        ::slotted(*) legend {
          padding-inline-start: 10px;
          padding-inline-end: 10px;
        }
      `
    ]
  }
}

tpeRegistry.register('en-form', EnFormMaterial)

