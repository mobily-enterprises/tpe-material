import { NnInputWeek } from 'tpe/elements/nn-input-week-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
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