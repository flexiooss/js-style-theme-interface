import {Style} from '@flexio-oss/stylist'

/**
 * @interface
 */
export class BorderStyle extends Style {

  /**
   * @return {string}
   */
  left() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  top() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  bottom() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  right() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  border() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  white() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  light() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  dark() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  muted() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  primary() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  secondary() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  info() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  success() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  focus() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  warning() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  danger() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  thinWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  lightWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  regularWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  mediumWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  boldWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  bigWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  dashed() {
    throw new Error('should be override')
  }
}

/**
 *
 * @param instance
 * @return {boolean}
 */
export const isBorder = (instance) => instance instanceof BorderStyle
