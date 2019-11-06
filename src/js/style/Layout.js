import {Style} from '@flexio-oss/stylist'

/**
 * @interface
 */
export class Layout extends Style {
  /**
   * @return {(StyleRules|string)}
   */
  get container() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get row() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules|string)}
   */
  get col() {
    throw new Error('should be override')

  }

  /**
   * @return {ColumnWidth}
   */
  mobileWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {ColumnWidth}
   */
  tabletWidth() {
    throw new Error('should be override')
  }

  /**
   * @return {ColumnWidth}
   */
  desktopWidth() {
    throw new Error('should be override')
  }

}
