import { EeSnackBar } from 'tpe/elements/ee-snack-bar-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class EeSnackBarMaterial extends Shared(EeSnackBar) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-snack-bar', EeSnackBarMaterial)
