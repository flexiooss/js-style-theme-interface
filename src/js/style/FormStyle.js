import {Style} from '@flexio-oss/stylist'

/**
 * @interface
 */
export class FormStyle extends Style {
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
  rowActive() {
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
  rowError() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  labelColumn() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  labelContainer() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  label() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  placeholder() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  inputColumn() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  inputContainer() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  inputContainerError() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  input() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  inputError() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  inputText() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  select() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  selectSingle() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  selectMultiple() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  button() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  checkboxContainer() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  checkBoxLabel() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  checkbox() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  checkboxChecked() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  messageContainer() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  message() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  messageBefore() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  messageAfter() {
    throw new Error('should be override')
  }

}

/**
 *
 * @param instance
 * @return {boolean}
 */
export const isForm = (instance) => instance instanceof FormStyle
