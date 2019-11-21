import {Style} from '@flexio-oss/stylist'

/**
 * @interface
 */
export class FontSizeStyle extends Style {
  /**
   * @return {string}
   */
  h1() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h2() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h3() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h4() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h5() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h6() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  small() {
    throw new Error('should be override')
  }
}

/**
 *
 * @param instance
 * @return {boolean}
 */
export const isFontSize = (instance) => instance instanceof FontSizeStyle
