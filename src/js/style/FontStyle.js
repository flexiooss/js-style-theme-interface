import {Style} from '@flexio-oss/stylist'


/**
 * @interface
 */
export class FontStyle extends Style {

  /**
   * @return {string}
   */
  light() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  regular() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  semiBold() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  bold() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  italic() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  uppercase() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  lowercase() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  capitalize() {
    throw new Error('should be override')
  }

}


/**
 *
 * @param instance
 * @return {boolean}
 */
export const isFontStyle = (instance) => instance instanceof FontStyle
