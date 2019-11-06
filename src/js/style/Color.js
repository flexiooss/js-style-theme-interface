import {Style} from '@flexio-oss/stylist'
import {Layout} from './Layout'

/**
 * @interface
 */
export class Color extends Style {
  /**
   * @return {(StyleRules|string)}
   */
  get white() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get whiteBg() {
    throw new Error('should be override')
  }
  /**
   * @return {(StyleRules|string)}
   */
  get light() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get lightBg() {
    throw new Error('should be override')
  }
  /**
   * @return {(StyleRules|string)}
   */
  get dark() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get darkBg() {
    throw new Error('should be override')
  }
  /**
   * @return {(StyleRules|string)}
   */
  get muted() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get mutedBg() {
    throw new Error('should be override')
  }
  /**
   * @return {(StyleRules|string)}
   */
  get primary() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get primaryBg() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get secondary() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get secondaryBg() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get success() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get successBg() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get info() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get infoBg() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get focus() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get focusBg() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get warning() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get warningBg() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get danger() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get dangerBg() {
    throw new Error('should be override')
  }
}

/**
 *
 * @param instance
 * @return {boolean}
 */
export const isColor = (instance) => instance instanceof Color
