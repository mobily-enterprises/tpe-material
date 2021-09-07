import { NnInputUrl } from 'tpe/elements/nn-input-url-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputUrlMaterial extends Shared(NnInputUrl) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-url', NnInputUrlMaterial)
