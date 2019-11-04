import {Style} from '@flexio-oss/stylist'

/**
 * @interface
 */
export class Button extends Style {
  /**
   * @return {(StyleRules,string)}
   */
  get button() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get white() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get ligth() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get dark() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get muted() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get primary() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get secondary() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get info() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get success() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get focus() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get warning() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get danger() {
    throw new Error('should be override')
  }

}
