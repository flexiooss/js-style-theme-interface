import {Style} from '@flexio-oss/stylist'

/**
 * @interface
 */
export class ColorStyle extends Style {
  /**
   * @return {string}
   */
  white() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  whiteBg() {
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
  lightBg() {
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
  darkBg() {
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
  mutedBg() {
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
  primaryBg() {
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
  secondaryBg() {
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
  successBg() {
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
  infoBg() {
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
  focusBg() {
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
  warningBg() {
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
  dangerBg() {
    throw new Error('should be override')
  }
}

/**
 *
 * @param instance
 * @return {boolean}
 */
export const isColor = (instance) => instance instanceof ColorStyle
