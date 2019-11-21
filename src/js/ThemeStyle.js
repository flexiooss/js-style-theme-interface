import {LayoutStyle} from './style/LayoutStyle'

/**
 * @interface
 */
export class ThemeStyle {
  /**
   *
   * @param {Stylist} stylist
   * @return {ThemeStyle}
   */
  register(stylist) {
    throw new Error('should be override')
  }

  /**
   *
   * @return {ColorStyle}
   */
  color() {
    throw new Error('should be override')
  }

  /**
   *
   * @return {FontSizeStyle}
   */
  fontSize() {
    throw new Error('should be override')
  }

  /**
   *
   * @return {FormStyle}
   */
  form() {
    throw new Error('should be override')
  }

  /**
   *
   * @return {ButtonStyle}
   */
  button() {
    throw new Error('should be override')
  }

  /**
   *
   * @return {BorderStyle}
   */
  border() {
    throw new Error('should be override')
  }

  /**
   *
   * @return {LayoutStyle}
   */
  layout() {
    throw new Error('should be override')
  }

  /**
   *
   * @return {LayersStyle}
   */
  layers() {
    throw new Error('should be override')
  }

}

/**
 *
 * @param instance
 * @return {boolean}
 */
export const isTheme = (instance) => instance instanceof ThemeStyle
