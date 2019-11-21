import {Style} from '@flexio-oss/stylist'

/**
 * @interface
 */
export class LayersStyle extends Style {

  /**
   * @return {string}
   */
  container() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  layer() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  layerActive() {
    throw new Error('should be override')
  }

}

/**
 *
 * @param instance
 * @return {boolean}
 */
export const isLayer = (instance) => instance instanceof LayersStyle
