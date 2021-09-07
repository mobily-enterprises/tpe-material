import { NnInputWeek } from 'tpe2/elements/nn-input-week-class'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputWeekMaterial extends Shared(NnInputWeek) {
    static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-week', NnInputWeekMaterial)