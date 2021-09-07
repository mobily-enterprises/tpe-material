import { EeNetwork } from 'tpe/elements/ee-network-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class EeNetworkMaterial extends Shared(EeNetwork) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-network', EeNetworkMaterial)
