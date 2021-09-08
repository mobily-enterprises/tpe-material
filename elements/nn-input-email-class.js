import { NnInputEmail } from 'tpe/elements/nn-input-email-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputEmailMaterial extends Shared(NnInputEmail) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-email', NnInputEmailMaterial)
