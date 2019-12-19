import {Style} from '@flexio-oss/stylist'


/**
 * @interface
 */
export class ElementsStyle extends Style {

  /**
   * @return {string}
   */
  close() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  tag() {
    throw new Error('should be override')
  }


}


/**
 *
 * @param instance
 * @return {boolean}
 */
export const isElementStyle = (instance) => instance instanceof ElementsStyle
