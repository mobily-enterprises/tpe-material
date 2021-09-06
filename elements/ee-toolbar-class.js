import { EeToolbar } from 'tpe2/elements/ee-toolbar'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
import { css } from 'lit'

export class EeToolbarMaterial extends Shared(EeToolbar) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-toolbar', EeToolbarMaterial)
