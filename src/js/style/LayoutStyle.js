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
  rowJustifyLeft() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  rowJustifyRight() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  rowJustifyCenter() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  rowAlignTop() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  rowAlignBottom() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  rowAlignCenter() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  column() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  columnAlignTop() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  columnAlignBottom() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  columnAlignCenter() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  columnJustifyLeft() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  columnJustifyRight() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  columnJustifyCenter() {
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

  /**
   * @return {ColumnHeightStyle}
   */
  columnHeight() {
    throw new Error('should be override')
  }

}


/**
 *
 * @param instance
 * @return {boolean}
 */
export const isLayout = (instance) => instance instanceof LayoutStyle
