import {Form} from './style/Form'
import {Border} from './style/Border'
import {Color} from './style/Color'
import {FontSize} from './style/FontSize'
import {Theme} from './Theme'
import {Button} from './style/Button'
import {Layout} from './style/Layout'
import {ColumnWidth} from './style/ColumnWidth'

export class TypeCheck {
  /**
   *
   * @param {*} instance
   * @return {boolean}
   */
  static isBorder(instance) {
    return instance instanceof Border
  }

  /**
   *
   * @param {*} instance
   * @return {boolean}
   */
  static isButton(instance) {
    return instance instanceof Button
  }

  /**
   *
   * @param {*} instance
   * @return {boolean}
   */
  static isColor(instance) {
    return instance instanceof Color
  }

  /**
   *
   * @param {*} instance
   * @return {boolean}
   */
  static isFontSize(instance) {
    return instance instanceof FontSize
  }

  /**
   *
   * @param {*} instance
   * @return {boolean}
   */
  static isForm(instance) {
    return instance instanceof Form
  }

  /**
   *
   * @param {*} instance
   * @return {boolean}
   */
  static isLayout(instance) {
    return instance instanceof Layout
  }

  /**
   *
   * @param {*} instance
   * @return {boolean}
   */
  static isColumnWidth(instance) {
    return instance instanceof ColumnWidth
  }

  /**
   *
   * @param {*} instance
   * @return {boolean}
   */
  static isTheme(instance) {
    return instance instanceof Theme
  }
}
