import { EeHeader } from 'tpe/elements/ee-header-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class EeHeaderMaterial extends Shared(EeHeader) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-header', EeHeaderMaterial)
