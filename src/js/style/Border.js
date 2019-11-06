import {Style} from '@flexio-oss/stylist'
import {Layout} from './Layout'

/**
 * @interface
 */
export class Border extends Style {
  /**
   * @return {(StyleRules|string)}
   */
  get white() {
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
  get dark() {
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
  get primary() {
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
  get info() {
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
  get focus() {
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
  get danger() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get thinWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get lightWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get regularWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get mediumWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get boldWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get bigWidth() {
    throw new Error('should be override')
  }

}


/**
 *
 * @param instance
 * @return {boolean}
 */
export const isBorder = (instance) => instance instanceof Border
