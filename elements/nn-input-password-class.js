import { NnInputPassword } from 'tpe/elements/nn-input-password-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputPasswordMaterial extends Shared(NnInputPassword) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-password', NnInputPasswordMaterial)
