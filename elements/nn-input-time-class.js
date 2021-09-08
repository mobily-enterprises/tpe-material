import { NnInputTime } from 'tpe/elements/nn-input-time-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
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
