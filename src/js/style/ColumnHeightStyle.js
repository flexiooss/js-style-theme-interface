import {Style} from '@flexio-oss/stylist'


/**
 * @interface
 */
export class ColumnHeightStyle extends Style {

  /**
   * @return {string}
   */
  h10() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h20() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h30() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h40() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h50() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h60() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h70() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h80() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h90() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  h100() {
    throw new Error('should be override')
  }


}


/**
 *
 * @param instance
 * @return {boolean}
 */
export const isColumnHeight= (instance) => instance instanceof ColumnHeightStyle
