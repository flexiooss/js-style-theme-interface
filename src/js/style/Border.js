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
  get ligth() {
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
  get thin() {
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
  get regular() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get medium() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get bold() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get big() {
    throw new Error('should be override')
  }

}


/**
 *
 * @param instance
 * @return {boolean}
 */
export const isBorder = (instance) => instance instanceof Border
