import {Style} from '@flexio-oss/stylist'


/**
 * @interface
 */
export class ColumnHeightStyle extends Style {

  /**
   * @return {string}
   */
  w10() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  w20() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  w30() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  w40() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  w50() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  w60() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  w70() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  w80() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  w90() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  w100() {
    throw new Error('should be override')
  }


}


/**
 *
 * @param instance
 * @return {boolean}
 */
export const isColumnHeight= (instance) => instance instanceof ColumnHeightStyle
