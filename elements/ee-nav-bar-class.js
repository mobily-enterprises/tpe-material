import { EeNavBar } from 'tpe2/elements/ee-nav-bar-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
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
