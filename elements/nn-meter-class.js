import { NnMeter } from 'tpe/elements/nn-meter-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnMeterMaterial extends Shared(NnMeter) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-meter', NnMeterMaterial)