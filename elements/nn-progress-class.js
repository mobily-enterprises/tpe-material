import { NnProgress } from 'tpe2/elements/nn-progress-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/lib/tpeRegistry'
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