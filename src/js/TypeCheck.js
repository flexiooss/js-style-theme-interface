import {Form} from './Form'
import {Border} from './Border'
import {Color} from './Color'
import {FontSize} from './FontSize'

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
}
