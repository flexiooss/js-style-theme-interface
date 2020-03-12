import {Style} from '@flexio-oss/stylist'


/**
 * @interface
 */
export class ElementsStyle extends Style {

  /**
   * @return {string}
   */
  tag() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  box() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  clickable() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  separator() {
    throw new Error('should be override')
  }
}


/**
 *
 * @param instance
 * @return {boolean}
 */
export const isElementStyle = (instance) => instance instanceof ElementsStyle
