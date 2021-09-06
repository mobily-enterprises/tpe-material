import { NnInputWeek } from 'tpe2/elements/nn-input-week'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
import { css } from 'lit'

export class NnInputWeek extends Shared(NnInputWeek) {
    static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-week', NnInputWeekMaterial)