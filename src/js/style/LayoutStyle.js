import {Style} from '@flexio-oss/stylist'

/**
 * @interface
 */
export class LayoutStyle extends Style {
  /**
   * @return {string}
   */
   container() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
   row() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
   column() {
    throw new Error('should be override')

  }

  /**
   * @return {ColumnWidthStyle}
   */
  mobileWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {ColumnWidthStyle}
   */
  tabletWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {ColumnWidthStyle}
   */
  desktopWidth() {
    throw new Error('should be override')
  }

}

/**
 *
 * @param instance
 * @return {boolean}
 */
export const isLayout = (instance) => instance instanceof LayoutStyle