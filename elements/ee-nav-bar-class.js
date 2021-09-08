import { EeNavBar } from 'tpe/elements/ee-nav-bar-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class EeNavBarMaterial extends Shared(EeNavBar) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-nav-bar', EeNavBarMaterial)
