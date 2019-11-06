export class Theme {

  /**
   *
   * @return {Color}
   */
  color() {
    throw new Error('should be override')
  }

  /**
   *
   * @return {FontSize}
   */
  fontSize() {
    throw new Error('should be override')
  }

  /**
   *
   * @return {Form}
   */
  form() {
    throw new Error('should be override')
  }

  /**
   *
   * @return {Button}
   */
  button() {
    throw new Error('should be override')
  }

  /**
   *
   * @return {Border}
   */
  border() {
    throw new Error('should be override')
  }

  /**
   *
   * @return {Layout}
   */
  layout() {
    throw new Error('should be override')
  }

}
