import { EeAutocompleteInputSpans } from 'tpe/elements/ee-autocomplete-input-spans-class'
import { AddHasValueAttributeMixin } from '../mixins/AddHasValueAttributeMixin'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class EeAutocompleteInputSpansMaterial extends Shared(EeAutocompleteInputSpans) {
  static get styles () {
    return [
      super.styles,
      super.stylePatterns.inputField,
      super.stylePatterns.inputLabel,
      super.stylePatterns.floatingLabel,
      super.stylePatterns.hoverStyle,
      super.stylePatterns.focusStyle,
      super.stylePatterns.errorMessage,
      super.stylePatterns.requiredLabelAsterisk,
      css`
        :host label {
          transform: translateY(calc(var(--half-height) / -1)) scale(0.8);
          transform-origin: 0 0;
          transition: transform 0.1s ease-in-out, background 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        :host([dense]) #ta {
            padding: var(--mat-form-element-padding, 14px 10px 0);
          }

          :host([outlined]) {
            --mat-background: white;
            --mat-theme-border: 2px solid #ccc;
          }

          :host([outlined]) #ta {
            border-bottom: unset;
            border: var(--mat-input-border, var(--mat-theme-border));
            border-radius: var(--mat-input-border-radius, 4px);
          }

          #ta {
            box-sizing: border-box;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            box-sizing: border-box;
            display: block;
            border-radius: var(--mat-input-border-radius, 4px 4px 0 0);
            border-width: 0;
            border-style: solid;
            border-color: transparent;
            border-bottom: var(--mat-input-border, var(--mat-theme-border));
            color: var(--mat-input-color, inherit);
            background-color: var(--mat-background, #eee);
            width: 100%;
            font-size: 14px;
            padding:  var(--mat-form-element-padding, 20px 16px 0);
            height: var(--mat-form-element-height);
            box-shadow: var(--mat-theme-box-shadow);
          }

          #ta:focus,
          #ta:active {
            outline: none
          }

          #ta::selection {
            background-color: var(--mat-background-dark);
          }

          :host(:not([disabled])) #ta:invalid {
            background-color: var(--mat-error-color);
            color: var(--mat-error-text);
            border-color: var(--mat-error-text);
          }

          #ta:disabled {
            filter: saturate(0);
            opacity: 0.85;
          }

          #ta:disabled:hover {
            background-color: initial !important;
          }
      `
    ]
  }
}

tpeRegistry.register('ee-autocomplete-input-spans', EeAutocompleteInputSpansMaterial)
