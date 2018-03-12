/**
 * Home
 * @class
 *
 * @classdesc The object that contains the HTML for
 * the home/demo page.
 */
class Home {
  /**
   * @constructor
   *
   * @desc This method is called when the class
   * is instantiated. It contains references
   * to variables accessible from the entire class as long
   * as they are bound to `this`.
   */
  constructor() {
    this.name = 'World';
  }

  /**
   * @method render
   *
   * @desc The `render` method
   * returns a string literal containing
   * the HTML to be displayed when the 
   * method is called. It doesn't perform
   * any action on its own except provide
   * the string to whatever instance is calling
   * the function. It uses a string literal so that
   * template literals can be passed in to reference
   * class-scope variables.
   *
   * Eg: `this.name` — see @constructor
   */
  render() {
    return `
<div class="intro">
  <h1>Hello, ${this.name}!</h1>
</div>
	  `;
  }
}

/**
 * Export the `Home` class so that it 
 * can be imported and used from other files.
 *
 * Since it's a default export, it must be
 * imported without braces `{}`.
 */
export default Home;

