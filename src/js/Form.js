import {Style} from '@flexio-oss/stylist'

/**
 * @interface
 */
export class Form extends Style {
  /**
   * @return {(StyleRules,string)}
   */
  get container() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get row() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get column() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get rowError() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get labelColumn() {
    throw new Error('should be override')
  }
  /**
   * @return {(StyleRules,string)}
   */
  get labelContainer() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get label() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get inputColumn() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get inputContainer() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get inputContainerError() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get input() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get inputError() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get inputText() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get messageContainer() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get message() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get messageBefore() {
    throw new Error('should be override')
  }

  /**
   * @return {(StyleRules,string)}
   */
  get messageAfter() {
    throw new Error('should be override')
  }

}
