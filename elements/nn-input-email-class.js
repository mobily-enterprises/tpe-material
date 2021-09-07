import { NnInputEmail } from 'tpe2/elements/nn-input-email-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/lib/tpeRegistry'
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
