import { css } from 'lit'

// TPE Material Theme
// ==================
//
// This is a light implementation of material guidelines. It does not aim to be
// a comprehensive, completely accurate Material Design components library, but to
// showcase the flexiblity of the TPE theming system and serve as a reference
// for theme development. Guidelines can be found in:
// https://material.io/components.
//
// The main objective of this approach it to use as much of plain CSS power as
// possible to achieve the look and feel of material design. This keeps the
// theming system lightweight and approacheable to beginner developers and
// designers used to work with CSS, but not really with CSS preprocessors or
// advanced bundling tools.
//
// ## The shared theme styles
//
// First of all, the _Shared_ mixin is defined. It is required by the TPE Theme
// system, and applied to all elements, so it is not meant to force the actual
// styles directly to the elements, but to provide the shared patterns, global
// definitions and the CSS custom properties that will allow
//
export const Shared = (base) => {
  return class Base extends base {
    // The _stylePatterns_ object is a collection of CSS styles that implement
    // Material Design guidelines visual patterns and behaviors. The
    // CSSTemplateResults are added accordingly in the static styles getter in
    // the theme mixin for each of the TPE elements.
    //
    // For example, to style the native input fields, the mixin assigned to `window.TP_THEME["nn-input-text"]" would have this minimum static styles getter:
    //
    // ```
    // static get styles () {
    //    return [
    //        this.stylesPatterns.inputField,
    //        this.stylesPatterns.inputLabel
    //    ]
    // }
    //
    // ```
    //
    // This version features styles
    static get stylePatterns () {
      return {
        // This adds a "*" character after the label for input fields that have the required attribute present.
        requiredLabelAsterisk: css`
          :host([required][label]) label div#label-text::after {
            content: '*';
            padding-left: 2px;
            position: relative;
          }
        `,
        // Changes elevation on mouse hover
        hoverStyle: css`
          :host(:hover) {
            --mat-theme-box-shadow: var(--mat-theme-box-shadow2);
          }

          :host([disabled]:hover) {
            --mat-theme-box-shadow: none;
          }
        `,
        // Styles can be adjusted on focused elements.
        focusStyle: css`
          :host([has-focus]), :host([has-focus][outlined]) {
            --mat-theme-border: 2px solid var(--mat-primary-color);
            --mat-label-color: var(--mat-primary-color);
          }

          :host([has-focus]) #native {
            padding-bottom: -1px;
          }
        `,
        // Text input field specific material implementation. This template is
        // responsible for the default, dense and outlined styles. (Material Text Fields)[https://material.io/components/text-fields#specs]
        inputField: css`
          :host {
            position: relative;
            padding: 0 12px;
            padding-bottom: 16px;
            margin: 5px;
            min-width: var(--mat-form-element-min-width, fit-content);
            font-family: var(--font-family);
          }

          :host([disabled]) {
            --mat-input-color: var(--mat-boundaries-color, #999)
          }

          :host([dense]) {
            --mat-form-element-height: 40px;
            padding-bottom: 8px;
          }

          :host([dense]) #native {
            padding: var(--mat-form-element-padding, 14px 10px 0);
          }

          :host([outlined]) {
            --mat-background: white;
            --mat-theme-border: 2px solid #ccc;
          }

          :host([outlined]) #native {
            border-bottom: unset;
            border: var(--mat-input-border, var(--mat-theme-border));
            border-radius: var(--mat-input-border-radius, 4px);
          }

          #native {
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

          #native:focus,
          #native:active {
            outline: none
          }

          #native::selection {
            background-color: var(--mat-background-dark);
          }

          :host(:not([disabled])) #native:invalid {
            background-color: var(--mat-error-color);
            color: var(--mat-error-text);
            border-color: var(--mat-error-text);
          }

          #native:disabled {
            filter: saturate(0);
            opacity: 0.85;
          }

          #native:disabled:hover {
            background-color: initial !important;
          }
        `,

        // Base style for input labels.
        inputLabel: css`
           label {
            position: absolute;
            display: inline-flex;
            font-size: var(--mat-label-font-size, 14px);
            border: var(--mat-label-border, none);
            color: var(--mat-label-color,  var(--mat-primary-color-light));
            padding: var(--mat-label-padding, 0 6px);
            margin-left: var(--mat-label-margin-left, 8px);
            min-width: fit-content;
            white-space: nowrap;
            --half-height: calc(var(--mat-form-element-height) / 2);
            top: calc(var(--half-height) + 8px);
            transform: translateY(-50%);
            left: 12px;
            will-change: transform;
            transition: transform 0.1s ease-in-out;
          }

          :host([dense]) label {
            top: var(--half-height);
            left: var(--mat-label-margin-left, 8px);
          }

          :host(:not([disabled])) #native:invalid + label,
          :host(:not([disabled])) #native:invalid ~ label {
            background-color: none;
            --mat-label-color: darkred;
          }
        `,
        // When applicable (i.e. text input fields), `floatingLabel` should be
        // used to enable the typical mateiral design label animation.
        floatingLabel: css`
          :host([has-value]) label,
          #native:focus ~ label,
          #native:placeholder-shown ~ label {
            transform: translateY(calc(var(--half-height) / -1)) scale(0.8);
            transform-origin: 0 0;
            transition: transform 0.1s ease-in-out, background 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          :host([dense][has-value]) label,
          :host([dense]) #native:focus ~ label,
          :host([dense]) #native:placeholder-shown ~ label {
            background: var(--mat-label-background, transparent)
          }

          :host([outlined]:not([dense][has-value])) label,
          :host([outlined]:not([dense])) #native:focus ~ label,
          :host([outlined]:not([dense])) #native:placeholder-shown ~ label {
            transform: translateY(calc(var(--half-height) / -1)) scale(0.8);
            transform-origin: 0 0;
            background: var(--mat-label-background, transparent);
          }
        `,
        // Alternative label style, fixed in the floating position, useful in
        // cases where the default position might clash with native features,
        // like the date input placeholder text.
        fixedLabel: css`
          label, #native:focus ~ label,
          :host([has-value]) label,
          #native:placeholder-shown ~ label {
            transform: translateY(calc(var(--half-height) / -1)) scale(0.8);
            transform-origin: 0 0;
          }

          :host([dense]) label, 
          :host([dense]) #native:focus ~ label,
          :host([dense]) :host([has-value]) label,
          :host([dense]) #native:placeholder-shown ~ label
           {
            top: var(--half-height);
            transform: translateY(calc(var(--half-height) / -1)) scale(0.8);
            left: 8px;
          }

        `,
        // Styling fo the error messages for the input fields.
        errorMessage: css`
          span.error-message {
            position: absolute;
            bottom: 0;
            left: 16px;
            font-size: 80%;
            white-space: nowrap;
            opacity: 0;
            line-height: 0;
          }

          :host(:not([disabled])) #native:invalid ~ span.error-message {
            opacity: 1;
          }
        `,
        // Auxiliary style that will hide the native element, for cases in which
        // the broser style is not flexible enough for material design
        // implementation, as is the case for checkboxes and radio inputs.
        hideNativeWidget: css`
          input {
            position: unset;
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }
        `
      }
    }

    static get styles () {
      return [
        super.styles || [],
        css`
          @-webkit-keyframes fadeIn {
            0%   { opacity: 0; }
            100% { opacity: 1; }
          }
          @-moz-keyframes fadeIn {
            0%   { opacity: 0; }
            100% { opacity: 1; }
          }
          @-o-keyframes fadeIn {
            0%   { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes fadeIn {
            0%   { opacity: 0; }
            100% { opacity: 1; }
          }

          @-webkit-keyframes fadeOut {
            0%   { opacity: 1; }
            100% { opacity: 0; }
          }
          @-moz-keyframes fadeOut {
            0%   { opacity: 1; }
            100% { opacity: 0; }
          }
          @-o-keyframes fadeOut {
            0%   { opacity: 1; }
            100% { opacity: 0; }
          }
          @keyframes fadeOut {
            0%   { opacity: 1; }
            100% { opacity: 0; }
          }

          :host {
            /* These properties as common to all elements and important to enable proper styling of native elements. */
            display: block;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            box-sizing: border-box;
            /* These are the custom properties that make it possible to apply light themes, by changing colors and a few properties, like borders and shadows. */
            /* Default font */
            --mat-font-family: Roboto, sans-serif;
            /* The primary and secondary colors are applied to color accents and help with visual context. (Color Guidelines)[https://material.io/design/color/the-color-system.html#color-theme-creation] */
            --mat-primary-color: #455a64;
            --mat-primary-color-light: #718792;
            --mat-primary-color-dark: #1c313a;
            --mat-secondary-color: #512da8;
            --mat-secondary-color-light: #8559da;
            --mat-secondary-color-dark: #140078;
            --mat-boundaries-color: #999;
            --mat-primary-text: #333;
            --mat-secondary-text: #000;
            --mat-text-on-dark: #fff;
            --mat-text-on-light: #000;
             --mat-error-color: pink;
            --mat-error-text: darkred;
            /* Other aspects of the elements are used to convey the general look and feel of the theme. Material Design leans heavily on border and shadows. These are the default values taken from the guidelines. */
            --mat-theme-border-style: solid;
            --mat-theme-border-width: 1px;
            --mat-theme-border-color: var(--mat-boundaries-color);
            --mat-theme-border-radius: 4px;
            --mat-theme-border: var(--mat-theme-border-width) var(--mat-theme-border-style) var(--mat-theme-border-color);
            /* TPE uses five elevation levels */
            --mat-theme-box-shadow: none;
            --mat-theme-box-shadow1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            --mat-theme-box-shadow2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --mat-theme-box-shadow3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --mat-theme-box-shadow4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            --mat-theme-box-shadow5: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            --mat-theme-shadow-transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
            --mat-form-element-height: 56px;
            --mat-form-element-min-width: 280px;
            --mat-background: white;
            --mat-background-dark: #ccc;
            --mat-label-background: transparent;
          }

          :host([hidden]) {
            display: none;
          }

        `
      ]
    }
  }
}

// Default theme colors in Material Design color tool:
// https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=616161&secondary.color=512DA8
