import { EeFadeIn } from 'tpe/elements/ee-fade-in-class'
import { Shared } from '../mixins/Shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class EeFadeInMaterial extends Shared(EeFadeIn) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-fade-in', EeFadeInMaterial)
