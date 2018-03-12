/**
 * Reference external classes
 * or functions to be used in the app.
 *
 * Parcel will bundle them into one file
 * that the brower can understand.
 */
import Home from './Home'

/**
 * @function main
 *
 * @desc This function is a wrapper for the application.
 * It serves to make the app testable in this case and
 * to provide a function to the Window object's `onload`
 * event handler that fires when all resources called from
 * the HTML file have been loaded.
 *
 * @param event <Event> - Window event object.
 * Interface: https://developer.mozilla.org/en-US/docs/Web/API/Event
 * @param appRoot <Element> - Document element where the page will
 * be rendered.
 */
function main(event = {}, appRoot = null) {
  /**
   * The `render()` function belongs
   * to the class `Home`. Therefore
   * `Home` must be instantiated before
   * `render` can be called.
   *
   * For usage, see `Home.js` in this
   * folder.
   */
  let h = new Home();

  /**
   * Display `Home` in the root element
   * of the page
   */
  appRoot.innerHTML = h.render();
}

/**
 * Export the `main` function so we can test our application.
 */
export default main;
