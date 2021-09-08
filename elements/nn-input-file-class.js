
import { NnInputFile } from 'tpe/elements/nn-input-file-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css, html } from 'lit'

export class NnInputFileMaterial extends Shared(NnInputFile) {
  static get styles () {
    return [
      super.styles,
      css`
        :host {
          display: block;
          min-width: 130px;
        }

        #filename {
          box-sizing: border-box;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 4px 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
          background-color: whitesmoke;
        }
      `
    ]
  }

  static get properties () {
    return {
      labelPosition: { type: String, attribute: false },
      validationMessagePosition: { type: String, attribute: false },
      buttonLabel: { type: String, attribute: 'button-label' }
    }
  }

  constructor () {
    super()
    this.labelPosition = 'after'
    this.validationMessagePosition = 'after'
    this.hideNative = true
    this.buttonLabel = 'Choose File'
  }

  render () {
    return html`
      <nn-button @click=${this._chooseFile}>${this.buttonLabel}</nn-button>
      <input type="file" id="native" @change="${this.fileNameChanged}" ?hidden=${this.hideNative} title=${this.title} >
      ${this.ifValidationMessageAfter}
      ${this.fileName
      ? this.lit.html`
          <div id="filename" title="${this.title}">${this.fileName}</div>
        `
      : ''
      }
      ${this.ifLabelAfter}
    `
  }

  _chooseFile (e) {
    this.shadowRoot.querySelector('#native').click()
  }
}

tpeRegistry.register('nn-input-file', NnInputFileMaterial)
