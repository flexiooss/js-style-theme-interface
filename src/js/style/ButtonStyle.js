import {Style} from '@flexio-oss/stylist'

/**
 * @interface
 */
export class ButtonStyle extends Style {
  /**
   * @return {string}
   */
  button() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  buttonIcon() {
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
  remove() {
    throw new Error('should be override')
  }
  /**
   * @return {string}
   */
  add() {
    throw new Error('should be override')
  }

}

/**
 *
 * @param instance
 * @return {boolean}
 */
export const isButton = (instance) => instance instanceof ButtonStyle
