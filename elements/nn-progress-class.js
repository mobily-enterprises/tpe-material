import { NnProgress } from 'tpe/elements/nn-progress-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnProgressMaterial extends Shared(NnProgress) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-progress', NnProgressMaterial)