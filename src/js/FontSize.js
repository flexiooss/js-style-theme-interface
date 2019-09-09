import {Style} from '@flexio-oss/stylist'

/**
 * @interface
 */
export class FontSize extends Style {
  /**
   * @return {(StyleRules,string)}
   */
  get h1() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get h2() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get h3() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get h4() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get h5() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get h6() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get small() {
    throw new Error('should be override')
  }
}
