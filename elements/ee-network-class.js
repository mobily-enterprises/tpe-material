import { EeNetwork } from 'tpe2/elements/ee-network-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
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
