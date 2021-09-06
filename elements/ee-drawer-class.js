import { EeDrawer } from 'tpe2/elements/ee-drawer-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
import { css } from 'lit'

export class EeDrawerMaterial extends Shared(EeDrawer) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-drawer', EeDrawerMaterial)
