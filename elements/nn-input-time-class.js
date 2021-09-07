import { NnInputTime } from 'tpe2/elements/nn-input-time-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputTimeMaterial extends Shared(NnInputTime) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-time', NnInputTimeMaterial)
