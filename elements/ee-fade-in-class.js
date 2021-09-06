import { EeFadeIn } from 'tpe2/elements/ee-fade-in'
import { Shared } from '../mixins/shared.js'
import tpeRegistry from 'tpe2/tpeRegistry'
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
