import { EeToolbar } from 'tpe/elements/ee-toolbar-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
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
